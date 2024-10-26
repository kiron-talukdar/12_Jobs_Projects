import React from 'react';
import bannerImg from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='flex items-center my-8 md:px-4'>
            <div>
                <h2 className='text-7xl font-bold	 '>One Step <br /> Closer To Your <br /> <span className='text-blue-600'>Dream Job</span></h2>
                <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='mt-4 text-white'>Get Started</button>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;