import React from 'react'

function Content() {
    return (
        <div className="bg-white-0 py-28 sm:py-8 lg:py-16 my-16">
    <div className="md:mx-[90px] lg:mx-[90px] max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
            <img
                src="https://tsibpo.com/wp-content/uploads/2020/11/car-rentals1.png"
                loading="lazy"
                alt="car rental"
                className="h-full w-full object-cover object-center"
            />
            </div>
        </div>
        <div className="md:pt-8">
            <p className="text-center font-bold text-blue md:text-left">
            Qui Sommes nous?
            </p>
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
            Our competitive advantage
            </h1>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            </p>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Content
