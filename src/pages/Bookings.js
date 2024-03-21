import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BookingList from "../components/BookingList";
import { UidContext } from "../UseContext";
import Login from "../pages/Login";

function Bookings() {
  const uid = useContext(UidContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}booking/`, config
        );
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleAcceptBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
  
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}booking/${id}/confirm`,
        { statut: "acceptée" },
        config
      );
  
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, statut: response.data.statut } : booking
        )
      );
  
      window.location.reload(); // Rechargement de la page
    } catch (error) {
      console.error("Erreur lors de l'acceptation de la réservation :", error);
      // Gérer l'erreur ici
    }
  };
  
  const handleRejectBooking = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
  
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}booking/${id}/confirm`,
        { statut: "refusée" },
        config
      );
  
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking.id === id ? { ...booking, statut: response.data.statut } : booking
        )
      );
  
      window.location.reload(); // Rechargement de la page
    } catch (error) {
      console.error("Erreur lors du refus de la réservation :", error);
      // Gérer l'erreur ici
    }
  };
  

  return (
    <>
      <Navbar />
      {uid ? (
        <BookingList
          bookings={bookings}
          onAcceptBooking={handleAcceptBooking}
          onRejectBooking={handleRejectBooking}
        />
      ) : (
        <Login />
      )}
    </>
  );
}

export default Bookings;
