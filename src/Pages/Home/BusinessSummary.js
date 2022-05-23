import { faGlobe, faPlus, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessSummary = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-10 text-secondary bg-primary p-1'>Business Summary</h1>
        <div className='grid mt-4 grid-cols-3'>
        <div>
        <FontAwesomeIcon className='text-7xl text-secondary' icon={faGlobe} />
        <h1 className='text-5xl font-bold'>83+</h1>
        <h3 className='text-3xl text-secondary'>Countries</h3>
        </div>
        <div>
        <FontAwesomeIcon className='text-7xl text-secondary' icon={faPlus} />
        </div>
        <div>
        <FontAwesomeIcon className='text-7xl text-secondary' icon={faUsers} />
        </div>
        </div>
        </div>
    );
};

export default BusinessSummary;