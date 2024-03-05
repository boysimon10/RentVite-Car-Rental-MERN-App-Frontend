import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../components/CardList'
import Navbar from '../components/Navbar'

const Explore = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/car/')
            .then(response => setCars(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
      <>
        <Navbar />
        <CardList cars={cars} />
      </>
    );
};

export default Explore;
