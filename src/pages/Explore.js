import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

function Explore() {
  return (
    <>
    <Navbar />
    <div className='mt-8 mx-[120px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
    <Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
    </div>
    </>
  )
}

export default Explore
