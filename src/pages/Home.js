import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Trend from '../components/Trend';
import Content from '../components/Content';
import Footer from '../components/Footer';
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
                <Trend />
                <Content />
                <Footer />
                </>
        ) : (
            <div>
                <Navbar />
                <Hero />
                <Trend />
                <Content />
                <Footer />
            </div>
        )}
    </div>
)
}


export default Home;
