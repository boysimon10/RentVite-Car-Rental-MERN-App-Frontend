import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Login from '../pages/Login';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaCarAlt } from "react-icons/fa";

import { UidContext } from '../UseContext';

function Account() {
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // gere le chargement quand y'a requete
    const uid = useContext(UidContext);
    const strUcFirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };// simple fonction qui Met en majuscule le premier lettre

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}user/${uid}`);
                setUser(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur :', err);
                setLoading(false); 
            }
        };
        if (uid) {
            fetchUser();
        }
    }, [uid]);

    return (
        <div>
            {loading ? ( // Affiche le spinner pendant le chargement
                    <>
                    <Navbar/>
                    <Loading />
                    </>
                
            ) : user ? (
                <>
                    <Navbar />
                    <div className="">
                        <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto my-32">
                            <div className="flex justify-center">
                                <img
                                    src={user.profilePicture}
                                    alt=""
                                    className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                                />
                            </div>
                            <div className="mt-16">
                                <h1 className="font-bold text-center text-3xl text-gray-900">
                                    {user.nom}
                                </h1>
                                <p className="text-center text-sm text-gray-400 font-medium">
                                    Compte {strUcFirst(user.role)}
                                </p>
                                <div className="my-5 px-6">
                                    <Link
                                        to="/bookings"
                                        className="text-white-0 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-blue hover:bg-blue-light hover:text-white"
                                    >
                                        <span className="font-bold">Réservations</span>
                                    </Link>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between">
                                    <p className="flex items-center flex-col text-gray-500 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                        <IoIosMail className="w-4 h-4 mx-3" />
                                        {user.email}
                                    </p>
                                    <p className="flex items-center flex-col text-gray-500 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                        <FaPhoneAlt className="w-4 h-4 mx-3" />
                                        +221 {user.telephone}
                                    </p>
                                    <Link to="/accountsetting" className="flex items-center flex-col text-gray-500 hover:text-blue focus:text-blue hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                        <IoMdSettings className="w-4 h-4 mx-3" />
                                        Paramètre
                                    </Link>
                                    {user.role === "business" ? (
                                        <Link to="/addcar" className="flex items-center flex-col text-gray-500 hover:text-blue focus:text-blue hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                                            <FaCarAlt className="w-4 h-4 mx-3" />
                                            +Location
                                        </Link>
                                    ) : null}
                                </div>

                                <div className="w-full">
                                    {/*<h3 className="font-medium text-gray-900 text-left px-6">
                                        Recent activites
                                    </h3>
                                    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                        <a
                                            href="#"
                                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                                        >
                                            <img
                                                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                                alt=""
                                                className="rounded-full h-6 shadow-md inline-block mr-2"
                                            />
                                            Updated his status
                                            <span className="text-gray-500 text-xs">24 min ago</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                                        >
                                            <img
                                                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                                alt=""
                                                className="rounded-full h-6 shadow-md inline-block mr-2"
                                            />
                                            Added new profile picture
                                            <span className="text-gray-500 text-xs">42 min ago</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                                        >
                                            <img
                                                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                                alt=""
                                                className="rounded-full h-6 shadow-md inline-block mr-2"
                                            />
                                            Posted new article in{" "}
                                            <span className="font-bold">#Web Dev</span>
                                            <span className="text-gray-500 text-xs">49 min ago</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                                        >
                                            <img
                                                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                                alt=""
                                                className="rounded-full h-6 shadow-md inline-block mr-2"
                                            />
                                            Edited website settings
                                            <span className="text-gray-500 text-xs">1 day ago</span>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden"
                                        >
                                            <img
                                                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                                                alt=""
                                                className="rounded-full h-6 shadow-md inline-block mr-2"
                                            />
                                            Added new rank
                                            <span className="text-gray-500 text-xs">5 days ago</span>
                                        </a>
                                    </div>*/}
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
