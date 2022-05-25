import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from './../../firebase.init';

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [quantityError, setQuantityError] = useState("");
    const [user] =useAuthState(auth);
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, []);
   
    const handleOrder = event =>{
      event.preventDefault();

      const order = {
        user : user.email,
        userName: user.displayName,
        phone : event.target.phone.value,
        orderItem: part.name,
        quantity : event.target.quantity.value,
        
      }
      fetch(`http://localhost:5000/order`,{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(order)
      })
      .then(res=>res.json())
      .then(data=>{
        toast(`Order ${event.target.quantity.value} items succesful`)
      })
      
    }
    const handleError = () => {
      const quantity = document.getElementById("inputQuantity").value;
      if (part.minOQ > quantity) {
        setQuantityError(`You have to order atleast  ${part.minOQ} !`);
      } else if (quantity > part.quantity) {
        setQuantityError(
          `You can order maximum ${part.quantity}!`
        );
      } else {
        setQuantityError(null);
      }
    };
   
    return (
        <div className="card w-96 w-full purchase-img bg-secondary items-center text-center shadow-xl">
             <h2 className="card-title mt-5 font-bold text-primary text-4xl">{part.name}</h2>
             <p className='mt-3'><small>{part.description}</small></p>
        <figure className="px-10 pt-10">
          <img  width={300} src={part.img} alt="" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className='font-bold'>Price : {part.price}</h2>
        
          <div className='flex my-5'>
              <div className='mr-12 text-[green] font-bold font-mono'>Quantity : {part.quantity}</div>
             
              <div className='ml-10 font-bold text-[red] font-mono'>Minimum Order : {part.minOQ}</div>
          </div>
          <form className='bg-[#a3adad] rounded-3xl p-5' onSubmit={handleOrder}>
          <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input  mb-2 font-bold w-full max-w-xs"
              />
               <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
                className="input  mb-2 font-bold w-full max-w-xs"
              />
               <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <p className='font-bold text-primary my-4 text-2xl'>Enter Quantity</p>
          <input 
          onChange={handleError}
              type="number"
              name='quantity'
              id='inputQuantity'
              defaultValue={part.minOQ}
               className='input input-bordered input-primary mb-2 w-full  max-w-xs' />
             
            
             {
                <p className="text-red-600 font-bold">
                  <small>{quantityError}</small>
                </p>
              }
              <div className="flex justify-center">
              {quantityError ? (
                <input
                  disabled
                  id="submitButton"
                  type="submit"
                  value="place Order"
                  className="btn btn-primary max-w-xs"
                />
              ) : (
                <input
                  id="submitButton"
                  type="submit"
                  value="place Order"
                  className="btn btn-primary mb-5  max-w-xs"
                />
              )}
              </div>
            </form>
        </div>
      </div>
    );
};

export default Purchase;

