import React from 'react';
import Banner from './Banner/Banner';
import ServiceLimit from './../ServiceLimit/ServiceLimit';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div className='my-10 mb-10'>
            <Banner></Banner>
            <ServiceLimit></ServiceLimit>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;