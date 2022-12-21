import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LimitCard from '../LimitCard/LimitCard';
import './ServiceLimit.css';

const ServiceLimit = () => {
    const [limitService, setLimitService] = useState([]) 
   
    useEffect(() => {
        fetch('https://luxury-interior-server.vercel.app/servicelimit')
        .then(res => res.json())
        .then(data => setLimitService(data))
    }, [])
    return (
       <div>
            <h1 className='text-3xl lg:text-4xl text-center my-5 lg:my-12  font-bold text-secondary'>My Services</h1>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 box my-10'>
            {
                limitService.map(limit => <LimitCard key={limit._id} limit={limit}></LimitCard>)
            }
            </div>
            <div className='text-center'>
                <Link to='/services'><button className='btn btn-secondary'>View All</button></Link>
            </div>
       </div>
    );
};

export default ServiceLimit;