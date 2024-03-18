import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UidContext } from '../UseContext';
import Navbar from '../components/Navbar';
import Login from './Login';
import Loading from '../components/Loading';

function AccountSet() {
  axios.defaults.withCredentials = true;
  const uid = useContext(UidContext);
  const [loading, setLoading] = useState(true);
  const [file, setFile] = useState(null);
  const [user, setUser] = useState(null);

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

  //upload pp
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Veuillez sélectionner une image');
      return;
    }

    const formData = new FormData();
    formData.append('profilePicture', file);

    try {
      await axios.put(`${process.env.REACT_APP_API_URL}user/${uid}/profile-picture`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Photo de profil mise à jour avec succès');
    } catch (error) {
      alert('Erreur lors de la mise à jour de la photo de profil');
    }
  };

//compte business / client
const [isRoleBusiness, setIsRoleBusiness] = useState(false);

useEffect(() => {
  if (user) {
    setIsRoleBusiness(user.role === 'business');
  }
}, [user]);

const toggleRole = async () => {
  try {
    
    if (user.role === 'business') {
      alert('L\'utilisateur ne peut pas repasser en compte client. Contacter le service client');
      return;
    }

    if (user.role === 'client') {
      await axios.put(`${process.env.REACT_APP_API_URL}user/${user._id}`, { role: 'business' });
      setIsRoleBusiness(true);
    }
  } catch (error) {
    console.error('Error toggling role:', error);
  }
};
//account delete
const handleDelete = (event) => {
    alert('La fonctionnalité est en cours de développement')
};

//loading
if (loading) {
  return (
    <>
        <Navbar />
        <Loading />
    </>
  );
} 
  return (
    <>
    {user ? (
      <>
      <Navbar />
      <section className="bg-white flex justify-center items-center md:mx-[120px] lg:mx-[120px]">
        <div className="container px-6 py-24 mx-auto lg:py-12">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img src='./assets/setting.png' className="" alt="" />
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form className="w-full lg:max-w-xl">
                <div className="w-full mx-auto">
                  <label className="text-xl text-black mb-2 block">Photo de profil</label>
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    className="w-full text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
                    onChange={handleChange}
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    PNG and JPG are Allowed.
                  </p>
                </div>
                <div className="mt-2 md:flex md:items-center">
                  <button
                    onClick={handleSubmit}
                    className="w-full px-2 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/2 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Mettre à jour
                  </button>
                </div>
              
              <div className="w-full mx-auto my-11">
                  <label className="text-xl text-black mb-2 block">{isRoleBusiness ? 'Vous avez un compte Business' : 'Passer en Business pour mettre en location vos voitures (Irréversible)'}</label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isRoleBusiness} onChange={toggleRole}defaultValue="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-blue-light peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600" />
                    <span className="ms-3 text-sm font-medium text-blue ">
                    {isRoleBusiness ? 'Business' : 'Client'}
                    </span>
                </label>
              </div>
              {/* à ajouter la suppression d'un compte entraine la suppression aussi des voitures mis en location mais garde l'historique de reservati
              ou met en insdiponible j'sais pas encore comment gerer ce probleme */}
              <button
                    onClick={handleDelete}
                    className="w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg md:w-1/3 hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Supprimer mon compte
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
        ) : (
        <>
        <Login />
        </>
          )}
    </>
  );
}

export default AccountSet;
