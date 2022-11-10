import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Service.css';

const Service = () => {

    const serviceData = useLoaderData()
    const {image, title, _id, details, price, rating} = serviceData;


    return (
        <div className='my-10 mb-10'>
           <div className="card w-full lg:w-4/5 mx-auto shadow-xl">
                <figure><img src={image} alt="Service" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div>
                        {details}
                    </div>
                    <div className='flex justify-between mt-6 mb-5'>
                        <div>
                            <p>Price: ${price}</p>
                        </div>
                        <div>
                            <p>Ratings: {rating}</p>
                        </div>
                    </div>
    <               div className="card-actions justify-end">
                    <Link to={`/review/${_id}`}><button className="btn view">Give a review</button></Link>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Service;