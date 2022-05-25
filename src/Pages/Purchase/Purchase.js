import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [quantityError, setQuantityError] = useState("");
    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, []);
   
    const handleSubmit = event =>{

      event.preventDefault();
      
    }
    const handleError = () => {
      const quantity = document.getElementById("inputQuantity").value;
      if (part.minOQ > quantity) {
        setQuantityError(`Book at least ${part.minOQ} !`);
      } else if (quantity > part.quantity) {
        setQuantityError(
          `You can book maximum ${part.quantity}!`
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
          <form onSubmit={handleSubmit}>
          <input 
          onChange={handleError}
              type="number"
              id='inputQuantity'
              defaultValue={part.minOQ}
               className='input input-bordered input-primary mb-2 w-full ' />
             
            
              <div className="flex justify-center">

              {quantityError ? (
                <input
                  disabled
                  id="submitButton"
                  type="submit"
                  value="Submit"
                  className="btn btn-primary max-w-xs"
                />
              ) : (
                <input
                  id="submitButton"
                  type="submit"
                  value="Submit"
                  className="btn btn-primary  max-w-xs"
                />
              )}
              </div>
            </form>
        </div>
      </div>
    );
};

export default Purchase;

