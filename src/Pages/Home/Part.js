import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
  const navigate = useNavigate();
  
  const handlePurchase = id =>{
    console.log(id);
    navigate('/purchase')

  }
    const {name,img,description,price,quantity,minOQ,_id} = part;
    return (
        <div class="card w-96 bg-secondary shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-primary">{name}</h2>
          <p className='font-semibold'>Price : {price}</p>
          <p className='font-semibold'>Quantity : {quantity}</p>
          <p className='font-semibold'>Minimum Order Quantity : {minOQ}</p>
          <p><span className='font-bold'> About : </span>{description.slice(0,80)}</p>
          <div class="card-actions">
            <button onClick={()=>handlePurchase(_id)} class="btn btn-primary text-white">Place Order</button>
          </div>
        </div>
      </div>
    );
};

export default Part;