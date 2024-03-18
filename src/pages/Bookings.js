import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import BookingList from '../components/BookingList';
import { UidContext } from '../UseContext';
import Login from '../pages/Login';

function Bookings() {
    const uid = useContext(UidContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.defaults.withCredentials = true;
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}booking/`);
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleAcceptBooking = (id) => {
        axios.put(`${process.env.REACT_APP_API_URL}booking/${id}/confirm`, { statut: 'acceptée' }).then((response) => {
          // Mise à jour de l'état local avec la réservation mise à jour
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking.id === id ? { ...booking, statut: response.data.statut } : booking
                )
            );
          window.location.reload(); // Rechargement de la page
        });
    };

    const handleRejectBooking = (id) => {
        axios.put(`${process.env.REACT_APP_API_URL}booking/${id}/confirm`, { statut: 'refusée' }).then((response) => {
          // Mise à jour de l'état local avec la réservation mise à jour
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking.id === id ? { ...booking, statut: response.data.statut } : booking
                )
            );
            window.location.reload(); // Rechargement de la page
        });
};


    return (
        <>
            <Navbar />
            {uid ? (
                <BookingList bookings={bookings} onAcceptBooking={handleAcceptBooking} onRejectBooking={handleRejectBooking} />
            ) : (
                <Login />
            )}
        </>
    );
}

export default Bookings;
