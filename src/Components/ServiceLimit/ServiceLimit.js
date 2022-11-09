import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LimitCard from '../LimitCard/LimitCard';

const ServiceLimit = () => {
    const limitService = useLoaderData()
    console.log(limitService)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 box my-10'>
            {
                limitService.map(limit => <LimitCard key={limit._id} limit={limit}></LimitCard>)
            }
        </div>
    );
};

export default ServiceLimit;