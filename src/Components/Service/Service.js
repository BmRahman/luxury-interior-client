import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import RevCard from '../ViewReview/RevCard/RevCard';
import './Service.css';

const Service = () => {
    const {user} = useContext(AuthContext);
    const serviceData = useLoaderData()
    const {image, title, _id, details, price, rating} = serviceData;

    const [showReview, setShowReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setShowReview(data))
    }, [])


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
                    {
                        user?.email ? <Link to={`/review/${_id}`}><button className="btn view">Give a review</button></Link>
                        : <Link to='/login'><button className="btn view">Give a review</button></Link>
                    }
                </div>
            </div>
        </div> 
            

            <div>
            <h1 className='text-3xl lg:text-4xl text-center my-5 lg:my-12 text-white font-bold'>Client Reviews about this Product</h1>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-5 box my-10'>
    {
        showReview.map(revShow => <RevCard key={revShow._id} revShow={revShow}></RevCard>)
    }
</div>
        <div className='text-center'>
        {
            user?.email ? <Link to={`/review/${_id}`}><button className="btn view">Give a review</button></Link>
            : <Link to='/login'><button className="btn view">Give a review</button></Link>
        }
        </div>
            </div>


        </div>
    );
};

export default Service;