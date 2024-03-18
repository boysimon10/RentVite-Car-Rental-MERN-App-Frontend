import Navbar from '../components/Navbar';
import Account from './Account';
import { Link } from 'react-router-dom';
import axios from "axios";
import React, { useState, useContext } from "react";
import { UidContext } from '../UseContext';

function Register() {
  const uid = useContext(UidContext);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPhoneError("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}register`, {
        nom,
        email,
        password,
        telephone,
      });
      console.log(response.data);
      window.location = "/account";
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        const errorMessage = err.response.data.error;
        if (errorMessage === 'Utilisateur déjà existant') {
          setEmailError(errorMessage);
        } else if (errorMessage === 'Numéro de téléphone déjà utilisé') {
          setPhoneError(errorMessage);
        } else {
          console.error(errorMessage);
        }
      } else {
        console.error('Une erreur inattendue s\'est produite');
      }
    }
  };

  return (
<div>
{uid ? (
        <>
        <Account />
        </>
        ) : (
          <>
    <Navbar/>
<section className="bg-white flex justify-center items-center md:mx-[120px] lg:mx-[120px]">
  <div className="container px-6 py-24 mx-auto lg:py-12">
    <div className="lg:flex">
      <div className="lg:w-1/2">
        <img
        src='./assets/register.png'
        className=""
        alt=""
        />
      <div>
        
      </div>
      </div>
      <div className="mt-8 lg:w-1/2 lg:mt-0">
        <form className="w-full lg:max-w-xl" onSubmit={handleRegister}>
        <div className="relative flex items-center">
            <span className="absolute">
              <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </span>
            <input
              type="text"
              className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Nom"
              onChange={(e) => setNom(e.target.value)} value={nom}

            />
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-3 text-gray-300 ">
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            </span>
            <input
              type="tel"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Telephone"
              onChange={(e) => setTelephone(e.target.value)} value={telephone}
            />
          </div>
          <div className="text-red-500">{emailError || phoneError}</div>
          <div className="mt-8 md:flex md:items-center">
            <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/2 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              S'inscrire
            </button>
            <Link
              to="/login"
              className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline"
            >
              Se connecter
            </Link>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</section>
</>
      )}
  </div>
  )
}

export default Register;
