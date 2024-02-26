import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';


function Home() {
  return (
    <div className='mx-[120px]'>
    <Navbar/>
    <Hero/>
      
      <div className='mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
      <Card/><Card/><Card/><Card/> <Card/><Card/><Card/><Card/>
      </div>
    </div>
  )
}

export default Home;
