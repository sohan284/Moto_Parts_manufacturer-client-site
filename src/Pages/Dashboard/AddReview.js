import React from 'react';
import useReviews from './../../Shared/Hooks/useReviews';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [reviews,setReviews] = useReviews([]);
    const [user] = useAuthState(auth);
    const handleReview = (event) =>{
        event.preventDefault();

   
    const review = {
        name : event.target.name.value,
        review : event.target.review.value,
        star : event.target.rating.value,
        img : event.target.img.value,
      }
    fetch('http://localhost:5000/review',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
        toast('Review added successfully');
    })

    }
    return (
        <div className='border-2 m-2 p-2 mt-20 rounded-md bg-primary'>
     <h1 className='text-secondary font-bold text-4xl my-4'>Add A Review</h1>
      <form onSubmit={handleReview}>
      <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input  mb-2 font-bold w-full max-w-xs"
              /> <br />
      <input
                type="text"
                name="img"
                disabled
                value={user?.photoURL || ""}
                className="input  mb-2  w-full max-w-xs"
              /> <br />
      <input
                type="text"
                name="rating"
                placeholder='rating'
                className="input  mb-2  w-full max-w-xs"
              /> <br />
      <input
                type="text"
                name="review"
                className="textarea  mb-2  w-full max-w-xs"
                placeholder='What in your mind.....??'
              /> <br />
     
     
        <input
                  id="submitButton"
                  type="submit"
                  value="Add Review"
                  className="btn btn-secondary mb-5  max-w-xs"
                />
      </form>
      </div>
    );
};

export default AddReview;