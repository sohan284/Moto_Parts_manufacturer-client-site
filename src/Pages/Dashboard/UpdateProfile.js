import React from 'react';

const UpdateProfile = () => {
  return (
    <div className='bg-primary mt-20 p-5'>
      <h1 className='text-3xl text-secondary font-bold my-10'>Update Profile</h1>
      <h1 className='font-semibold text-secondary'>Education</h1>
      <input className='input bg-secondary' type="text" placeholder='Education' />
      <h1 className='font-semibold text-secondary'>City</h1>
      <input className='input bg-secondary' type="text" placeholder='City' />
      <h1 className='font-semibold text-secondary'>Phone</h1>
      <input className='input bg-secondary' type="text" placeholder='Phone' />
 <br />
   <input className='btn my-3 bg-success text-black font-bold' type="button" value="Update" />
    </div>
  );
};

export default UpdateProfile;