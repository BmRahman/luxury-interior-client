import React from 'react';
import './AddService.css';

const AddService = () => {

    const handleUpload = event => {
        event.preventDefault()
        const title = event.target.title.value
        const image = event.target.image.value
        const price = event.target.price.value
        const rating = event.target.rating.value
        const details = event.target.details.value
        const service = {title, image, price, rating, details}
        console.log(service)


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }

    return (
        <div>
          <h1 className='text-center text-3xl lg:text-5xl my-5 mb-5 lg:my-12 lg:mb-12 font-bold text-white'>Add Your Preferred Service Here</h1>
            <form onSubmit={handleUpload} className='w-full lg:w-4/5 mx-auto my-12 mb-12 add-service'>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" name='title' placeholder="title" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='image' placeholder="photo url" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="price" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
        </div>
        
        
        <textarea className="textarea textarea-ghost w-full mt-5 input input-bordered" name='details' placeholder="details"></textarea>
        

        <div className="form-control mt-6">
          <button type='submit' className="btn w-full lg:w-2/5 mx-auto">Add Service</button>
        </div>
            </form>
        </div>
    );
};

export default AddService;