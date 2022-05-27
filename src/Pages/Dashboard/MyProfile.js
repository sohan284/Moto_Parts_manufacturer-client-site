import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate= useNavigate();
    const handleEdit = () =>{

        navigate('/dashboard/updateprofile')
    }
    return (
        <div className='bg-accent mx-auto p-10 mt-10 shadow-2xl rounded-2xl'>
            <h1 className='text-4xl mb-5 font-bold'>Your Profile</h1>
            <div className=''>
                <input className='input font-bold  w-96 block m-2'  bg- disabled value={user.displayName} type="text" />
                <input className='input font-bold  w-96 block m-2'  bg- disabled value={user.email} type="text" />
                
                <input onClick={handleEdit} className='btn btn-primary my-5 text-white' type="button" value="EDIT PROFILE" />
               
            </div>
            
        </div>
    );
};

export default MyProfile;