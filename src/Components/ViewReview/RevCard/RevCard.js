import React from 'react';
import { Link } from 'react-router-dom';

const RevCard = ({revShow}) => {

    const {client, message, _id, reviewName} = revShow;

    return (
        <div>
           <div className="card shadow-xl">
  <div className="card-body">
    <div>
    {/* <img src={user?.photoUrl} alt="" /> */}
    <h2 className="card-title">Service: {reviewName}</h2>
    <h2 className="card-title text-white mt-5">Client: {client}</h2>
    </div>
    <p className='text-white'>{message}</p>
  </div>
</div>
        
        </div>
    );
};

export default RevCard;