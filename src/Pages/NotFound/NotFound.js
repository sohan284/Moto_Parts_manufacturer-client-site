import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    const handleHome = () =>{
        navigate('/')
    }
    return (
        <div class="hero h-screen w-full h-full notFound">
        <div class="hero-overlay bg-opacity-90"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl text-9xl font-serif  font-bold">404</h1>
            <p class="mb-5 text-2xl font-semibold">PAGE NOT FOUND</p>
            <button onClick={handleHome} class="btn btn-primary">Back to home</button>
          </div>
        </div>
      </div>
    );
};

export default NotFound;