import React from 'react'

function BookingItem() {
    return (
        <>
        <div className="rounded-lg md:w-2/3">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
                src="https://cdn.motor1.com/images/mgl/QjVL0/s1/toyota-yaris-2022---tailandia.webp"
                alt="car"
                className="w-full rounded-lg sm:w-40"
            />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">Toyota Yaris</h2>
                <p className="mt-1 text-sm text-gray-900">Du 13/03/2024 au 13/03/2024</p>
                <p className="mt-1 text-xs text-gray-900">Reservation fais par <span className='underline'>LilSarré</span></p>
                <p className="mt-1 text-xs text-gray-900">Date de Reservation: <span className='underline'>22222222</span></p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
                <p className="text-xl">259000 FCFA</p>
            </div>
            <div className="flex items-center space-x-4">
                <button className='mt-6 w-full rounded-md bg-red-500 py-1 px-1.5 font-medium text-blue-50 hover:bg-red-600 text-white-0'>Refuser</button>
                <button className='mt-6 w-full rounded-md bg-green-500 py-1 px-1.5 font-medium text-blue-50 hover:bg-green-600 text-white-0'>Accepter</button>
            </div>
            </div>
        </div>
        </div>
    </div>
        </>
)
}

export default BookingItem;
