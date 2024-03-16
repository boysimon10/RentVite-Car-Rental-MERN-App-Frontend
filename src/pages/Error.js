import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='flex justify-center items-center h-screen'>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* image - start */}
          <div className="h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
              src={process.env.PUBLIC_URL + '/assets/carhead1.png'}
              loading="lazy"
              alt="car error"
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* image - end */}
          {/* content - start */}
          <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
            <p className="mb-4 text-sm font-semibold uppercase text-blue md:text-base">
              Error 404
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl">
              Page not found
            </h1>
            <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
              <div>
                <Link
                  to="/"
                  className="inline-block text-sm text-blue transition duration-100 hover:text-blue-light  md:text-base"
                >
                  Home
                </Link>
              </div>
            </nav>
          </div>
          {/* content - end */}
        </div>
      </div>
    </div>


    </div>
  )
}

export default Error
