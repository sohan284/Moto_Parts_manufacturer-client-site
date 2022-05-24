import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
  const navigate = useNavigate();
  
  const handlePurchase = id =>{
    console.log(id);
    navigate(`/purchase/${id}`)

  }
    const {name,img,description,price,quantity,minOQ,_id} = part;
    return (
        <div className="card w-96 bg-secondary shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-primary">{name}</h2>
          <p className='font-semibold'>Price : {price}</p>
          <p className='font-semibold'>Quantity : {quantity}</p>
          <p className='font-semibold'>Minimum Order Quantity : {minOQ}</p>
          <p><span className='font-bold'> About : </span>{description.slice(0,80)}</p>
          <div className="card-actions">
            <button onClick={()=>handlePurchase(_id)} className="btn btn-primary text-white">Place Order</button>
          </div>
        </div>
      </div>
    );
};

export default Part;