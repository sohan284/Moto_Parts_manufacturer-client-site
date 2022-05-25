import React from 'react';
import Parts from './Parts';

const Banner = () => {
    return (
        <div className="hero bannerImg">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md font-light text-xl text-secondary">
            <h2>Automative Parts & Accessories</h2>
            <h1 className=" text-5xl my-16 font-thin text-secondary font-bold">FIND PARTS THAT FIT</h1>
            <button className='btn bg-primary'>EXPLORE</button>
          </div>
        </div>
       
      </div>
    );

};
export default Banner;