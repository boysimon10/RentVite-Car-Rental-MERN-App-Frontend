import React from 'react'
import Navbar from '../components/Navbar'
import BookingItem from '../components/BookingItem'

// import { LuFuel } from "react-icons/lu";
// import { FaWheelchair } from "react-icons/fa6";
// import { MdOutlineReduceCapacity } from "react-icons/md";
// import { IoLocation } from "react-icons/io5";

function Bookings() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:flex-wrap ">
        <BookingItem /><BookingItem /><BookingItem /><BookingItem />
      </div>

    </>
  )
}

export default Bookings
