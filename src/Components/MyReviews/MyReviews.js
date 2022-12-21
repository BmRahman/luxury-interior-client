import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './MyReviews.css';
import MyCard from './MyCard/MyCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://luxury-interior-server.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user?.email])

    const handleDelete = id => {
        // const proceed = window.alert('Do you want to delete this review?')
        fetch(`https://luxury-interior-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Review deleted successfully')
                    const remaining = myReviews.filter(rev => rev._id !== id)
                    setMyReviews(remaining)
                }
            })
    }

    return (
        <div>
            <h2 className='text-center text-4xl my-10 mb-10'>You Have {myReviews.length} Reviews</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    myReviews.map(review => <MyCard key={review._id} review={review} handleDelete={handleDelete}></MyCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;