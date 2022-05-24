import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-primary text-white">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={'/purchase'}>Item 1</Link></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl"><span className='text-secondary font-mono text-5xl'>M</span>o<span className='text-secondary font-mono text-2xl'>T</span> o <span className='mx-2'><img width={50} src="https://i.ibb.co/c1z2Ht5/motorbike.png" alt="" /></span>Parts</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
    
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/purchase'}>Purchase</Link></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
       
      </div>
    );
};

export default Header;