import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
          <footer  className='bg-primary p-5 mb-0 px-20 text-secondary'>
              
      <div  className="footer  ">
      <div>
          <span className="footer-title">SERVICES</span> 
          <a className="link link-hover">Bike Parts</a>
          <a className="link link-hover">bike wash</a>
          <a className="link link-hover">Car wash </a>
          <a className="link link-hover">free delivery</a>
        </div> 
        <div>
          <span className="footer-title ">Join Us</span>

               
          <div className='flex'>
          <a className="link mr-1 link-hover" href='https://www.facebook.com/SrSohan2748' target='blank'>
          <img width={40} src="https://i.ibb.co/7Sv45pg/facebook-circle.png" alt="" /></a>
          <a className="link link-hover" href='https://github.com/sohan284' target='blank'>
          <img width={42} src="https://i.ibb.co/8dQKqtG/68747470733a2f2f64617368626f6172642e736e617063726166742e696f2f736974655f6d656469612f6170706d65646961.png" alt="" /></a>
          <a className="link link-hover" href='https://www.linkedin.com/in/sr-sohan-1621a0199/' target='blank'>
          <img width={43} src="https://i.ibb.co/h1bwTJB/linked-in-icon-18.png" alt="" /></a>
      
          </div>
          
        </div> 
        <div>
          <span className="footer-title">OUR ADDRESS</span> 
          <a className="link link-hover">59/A/1</a>
          <a className="link link-hover">Razabazar,Dhaka</a>
        </div>
      </div>
        <p className='text-center py-5'>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </footer>
    );
};

export default Footer;