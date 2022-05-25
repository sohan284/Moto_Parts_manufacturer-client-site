import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
  const [user,loading,error] = useAuthState(auth);

  const logout = () =>{
      signOut(auth);
  }

    return (
        <div className="navbar bg-primary text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={'/purchase'}>Item 1</Link></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><span className='text-secondary font-serif text-5xl'>M</span>o<span className='text-secondary font-serif text-2xl'>T</span> o <span className='mx-2'><img width={50} src="https://i.ibb.co/c1z2Ht5/motorbike.png" alt="" /></span><span className='text-secondary font-serif text-2xl'>P</span>arts</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
    
            <li><Link to={'/'}>Home</Link></li>
            <li>{user? <button onClick={logout} className="btn font-bold text-base text-secondary
              bg-[#d80000]">Logout</button> : <Link to={'/login'}>Login</Link>}</li>
          </ul>
        </div>
       
      </div>
    );
};

export default Header;