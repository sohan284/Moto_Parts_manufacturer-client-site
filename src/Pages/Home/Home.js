import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CommingSoon from './CommingSoon';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    
    return (
        <div className='container mx-auto'>
             
           <Banner></Banner>
           <Parts></Parts>
           <CommingSoon></CommingSoon>
           <BusinessSummary></BusinessSummary>
           <Reviews></Reviews>
           
           
        </div>
    );
};

export default Home;