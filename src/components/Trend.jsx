import axios from 'axios';
import React, {useState, useEffect } from 'react';
import CardList from './CardList';

function Trend() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}car/`)
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
  return (
    <>
      <div className='md:mx-[130px] lg:mx-[130px]'>
                <p className="mb-4 text-4xl font-bold text-blue sm:text-5xs md:mb-8 md:text-6x">
                Tendances
                </p>
                </div>
                <CardList cars={cars.slice(0, 8)} />
    </>
  )
}

export default Trend;
