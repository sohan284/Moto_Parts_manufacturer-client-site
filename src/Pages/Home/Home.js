import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    
    return (
        <div className='container mx-auto'>
           <Banner></Banner>
           <Parts></Parts>
           <BusinessSummary></BusinessSummary>
           <Reviews></Reviews>
           
        </div>
    );
};

export default Home;