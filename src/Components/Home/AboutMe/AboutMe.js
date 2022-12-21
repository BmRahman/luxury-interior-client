import React from 'react';
import './Aboutme.css'
import me from '../../../Assets/pexels-chloe-1043471.jpg'
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div>
            
        <div className="hero my-10 lg:my-14">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-full lg:w-2/4'>
                <img src={me} alt='' className="rounded-lg shadow-2xl w-full lg:w-2/4 lg:mx-auto" />
                </div>
            <div className='w-full lg:w-2/4'>
                <h1 className="text-3xl lg:5xl font-bold">About Me</h1>
                <p className="py-6">I Am A Creative Interior Designer with a strong background in project management, space planning, and computer-aided design, seeking to take next career step with a respected design firm focused on creating world-class hospitality and living spaces. Expertise in coordinating all facets of design, from A&E approval to FF&E selection to final delivery. Proven success in leading multifunctional teams to achieve project goals and achieving a high degree of client satisfactio</p>
                <Link to='/services'><button className="btn btn-secondary">Get Started</button></Link>
             </div>
            </div>
        </div>

        </div>
    );
};

export default AboutMe;