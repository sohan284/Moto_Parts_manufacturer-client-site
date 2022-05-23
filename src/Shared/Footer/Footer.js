import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-black text-secondary py-10 mt-5'>
            <p><small>copyright &#169; 
 {year} MoTo.Parts </small></p>
        </footer>
    );
};

export default Footer;