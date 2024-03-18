import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UidContext } from '../UseContext';

function Navbar() {
  const uid = useContext(UidContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <header className="mb-8 md:mx-[100px] lg:mx-[100px]">
          <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
            {/* logo - start */}
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <img 
                width={95}
                height={94}
                alt="logo"
                src={process.env.PUBLIC_URL + '/assets/logo.png'}
              />
            </Link>
            {/* logo - end */}
            {/* nav - start responsive super mal gerer pitié*/}
            <nav className={`gap-12 lg:flex 2xl:ml-16 ${isMenuOpen ? 'flex flex-col bg-white mx-4 my-4' : 'hidden'}`}>
              <Link to="/" className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue">
                Home
              </Link>
              <Link
                to="/explore"
                className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              >
                Explore
              </Link>
              <Link
                to="/"
                className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              >
                Sale
              </Link>
              <Link
                to="/"
                className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              >
                About
              </Link>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="flex divide-x border-r sm:border-l">
              {uid ? (  
                <>
                <Link
                  to="/account"
                  className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="h-4 w-4 text-gray-800">
                    <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <span className="hidden text-sm font-semibold text-gray-500 sm:block">
                    User
                  </span>
                </Link>
                <Link
                  to="/logout"
                  className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                      className="h-4 w-4 text-gray-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
            
                  
                  <span className="hidden text-sm font-semibold text-gray-500 sm:block">
                      Deconnexion
                  </span>
              </Link>
              </>



              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span className="hidden text-sm font-semibold text-gray-500 sm:block">
                      Connexion
                    </span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <span className="hidden text-sm font-semibold text-gray-500 sm:block">
                      Inscription
                    </span>
                  </Link>
                </>
              )}
              <button
                type="button"
                className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={`hidden text-xs font-semibold text-gray-500 sm:block`}>
                  Menu
                </span>
              </button>
            </div>
            {/* buttons - end */}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
