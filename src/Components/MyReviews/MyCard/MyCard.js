import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyCard = ({review, handleDelete}) => {
    const {user, updateUserProfile} = useContext(AuthContext)
    const {client, message, _id, reviewName} = review

    

    return (
        <div className='h-screen'>
            
<div className="card shadow-xl">
  <div className="card-body">
    <div>
    {/* <img src={user?.photoUrl} alt="" /> */}
    <h2 className="card-title">Service: {reviewName}</h2>
    <h2 className="card-title text-white mt-5">Client: {client}</h2>
    </div>
    <p className='text-white'>{message}</p>
    <div className="card-actions lg:flex justify-end">
        <Link to={`/update/${_id}`}><button className='btn'>Edit</button></Link>
      <button className="btn btn-primary" onClick={() => handleDelete(_id)}>Delete Review</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default MyCard;