import React from 'react'
import Navbar from '../components/Navbar';

function CarSet() {
  return (
    <>
    <Navbar />
    <section className="bg-white flex justify-center items-center md:mx-[120px] lg:mx-[120px]">
      <div className="container px-6 py-24 mx-auto lg:py-12">
        <div className="lg:flex">
          <div className="lg:w-1/2">
            <img src="./assets/setting.png" className="" alt="" />
          </div>
          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <form className="w-full lg:max-w-xl">
              <div className="w-full mx-auto">
                <label className="text-xl text-black mb-2 block">
                  Photo de profil
                </label>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG and JPG are Allowed.
                </p>
              </div>
              {/*<div className="mt-2 md:flex md:items-center">
                <button
                  className="w-full px-2 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/2 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Mettre à jour
                </button>
              </div>*/}

              {/* à ajouter la suppression d'un compte entraine la suppression aussi des voitures mis en location mais garde l'historique de reservati
        ou met en insdiponible j'sais pas encore comment gerer ce probleme */}
              <button
                className="w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/3 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Mettre à jour
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default CarSet;