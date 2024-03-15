import React from 'react';
import BookingItem from './BookingItem';

function BookingList({ bookings, onAcceptBooking, onRejectBooking }) {
    // Inverser l'ordre des réservations
    const reversedBookings = bookings.slice().reverse();

    return (
        <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:flex-wrap'>
            {reversedBookings.map((booking) => (
                <BookingItem
                    key={booking._id}
                    booking={booking}
                    onAcceptBooking={onAcceptBooking}
                    onRejectBooking={onRejectBooking}
                />
            ))}
        </div>
    );
}

export default BookingList;
