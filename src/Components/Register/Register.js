import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const {userCreate, updateUserProfile} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('')

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)

        if(password !== confirm){
            return setPasswordError('your password did not matched!')
          }
          else{
            userCreate(email, password)
            .then(result => {
            const user = result.user;
            form.reset()
            setPasswordError('')
            handleUserProfile(name, photoURL)
            console.log(user)
          })
          .catch(err => {
            console.error(err)
          })
          }

          const handleUserProfile = (name, photoURL) => {
              const profile = {
                displayName: name,
                photoURL: photoURL
              }
              updateUserProfile(profile)
              .then(() => {})
              .catch(err => console.error(err))
          }
    }

    

    return (
        <div className='my-10 lg:mb-20'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold mb-10'>Sign Up Here</h2>
          <form onSubmit={handleRegister}>
          <div className="card-body sf w-full lg:w-3/5 mx-auto">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photoURL</span>
          </label>
          <input type="text" name='image' placeholder="photourl" className="input input-bordered" />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" />
        </div>
        <p className='text-red-400 font-bold'>{passwordError}</p>
        <div className="form-control mt-6 w-2/5 mx-auto">
          <button type='submit' className="btn signup">Sign Up</button>
        </div>
        <p className='mt-5 text-center'>Already Have An Account? <Link to='/login' className='underline underline-offset-4'>Login Here</Link></p>
      </div>
          </form>
        </div>
    );
};

export default Register;