import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer  drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <h1 className='text-4xl text-primary absolute right-0 uppercase font-bold'>Dashboard</h1>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 bg-secondary  text-white overflow-y-auto w-80 text-base-content">
      
      <li className='text-primary uppercase font-bold'><Link to="myorder" >My Order </Link></li>
      <li className='text-primary uppercase font-bold'><Link to="addreview" >Add a  Review</Link></li>
      <li className='text-primary uppercase font-bold'><Link to="myprofile" >My Profile</Link></li>
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;