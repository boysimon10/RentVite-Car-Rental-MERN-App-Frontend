import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { UidContext } from '../UseContext';


function Home() {
    const uid = useContext(UidContext);
    return (
    <div>
            {uid ? (
                <>
                <Navbar/>
                <Hero />
                </>
        ) : (
            <div>
                <Navbar />
                <Hero />
            </div>
        )}
    </div>
)
}


export default Home;
