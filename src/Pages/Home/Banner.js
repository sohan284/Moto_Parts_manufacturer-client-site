import React from 'react';
import Parts from './Parts';

const Banner = () => {
    return (
        <div className="hero bannerImg">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className=" text-5xl mt-48 font-serif text-secondary font-bold">Welcome to MoTo</h1>
          </div>
        </div>
       
      </div>
    );

};
export default Banner;