import React from 'react';
import { Link } from 'react-router-dom';

const LimitCard = ({limit}) => {
    const {image, price, rating, title, _id} = limit;
    console.log(limit)
    return (
        <div>
            <div className="card w-96 shadow-xl">
                <figure><img src={image} alt="Service" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between mb-5'>
                        <div>
                            <p>Price: ${price}</p>
                        </div>
                        <div>
                            <p>Ratings: {rating}</p>
                        </div>
                    </div>
    <               div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn view">View Details</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LimitCard;