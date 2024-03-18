
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Error from './Error';
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { UidContext } from '../UseContext';
import { FaCar } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { FaWheelchair } from "react-icons/fa6";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";

function AddCar() {
  axios.defaults.withCredentials = true;
  const uid = useContext(UidContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)

  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [tarifs, setTarifs] = useState("");
  const [lieuPriseEnCharge, setLieuPriseEnCharge] = useState("");
  const [typeCarburant, setTypeCarburant] = useState("");
  const [transmission, setTransmission] = useState("");
  const [capaciteAccueil, setCapaciteAccueil] = useState("");
  const [description, setDescription] = useState("");
  const [photos,setPhotos] = useState('');
  
  //verification si la personne a un compte business
  useEffect(() => {
    if (!uid) return;

    const fetchUser = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}user/${uid}`);
        setUser(res.data);
        setLoading(false)
      } catch (err) {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', err);
        setLoading(false)
      }
    };

    fetchUser();
  }, [uid]);
  if (loading) {
    return (
      <>
          <Navbar />
          <Loading />
      </>
    );
  } 

  //addcar
  const handleAddCar = async (e) => {
    e.preventDefault();

    try {
        const data = {
            marque,
            modele,
            tarifs,
            lieuPriseEnCharge,
            typeCarburant,
            transmission,
            capaciteAccueil,
            description,
            photos,
            userId: uid,
        };
        
        const response = await axios.post(`${process.env.REACT_APP_API_URL}car/addcar`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.data);
        window.location = "/account";
        // Ajouter une redirection ou un message de succès ici
    } catch (error) {
        console.error(error);
        alert('erreur')
        // Afficher un message d'erreur ici
    }
  };

  // const handlePhotoChange = (e) => {
  //     const files = e.target.files;
  //     setPhotos(files);
  // };
  return (
    <>
    {user.role === 'business' ? (
      <>
        <Navbar />
        <section className="bg-white-0 flex justify-center items-center md:mx-[120px] lg:mx-[120px]">
        <div className="container px-6 py-24 mx-auto lg:py-12">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img src='./assets/addcar.png' className="" alt="" />
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form className="w-full lg:max-w-xl" onSubmit={handleAddCar}>
                <div className={`relative flex items-center `}>
                  <span className="absolute">
                  <FaCar className='w-6 h-6 mx-3 text-gray-300'/>
                  </span>
                  <input type="text" className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Marque (exemple: Toyota)" onChange={(e) => setMarque(e.target.value)} value={marque} />
                </div>
                <div className={`relative flex items-center mt-4`}>
                  <span className="absolute">
                  <FaCarBattery className='w-6 h-6 mx-3 text-gray-300'/>
                  </span>
                  <input type="text" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Modèle"
                    onChange={(e) => setModele(e.target.value)} value={modele}/>
                </div>
                <div className={`relative flex items-center mt-4`}>
                  <span className="absolute">
                  <IoLocation className='w-6 h-6 mx-3 text-gray-300'/>
                  </span>
                  <input type="text" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Lieu de prise en charge"
                    onChange={(e) => setLieuPriseEnCharge(e.target.value)} value={lieuPriseEnCharge} />
                </div>
                <div className={`relative flex items-center mt-4`}>
                  <span className="absolute">
                  <MdAttachMoney className='w-6 h-6 mx-3 text-gray-300'/>
                  </span>
                  <input 
                  type="number" min='0'
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                  placeholder="Tarifs par jour"
                  onChange={(e) => setTarifs(e.target.value)} value={tarifs} />
                </div>
              <div className={`relative flex items-center mt-4`}>
                <span className="absolute">
                <LuFuel className='w-6 h-6 mx-3 text-gray-300'/>
                </span>
                <select className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => setTypeCarburant(e.target.value)} value={typeCarburant}>
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
                <FaWheelchair className='w-6 h-6 mx-3 text-gray-300'/>
                </span>
                <select 
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={(e) => setTransmission(e.target.value)} value={transmission}>
                  <option value="">Type de transmission</option>
                  <option value="Automatique">Automatique</option>
                  <option value="Manuelle">Manuelle</option>
                  
                </select>
              </div>
              <div className={`relative flex items-center mt-4`}>
                <span className="absolute">
                <MdOutlineReduceCapacity className='w-6 h-6 mx-3 text-gray-300'/>
                </span>
                <input type="number"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                placeholder="Capacité d'accueil"
                min="0"
                max="6"
                onChange={(e) => setCapaciteAccueil(e.target.value)} value={capaciteAccueil}/>
              </div>
              <div className={`relative flex items-center mt-4`}>
                <span className="absolute">
                  <MdOutlineDescription className='w-6 h-6 mx-3 text-gray-300'/>
                </span>
                <textarea 
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)} value={description}
                ></textarea>
              </div>
              <div className={`relative flex items-center mt-4`}>
              <div className="w-full mx-auto">
                <label className="text-sm text-black mb-2 block">Upload Photos (en cours de développement)</label>
                <label className='text-sm text-red-600 mb-2 block'>Mettre le lien de l'image correpondant au modele de la voiture</label>
                {/*  <input
                  type="file"
                  multiple
                  accept=".png, .jpg, .jpeg"
                  className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
                  
                />
                <p className="text-xs text-gray-400 mt-2">
                  PNG and JPG are Allowed.
                </p>*/}
                <div className={`relative flex items-center `}>
                <span className="absolute">
                  <FaCar className='w-6 h-6 mx-3 text-gray-300'/>
                  </span>
                <input type="text" className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Lien de L'image" onChange={(e) => setPhotos(e.target.value)} value={photos} />
              </div>
              </div>
              </div>
                <div className="mt-4 md:flex md:items-center">
                  <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/2 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"> Ajouter </button>
                </div>
              </form>
              {/*<div className="text-red-500">{emailError || passwordError}</div>*/}
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
  )
}

export default AddCar;
