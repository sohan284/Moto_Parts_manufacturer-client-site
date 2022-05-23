import { faGlobe, faPlus, faToolbox, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-36 mb-10 text-secondary bg-primary p-1'>Business Summary</h1>
        <div className='grid mt-4 gap-3 grid-cols-4'>
        <div className='bg-secondary rounded-3xl p-3 '>
        <FontAwesomeIcon className='text-6xl text-primary' icon={faGlobe} />
        <h1 className='text-5xl font-bold my-3'>83+</h1>
        <h3 className='text-xl font-semibold text-primary'>Countries</h3>
        </div>
        <div className='bg-secondary rounded-3xl p-3'>
        <FontAwesomeIcon className='text-6xl text-primary' icon={faPlus} />
        <h1 className='text-5xl font-bold my-3'>98M</h1>
        <h3 className='text-xl font-semibold text-primary'>Revinues</h3>
        </div>
        <div className='bg-secondary rounded-3xl p-3'>
        <FontAwesomeIcon className='text-6xl text-primary' icon={faUsers} />
        <h1 className='text-5xl font-bold my-3'>55K</h1>
        <h3 className='text-xl font-semibold text-pprimary'>Reviews</h3>
        </div>
        <div className='bg-secondary rounded-3xl p-3'>
        <FontAwesomeIcon className='text-6xl text-primary' icon={faToolbox} />
        <h1 className='text-5xl font-bold my-3'>5K+</h1>
        <h3 className='text-xl font-semibold text-pprimary'>Services</h3>
        </div>    
        </div>
        </div>
    );
};

export default BusinessSummary;