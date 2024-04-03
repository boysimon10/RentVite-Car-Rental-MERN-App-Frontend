import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaCar, FaCarBattery, FaWheelchair } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { MdOutlineReduceCapacity, MdOutlineDescription, MdAttachMoney } from "react-icons/md";
import { UidContext } from "../UseContext";
import Error from "./Error";

function CarSet() {
  axios.defaults.withCredentials = true;
  const uid = useContext(UidContext);

  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}car/${id}`
        );
        setCar(response.data);

      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCar();
  }, [id]);

  return (
    <>
      {uid ? (
        <>
          <Navbar />
          <section className="bg-white-0 flex justify-center items-center md:mx-[120px] lg:mx-[120px]">
            <div className="container px-6 py-24 mx-auto lg:py-12">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img src="./assets/carset.png" className="" alt="" />
                </div>
                <div className="mt-8 lg:w-1/2 lg:mt-0">
                  <form className="w-full lg:max-w-xl">
                    <div className={`relative flex items-center `}>
                      <span className="absolute">
                        <FaCar className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <input
                        type="text"
                        className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Marque (exemple: Toyota)"
                        value={car ? car.marque : ""}
                      />
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <FaCarBattery className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <input
                        type="text"
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Modèle"
                      />
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <IoLocation className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <input
                        type="text"
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Lieu de prise en charge"
                      />
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <MdAttachMoney className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <input
                        type="number"
                        min="0"
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Tarifs par jour"
                      />
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <LuFuel className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <select className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                        <option value="">Type de carburant</option>
                        <option value="Essence">Essence</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Electrique">Électrique</option>
                        <option value="Hybride">Hybride</option>
                        <option value="Manuelle">Gazoil</option>
                      </select>
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <FaWheelchair className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <select className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                        <option value="">Type de transmission</option>
                        <option value="Automatique">Automatique</option>
                        <option value="Manuelle">Manuelle</option>
                      </select>
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <MdOutlineReduceCapacity className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <input
                        type="number"
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Capacité d'accueil"
                        min="0"
                        max="6"
                      />
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <span className="absolute">
                        <MdOutlineDescription className="w-6 h-6 mx-3 text-gray-300" />
                      </span>
                      <textarea
                        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Description"
                      ></textarea>
                    </div>
                    <div className={`relative flex items-center mt-4`}>
                      <div className="w-full mx-auto">
                        <label className="text-sm text-black mb-2 block">
                          Upload Photos (en cours de développement)
                        </label>
                        <label className="text-sm text-red-600 mb-2 block">
                          Mettre le lien de l'image correpondant au modele de la
                          voiture
                        </label>
                        <div className={`relative flex items-center `}>
                          <span className="absolute">
                            <FaCar className="w-6 h-6 mx-3 text-gray-300" />
                          </span>
                          <input
                            type="text"
                            className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Lien de L'image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:flex md:items-center">
                      <button
                        type="submit"
                        className="w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/3 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        Ajouter
                      </button>
                    </div>
                    <div className="mt-4 md:flex md:items-center">
                      <button
                        className="w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg md:w-1/3 hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        Supprimer la voiture
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <Error />
        </>
      )}
    </>
  );
}

export default CarSet;