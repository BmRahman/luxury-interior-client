import React, { useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedReview = useLoaderData()
    const {client, message} = storedReview
    const [review, setReview] = useState(storedReview)
    console.log(review)

    const handleUpdate = event => {
        event.preventDefault()

        fetch(`https://luxury-interior-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json)
        .then(data => {
            console.log(data)
            alert('review updated succesfully')
        })
    }



    return (
        <div className='h-screen'>
           <h1 className='text-center text-3xl lg:text-5xl my-5 mb-5 lg:my-12 lg:mb-12 font-bold text-white'>Add Your Preferred Service Here</h1>
            <form className='w-full lg:w-4/5 mx-auto my-12 mb-12 add-service' onSubmit={handleUpdate}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Client Name</span>
          </label>
          <input defaultValue={client} type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        
        
        
        <input defaultValue={message} className="textarea textarea-ghost w-full mt-5 input input-bordered" name='details' placeholder="details"></input>
        

        <div className="form-control mt-6">
          <button type='submit' className="btn w-full lg:w-2/5 mx-auto">Update</button>
        </div>
            </form>
        </div>
    );
};

export default Update;