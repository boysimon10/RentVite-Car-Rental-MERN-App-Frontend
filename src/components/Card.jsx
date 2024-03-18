import React from 'react'

const Card = ({ car }) => (
    <div key={car._id}>

<div className="relative mx-auto w-full max-w-xs pt-6">
    <div className="rounded-lg">
      <div className="relative flex h-60 justify-center overflow-hidden rounded-lg cursor-pointer">
        <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
          <img
            src={car.photos[0]}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 mb-3 flex justify-center">
        </div>
        {/*<span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-blue-light px-3 py-2 text-sm font-medium text-white">
          
          Disponible
        </span>*/}
      </div>
      <div className="">
        <div className="mt-4 grid grid-cols-2">
          <div className="flex items-center">
            <div className="relative">
              <h2
                className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                title="New York"
              >
                {car.marque} {car.modele}
              </h2>
              <p
                className="mt-2 line-clamp-1 text-sm text-gray-800"
                title="New York, NY 10004, United States"
              >
                {car.lieuPriseEnCharge}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
              <span className="text-sm uppercase"> FCFA </span>
              <span className="text-lg">{car.tarifs}</span>/jour
            </p>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2  gap-4 border-b border-t border-gray-200 pb-3 pt-3">
          <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
        <svg xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
          className="mr-3 w-5 h-5 fill-current text-gray-800 xl:h-4 xl:w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
        </svg>
            <span className="xl:mt-0"> {car.transmission} </span>
          </p>
          <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
            <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="mr-3 w-5 h-5 fill-current text-gray-800 xl:h-4 xl:w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
            <span className="mt-0"> {car.capaciteAccueil} places </span>
          </p>
        </div>
      </div>
    </div>
</div>
</div>
)


export default Card;
