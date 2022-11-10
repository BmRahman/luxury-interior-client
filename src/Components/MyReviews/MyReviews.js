import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './MyReviews.css';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user?.email])

    return (
        <div>
            <h2 className='text-center text-4xl my-10 mb-10'>You Have {myReviews.length} Reviews</h2>
        </div>
    );
};

export default MyReviews;