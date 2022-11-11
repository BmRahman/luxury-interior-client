import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const {_id, title} = useLoaderData()
    const {user} = useContext(AuthContext)

    const notify = () => toast.success("Review Posted Successfully");

    const handleSubmitReview = event => {
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'email unavailable';
        const phone = form.phone.value;
        const message = form.message.value;


        const review = {
            reviewId: _id,
            reviewName: title,
            client: name,
            email: email,
            phone: phone,
            message: message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('review succesfully posted')
                form.reset()
            }
        })
        .catch(err => console.error(err))

    }

    return (
        <div>
            <ToastContainer position="top-center" autoClose={3000}></ToastContainer>
          <h2 className='text-2xl lg:text-4xl text-center font-bold font-white my-12 mb-12'>Give us a review on {title} service</h2>
          <form className='w-full lg:w-3/5 mx-auto h-screen' onSubmit={handleSubmitReview}>
          <input type="text" name='name' placeholder="Your name" className="input input-secondary input-bordered w-full mb-6" required/> <br/>

          <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-secondary input-bordered w-full mb-6" readOnly/> <br/>

          <input type="text" name='phone' placeholder="Phone" className="input input-secondary input-bordered w-full mb-6" required/> <br/>

          <textarea name='message' className="textarea textarea-secondary w-full textarea-bordered mb-6" placeholder="Review" required></textarea>
          
          <div>
            <button className='btn log' onClick={notify}>Submit</button>
          </div>
          </form>


        </div>
    );
};

export default Review;