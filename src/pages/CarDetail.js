import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Error from './Error';
import { useParams, Link } from 'react-router-dom';
import { UidContext } from '../UseContext';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { LuFuel } from "react-icons/lu";
import { FaWheelchair } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const CarDetail = () => {
  axios.defaults.withCredentials = true;
  const uid = useContext(UidContext);

  const { id } = useParams();
  const [car, setCar] = useState(null);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}car/${id}`);
        setCar(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching car:', error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) {
    return (
      <>
          <Loading />
      </>
    );
  } 
  if (!car) {
    return (
      <Error />
    );
  }

  const currentDate = new Date().toISOString().split('T')[0];

    const handleStartDateChange = (date) => {
        setStartDate(date);
        calculateTotalPrice(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        calculateTotalPrice(startDate, date);
    };

    const calculateTotalPrice = (start, end) => {
        if (start && end) {
            const days = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
            setTotalPrice(days * car.tarifs);
        }
    };

    
  const handleBookCar = async (e) => {
    e.preventDefault();
    try {
      if (new Date(startDate) < new Date(currentDate) || new Date(endDate) < new Date(currentDate)) {
          throw new Error('Veuillez sélectionner des dates valides.');
      }

      if (uid === car.proprietaire._id) {
        alert("Vous ne pouvez pas louer votre propre voiture.");
        return;
      }

      const response = await axios.post(`${process.env.REACT_APP_API_URL}booking`, {
          user: uid, // Utilisation de l'userId du contexte utilisateur
          car: car._id,
          dateDebut: startDate,
          dateFin: endDate,
          tarifstotals:totalPrice
      });
      console.log('Réservation effectuée:', response.data);
      window.location = "/bookings";
      
  } catch (error) {
      console.error('Erreur lors de la réservation:', error);
      // la logique de gestion des erreurs
  }
  }

  return (
    <>
      <Navbar />
      <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-5 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full object-cover object-center border border-gray-200 rounded-lg"
        src={car.photos[0]}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
        Par <span>{car.proprietaire.nom}</span>
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        {car.marque} {car.modele}
        </h1>
        

              <div className="flex flex-wrap mb-4 mt-4">
          <div className="w-full md:w-1/2">
              <span className="flex items-center">
                  <span className="mr-2">
                      <LuFuel className="bg-gray-light" />
                  </span>
                  <span className="mr-6">{car.typeCarburant}</span>
              </span>
          </div>
          <div className="w-full md:w-1/2">
              <span className="flex items-center">
                  <span className="mr-2">
                      <FaWheelchair />
                  </span>
                  <span className="mr-6">{car.transmission}</span>
              </span>
          </div>
          <div className="w-full md:w-1/2">
              <span className="flex items-center">
                  <span className="mr-2">
                      <MdOutlineReduceCapacity />
                  </span>
                  <span className='mr-6'>{car.capaciteAccueil}</span>
              </span>
          </div>
          <div className="w-full md:w-1/2">
              <span className="flex items-center">
                  <span className="mr-2">
                      <IoLocation />
                  </span>
                  <span>{car.lieuPriseEnCharge}</span>
              </span>
          </div>
      </div>
        <p className="leading-relaxed">
        {car.description}
        </p>
      <form onSubmit={handleBookCar}>


      <div className="flex flex-col mt-6  pb-5 border-b-2 border-gray-200 mb-5">
          <div className="flex flex-col sm:flex-row ">
              <span className="mr-3 mb-2 sm:mb-0">Du</span>
              <div className="relative">
                  <input
                      type="date"
                      className='rounded border appearance-none py-2 focus:outline-none border-blue text-base pl-3 pr-2'
                      id="start" name="start" value={startDate} min={currentDate} onChange={(e) => handleStartDateChange(e.target.value)}
                  />
              </div>
              <span className="mr-3 ml-4 mb-2 sm:mb-0">au</span>
              <div className="relative">
                  <input
                      type="date"
                      className='rounded border appearance-none py-2 focus:outline-none border-blue text-base pl-3 pr-2'
                      id="end" name="end" value={endDate} min={currentDate} onChange={(e) => handleEndDateChange(e.target.value)}
                  />
              </div>
          </div>
      </div>

      <div className="flex flex-col sm:flex-row">
    <span className="title-font font-medium text-xl text-gray-900">
        {car.tarifs}/Jour - <span className='text-blue'>Prix total:</span> {totalPrice} FCFA
    </span>
    {uid ? (
        <button type="submit" className="flex ml-auto text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-light rounded">
            Réserver
        </button>
    ) : (
        <Link to="/login">
            <button className="flex ml-auto text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-blue-light rounded">
                Se connecter pour réserver
            </button>
        </Link>
    )}


          {/*
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button> */}
        </div>
      </form>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default CarDetail;