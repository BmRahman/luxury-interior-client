import React from 'react';
import CountUp from 'react-countup';

const Experience = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-16 bg-gray-800 p-10'>
            <div className='text-center p-6 border border-yellow-400 rounded-md'>
            <CountUp end={15} duration={5} className='text-white text-7xl'/>
            <p className='capitalize font-bold text-lg mt-3 text-white'>Years of Experience</p>
            </div>
            <div>
                <p className='text-yellow-400 uppercase text-sm lg:text-base font-bold pt-2 ml-0 lg:ml-10'>welcome</p>
                <h2 className='font-bold text-xl capitalize pt-3 ml-0 lg:ml-10 text-white'>your best partner for <br/> architechture and <br/> construction</h2>
            </div>
            <div>
                <p className='text-lg capitalize mt-3 text-white'>Our commitment to quality and services ensure our clients happy. With years of experiences and continuing research, our team is ready to serve your interior design needs.</p>
            </div>
        </div>
    );
};

export default Experience;