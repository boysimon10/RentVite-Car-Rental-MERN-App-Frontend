import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const CardList = ({ cars }) => (
    <div className='mt-8 mx-[120px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-center gap-5'>
        {cars.map(car => (
            <div key={car._id}>
                <Link to={`/cardetail/${car._id}`}>
                    <Card key={car._id} car={car} />
                </Link>
            </div>
        ))}
    </div>
);

export default CardList;
