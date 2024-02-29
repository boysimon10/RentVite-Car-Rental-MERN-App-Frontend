import React, { useContext } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { UidContext } from '../UseContext';
//test use context
function Home() {
  const uid = useContext(UidContext);
  return (
      <div>
          {uid ? (
              <Navbar />
          ) : (
              <div>
                  <Hero />
                  <div className='mt-8 mx-[120px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center'>
                      <Card /><Card /><Card /><Card /> <Card /><Card /><Card /><Card />
                  </div>
              </div>
          )}
      </div>
  )
}


export default Home;
