import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';

import { UidContext } from '../UseContext';

function Account() {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState(null);
    const uid = useContext(UidContext);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/user/${uid}`);
                setUser(res.data);
            } catch (err) {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur :', err);
            }
        };
        if (uid) {
            fetchUser();
        }
    }, [uid]);

    return (
        <div>
            {user ? (
                <>
                <Navbar/>
                <div className="mx-[100px] max-w-screen-2xl px-4 md:px-8">
                  <div className="bg-gray-light p-4 rounded-lg w-72 shadow-lg">
                    <div className='flex justify-center items-center '>
                      <div>
                      <img
                        src={require('./default.png')}
                        alt=""
                        className="w-24 rounded-full border-2 border-blue object-cover"
                      />
                      <p className="text-center text-blue font-bold text-lg">{user.nom}</p>
                      <p className="text-center text-gray-800 text-sm">{user.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default Account;
