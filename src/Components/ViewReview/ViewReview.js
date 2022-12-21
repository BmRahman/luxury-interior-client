import React, { useEffect } from 'react';
import RevCard from './RevCard/RevCard';

const ViewReview = () => {
    const [showReview, setShowReview] = ([])

    useEffect(() => {
        fetch('https://luxury-interior-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setShowReview(data))
    }, [])

    return (
        <div>
            <h1 className='text-3xl lg:text-4xl text-center my-5 lg:my-12 text-white font-bold'>Client Reviews about this Product</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 box my-10'>
                {
                    showReview.map(revShow => <RevCard key={revShow._id} revShow={revShow}></RevCard>)
                }
            </div>
        </div>
    );
};

export default ViewReview;