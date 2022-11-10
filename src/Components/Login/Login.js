import React, { useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const {userLogin, googleLogin} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        userLogin(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            navigate(from, { replace: true })
        })
        .catch(err => console.error(err))
    }

    const handleGoogleLogin = () => {
      googleLogin()
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err))
    }


    return (
        <div className='my-10 lg:mb-20'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold mb-10'>Sign Up Here</h2>
          <form onSubmit={handleLogin}>
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
        </div>
        <div className="form-control mt-6 w-2/5 mx-auto">
          <button type='submit' className="btn signup">Login</button>
          <button className='btn mt-5' onClick={handleGoogleLogin}> <FcGoogle className='text-xl mr-3'></FcGoogle> Login With Google</button>
        </div>
        <p className='mt-5 text-center'>New To Luxury Interior? <Link to='/register' className='underline underline-offset-4'>Sign Up Here</Link></p>
      </div>
          </form>
        </div>
    );
};

export default Login;