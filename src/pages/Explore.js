import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../components/CardList'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading';

const Explore = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}car/`)
          .then(response => {
              setCars(response.data);
              setLoading(false); // Arrête le chargement une fois les données chargées
          })
          .catch(error => {
              console.error(error);
              setLoading(false); // Arrête le chargement en cas d'erreur
          });
  }, []);
  

    return (
    <>
        <Navbar />
        {loading ? (
            <Loading />
        ) : (
            <CardList cars={cars} />
        )}
    </>
);
}

export default Explore