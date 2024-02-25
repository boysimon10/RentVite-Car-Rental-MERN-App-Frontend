import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
      
      <div className='mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-center'>
      <Card/><Card/><Card/><Card/> <Card/><Card/><Card/><Card/>
      </div>
    </>
  )
}

export default Home;
