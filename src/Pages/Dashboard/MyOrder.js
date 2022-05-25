import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const MyOrder = () => {
    const [orders,setOrder] = useState([]);
    const [user] = useAuthState(auth)
   
    useEffect(() => {
        if (user) {
            fetch(`https://calm-dusk-71886.herokuapp.com/order`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])
    return (
        <div className='mx-auto'>
            <h1 className='uppercase font-bold text-3xl text-secondary bg-primary mt-20'>Your Order</h1>
            <div class="overflow-x-auto">
  <table class="table  border-2  w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>user Name</th>
        <th>Email</th>
        <th>order item</th>
        <th>order Quantity</th>
      </tr>
    </thead>
    <tbody>
        {
            orders.map((a,index)=>  <tr>
                <td className='text-sm font-semibold text-primary'>{index + 1}</td>
                <td className='text-sm font-semibold text-primary'>{a.userName}</td>
                <td className='text-sm font-semibold text-primary'>{a.user}</td>
                <td className='text-sm font-semibold text-primary'>{a.orderItem}</td>
                <td className='text-sm font-semibold text-primary'>{a.quantity}</td>
              </tr>)
        }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrder;