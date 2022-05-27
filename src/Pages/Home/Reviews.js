import React, { useEffect, useState } from 'react';
import Review from './Review';
import useReviews from './../../Shared/Hooks/useReviews';


const Reviews = () => {
    const [reviews,setReviews] = useReviews([]);

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/review`)
    //     .then(res=>res.json())
    //     .then(data=>setReviews(data))
    // },[])


    return (
        <div>
            <h1 className='text-4xl text-center my-5 mt-20 bg-primary text-secondary p-2 font-bold '>Customers All Reviews</h1>
         <div className='grid grid-cols-3 gap-2'>
                {
                    reviews.map(reviews=> <Review key={reviews._id} reviews={reviews}></Review>)
                }
                  

            </div>
            <button className='btn  bg-primary'>SEE MORE</button>
        </div>
    );
};

export default Reviews;