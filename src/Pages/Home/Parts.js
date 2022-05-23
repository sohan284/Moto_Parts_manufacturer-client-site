import React, { useEffect, useState } from 'react';
import useParts from '../../Shared/Hooks/useParts';
import Part from './Part';

const Parts = () => {
    const [parts,setParts] = useParts([]);
 
    return (
        <div>
            <h1 className='text-3xl font-bold mt-10 text-secondary bg-primary p-1'>Parts</h1>
            <div className='grid mt-5 gap-5 lg:grid-cols-3 grid-cols-1
             sm:grid-cols-2'>
            {
                parts.map(part=><Part part={part}></Part>)
            }
            </div>
            
           


        </div>
    );
};

export default Parts;