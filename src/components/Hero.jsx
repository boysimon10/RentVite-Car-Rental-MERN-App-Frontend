import React from 'react'

function Hero() {
  return (
    <div>
      <section className="md:mx-[100px] lg:mx-[100px] max-w-screen-2xl px-4 md:px-8">
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
      <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
          Trouve ton
          <br />
          style
        </h1>
        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
        Louez ou mettez en location votre véhicule
        en toute simplicité avec notre plateforme
        </p>
      </div>
      <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img
            src="./assets/carhead1.png"
            loading="lazy"
            alt="car1"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img
            src="./assets/carhead2.png"
            loading="lazy"
            alt="car2"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
    
    {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
        <a
          href="#"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Men
        </a>
        <a
          href="#"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Women
        </a>
        <a
          href="#"
          className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
        >
          Teens
        </a>
      </div>
  </div>*/}
  </section>
    </div>
  )
}

export default Hero
