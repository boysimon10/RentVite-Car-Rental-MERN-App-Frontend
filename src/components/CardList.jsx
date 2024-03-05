import React from 'react';
import Card from './Card';

const CardList = ({ cars }) => (
    <div className='mt-8 mx-[120px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
        {cars.map(car => (
            <Card key={car._id} car={car} />
        ))}
    </div>
);

export default CardList;
