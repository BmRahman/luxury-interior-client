import React from 'react';
import Banner from './Banner/Banner';
import ServiceLimit from './../ServiceLimit/ServiceLimit';

const Home = () => {
    return (
        <div className='my-10 mb-10'>
            <Banner></Banner>
            <ServiceLimit></ServiceLimit>
        </div>
    );
};

export default Home;