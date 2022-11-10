import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Review = () => {
    const {title} = useLoaderData()
    const {user} = useContext(AuthContext)
    return (
        <div>
          <h2 className='text-2xl lg:text-4xl text-center font-bold font-white my-12 mb-12'>Give us a review on {title} service</h2>
          <form className='w-full lg:w-3/5 mx-auto'>
          <input type="text" name='name' placeholder="Your name" className="input input-secondary input-bordered w-full mb-6" /> <br/>

          <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-secondary input-bordered w-full mb-6" readOnly/> <br/>

          <input type="text" name='phone' placeholder="Phone" className="input input-secondary input-bordered w-full mb-6" /> <br/>

          <textarea className="textarea textarea-secondary w-full textarea-bordered mb-6" placeholder="Review"></textarea>
          
          <div>
            <button className='btn log'>Submit</button>
          </div>
          </form>


        </div>
    );
};

export default Review;