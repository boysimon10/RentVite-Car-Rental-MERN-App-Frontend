import axios from 'axios';
import React, {useState, useEffect } from 'react';
import CardList from './CardList';

function Trend() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/car/')
            .then(response => {
                setCars(response.data);
                 
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
  return (
    <>
      <div className='mx-[130px]'>
                <p className="mb-4 text-4xl font-bold text-blue sm:text-5xs md:mb-8 md:text-6x">
                Tendances
                </p>
                </div>
                <CardList cars={cars.slice(0, 5)} />
    </>
  )
}

export default Trend;
