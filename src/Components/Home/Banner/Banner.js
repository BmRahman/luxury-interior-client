import React from 'react';
import './Banner.css';
import banner from '../../../Assets/rsz_p-2.jpg';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className='ban'>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 ban-head text-3xl lg:text-5xl font-bold">Welcome to Luxury Interior By <span className='ban-name'>Sid</span></h1>
                    <p className="mb-5 ban-details">Bring your dream home to life with one-on-one design help & hand-picked products tailored to your style, space, and budget. Share your inspiration, goals, and budget and we’ll help you design a space you love. </p>
                    <Link to='/services'><button className="btn started">Get Started</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;