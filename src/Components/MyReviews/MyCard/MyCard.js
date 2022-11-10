import React, { useContext } from 'react';
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
    <h2 className="card-title">{reviewName}</h2>
    <h2 className="card-title">{client}</h2>
    </div>
    <p>{message}</p>
    <div className="card-actions lg:flex justify-end">
        <button className='btn'>Update</button>
      <button className="btn btn-primary" onClick={() => handleDelete(_id)}>Delete Review</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default MyCard;