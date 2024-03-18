import React, { useState, useContext } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Account from './Account';
import { Link } from 'react-router-dom';
import { UidContext } from '../UseContext';


function Login() {
  const uid = useContext(UidContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}user/login`, {
        email,
        password,
      }, {
        withCredentials: true, 
      });  

      if (response.data.token) {
        window.location = "/account";
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        const errorMessage = err.response.data.error;
        if (errorMessage === 'Utilisateur non trouvé') {
          setEmailError(errorMessage);
        } else if (errorMessage === 'Mot de passe incorrect') {
          setPasswordError(errorMessage);
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
      <Navbar />
      <section className="bg-white flex justify-center items-center md:mx-[120px] lg:mx-[120px]">
        <div className="container px-6 py-24 mx-auto lg:py-12">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img src='./assets/login.png' className="" alt="" />
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form className="w-full lg:max-w-xl" onSubmit={handleLogin}>
                <div className={`relative flex items-center ${emailError ? 'border border-red-500 rounded-lg' : ''}`}>
                  <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <input type="email" className="block w-full py-3 text-gray-dark bg-white border rounded-lg px-11 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className={`relative flex items-center mt-4 ${passwordError ? 'border border-red-500 rounded-lg' : ''}`}>
                  <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                  <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="mt-8 md:flex md:items-center">
                  <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue rounded-lg md:w-1/2 hover:bg-blue-light focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"> connexion </button>
                  <Link to="/register" className="inline-block mt-4 text-center text-blue-500 md:mt-0 md:mx-6 hover:underline" > S'inscrire </Link>
                </div>
              </form>
              {/*<div className="text-red-500">{emailError || passwordError}</div>*/}
            </div>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
}

export default Login;
