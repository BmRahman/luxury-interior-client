import React from 'react';
// import './Banner.css';
import banner from '../../../Assets/banner.jpg';
import bannerOne from '../../../Assets/banner1.jpg';
import bannerTwo from '../../../Assets/banner2.jpg';
import Slider from "react-slick";
import { Link } from 'react-router-dom';



const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div className='ban w-11/12 mx-auto lg:w-full'>
        <Slider {...settings}>
            {/* 1st */}
            <div>
          <div className="hero h-96 lg:h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-xl">
                    <h1 className="mb-5 ban-head text-2xl lg:text-5xl font-bold">Welcome to Luxury Interior By <span className='ban-name'>Sid</span></h1>
                    <p className="mb-5 ban-details text-sm lg:text-xl">Bring your dream home to life with one-on-one design help & hand-picked products tailored to your style, space, and budget. Share your inspiration, goals, and budget and we’ll help you design a space you love. </p>
                    <Link to='/services'><button className="btn btn-secondary started">Get Started</button></Link>
                </div>
            </div>
        </div>
          </div>
          {/* second */}
          <div>
          <div className="hero h-96 lg:h-[600px]" style={{ backgroundImage: `url(${bannerTwo})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-xl">
                    <h1 className="mb-5 ban-head text-2xl lg:text-5xl font-bold capitalize">All time best selling interior design</h1>
                    <p className="mb-5 ban-details text-sm lg:text-xl">Bring your dream home to life with one-on-one design help & hand-picked products tailored to your style, space, and budget. Share your inspiration, goals, and budget and we’ll help you design a space you love. </p>
                    <Link to='/services'><button className="btn btn-secondary started">Get Started</button></Link>
                </div>
            </div>
        </div>
          </div>
          {/* third */}
          <div>
          <div className="hero h-96 lg:h-[600px]" style={{ backgroundImage: `url(${bannerOne})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-xl">
                    <h1 className="mb-5 ban-head text-2xl lg:text-5xl font-bold capitalize">beautiful design with <br/> Modern technology</h1>
                    <p className="mb-5 ban-details text-sm lg:text-xl">Bring your dream home to life with one-on-one design help & hand-picked products tailored to your style, space, and budget. Share your inspiration, goals, and budget and we’ll help you design a space you love. </p>
                    <Link to='/services'><button className="btn btn-secondary started">Get Started</button></Link>
                </div>
            </div>
        </div>
          </div>
        </Slider>
    </div>
    );
};

export default Banner;