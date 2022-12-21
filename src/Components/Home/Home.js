import React from 'react';
import Banner from './Banner/Banner';
import ServiceLimit from './../ServiceLimit/ServiceLimit';
import AboutMe from './AboutMe/AboutMe';
import Experience from './Experience/Experience';

const Home = () => {
    return (
        <div className='mb-10'>
            <Banner></Banner>
            <Experience></Experience>
            <ServiceLimit></ServiceLimit>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;