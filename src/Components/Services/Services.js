import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css'

const Services = () => {
    const allServices = useLoaderData()
    console.log(allServices)
    return (
        <div className='my-10 mb-10'>
            <h2 className='text-3xl lg:text-5xl text-center font-bold'>My <span className='text-secondary'>Services</span></h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 box my-10'>
                {
                    allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;