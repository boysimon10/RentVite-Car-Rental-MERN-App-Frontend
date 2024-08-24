import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UidContext } from '../UseContext';

function Navbar() {
  const uid = useContext(UidContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
            {/* nav - start */}
            <nav className={`lg:flex gap-12 items-center ${isMenuOpen ? 'fixed inset-0 z-50 flex flex-col bg-white p-4' : 'hidden lg:flex'}`}>
              <Link to="/" className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/explore" className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue" onClick={closeMenu}>
                Explore
              </Link>
              <Link to="/" className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue" onClick={closeMenu}>
                Sale
              </Link>
              <Link to="/" className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue" onClick={closeMenu}>
                About
              </Link>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <div className="flex divide-x border-r sm:border-l items-center">
              {uid ? (
                <>
                  <Link
                    to="/account"
                    className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-800">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span className="hidden text-sm font-semibold text-gray-500 sm:block">
                      User
                    </span>
                  </Link>
                  <Link
                    to="/logout"
                    className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-800">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-800">
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-gray-800">
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
                className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 6.75h15m-15 4.5h15m-15 4.5h15"
                  />
                </svg>
                <span className="hidden text-sm font-semibold text-gray-500 sm:block">
                  Menu
                </span>
              </button>
            </div>
          </div>
        </header>
        {/* menu - start */}
        <div
          className={`fixed inset-0 z-50 flex flex-col bg-white p-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <button
            type="button"
            className="self-end"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              onClick={closeMenu}
            >
              Explore
            </Link>
            <Link
              to="/"
              className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              onClick={closeMenu}
            >
              Sale
            </Link>
            <Link
              to="/"
              className="text-base font-semibold text-gray-600 transition duration-100 hover:text-blue active:text-blue"
              onClick={closeMenu}
            >
              About
            </Link>
          </nav>
          <div className="mt-4 flex flex-col items-center">
            {uid ? (
              <>
                <Link
                  to="/account"
                  className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span className="hidden text-sm font-semibold text-gray-500">
                    User
                  </span>
                </Link>
                <Link
                  to="/logout"
                  className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                  <span className="hidden text-sm font-semibold text-gray-500">
                    Deconnexion
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span className="hidden text-sm font-semibold text-gray-500">
                    Connexion
                  </span>
                </Link>
                <Link
                  to="/register"
                  className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 text-gray-800"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                    />
                  </svg>
                  <span className="hidden text-sm font-semibold text-gray-500">
                    Inscription
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
        {/* menu - end */}
      </div>
    </div>
  );
}

export default Navbar;
