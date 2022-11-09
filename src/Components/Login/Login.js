import React from 'react';

const Login = () => {
    return (
        <div className='my-10 lg:mb-20'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold mb-10'>Sign Up Here</h2>
          <form>
        <div className="card-body sf w-full lg:w-3/5 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 w-2/5 mx-auto">
          <button type='submit' className="btn signup">Login</button>
        </div>
      </div>
          </form>
        </div>
    );
};

export default Login;