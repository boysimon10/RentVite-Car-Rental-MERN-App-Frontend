import React, { useContext } from 'react';
import { UidContext } from '../UseContext';

function BookingItem({ booking, onAcceptBooking, onRejectBooking }) {
    const uid = useContext(UidContext);
    
    const strUcFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };// simple fonction qui Met en majuscule le premier lettre

    const handleAccept = () => {
        onAcceptBooking(booking._id); 
    };
    
    const handleReject = () => {
        onRejectBooking(booking._id); 
    };

    const renderButtons = () => {
        if (uid === booking.user?._id) {
            return (
                <p>Statut: <span className='text-blue text-bold'>{strUcFirst(booking.statut)}</span></p>
            );
        } else if (uid === booking.car.proprietaire._id) {
            if (booking.statut === "en attente") {
                return (
                    <div className="flex items-center space-x-4">
                        <button type="button" onClick={handleReject} className='mt-6 w-full rounded-md bg-red-500 py-1 px-1.5 font-medium text-white hover:bg-red-600'>Refuser</button>
                        <button type="button" onClick={handleAccept} className='mt-6 w-full rounded-md bg-green-500 py-1 px-1.5 font-medium text-white hover:bg-green-600'>Accepter</button>
                    </div>
                );
            } else {
                return (
                    <p>Statut: <span className='text-blue text-bold'>{strUcFirst(booking.statut)}</span></p>
                );
            }
        }
        // Retourne null si l'ID de l'utilisateur n'est pas lié à un cas spécifié
        return null;
    };

    // Retourne null si l'ID de l'utilisateur n'est pas lié à un cas spécifié
    if (!uid || (uid !== booking.user?._id && uid !== booking.car.proprietaire._id)) {
        return null;
    }

    return (
        <div className="rounded-lg md:w-2/3" key={booking._id}>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <img
                    src={booking.car?.photos}
                    alt="car"
                    className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">{booking.car?.marque} {booking.car?.modele}</h2>
                        <p className="mt-1 text-sm text-gray-900">Du {new Date(booking.dateDebut).toLocaleDateString()} au {new Date(booking.dateFin).toLocaleDateString()}</p>
                        <p className="mt-1 text-xs text-gray-900">Reservation faite par <span className={uid === booking.user?._id ? 'text-green-500 underline' : 'text-blue'}>{uid === booking.user?._id ? 'Vous' : booking.user?.nom}</span></p>
                        <p className="mt-1 text-xs text-gray-900">Voiture de <span className="text-blue">{booking.car.proprietaire.nom}</span></p>
                        <p className="mt-1 text-xs text-gray-900">Date de Reservation: <span className='text-blue'>{new Date(booking.dateReservation).toLocaleDateString()}</span></p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                            <p className="text-xl">{booking.tarifstotals} FCFA</p>
                        </div>
                        {renderButtons()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingItem;
