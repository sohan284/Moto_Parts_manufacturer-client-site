import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])
    return (
        <div class="card w-96 w-full bg-secondary items-center text-center shadow-xl">
             <h2 class="card-title mt-5 font-bold text-primary text-4xl">{part.name}</h2>
             <p className='mt-3'><small>{part.description}</small></p>
        <figure class="px-10 pt-10">
          <img width={300} src={part.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 className='font-bold'>Price : {part.price}</h2>
        
          <div className='flex my-5'>
              <div className='mr-12 text-[green] font-bold font-mono'>Quantity : {part.quantity}</div>
             
              <div className='ml-10 font-bold text-[red] font-mono'>Minimum Order : {part.minOQ}</div>
          </div>
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                defaultValue={part.minOQ}
                contentEditable="true"
                placeholder="Quantity"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity Is Required!",
                  },
                  min: {
                    value: part.minOQ,
                    message:` Order At least ${part.minOQ} piece!`,
                  },
                  max: {
                    value: part.availableQuantity,
                    message: `Can order maximum ${part.availableQuantity} piece!`,
                  },
                })}
              />
              <label className="label text-sm">
                {errors.quantity?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "min" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
                {errors.quantity?.type === "max" && (
                  <span className="label-text-alt text-red-600">
                    {errors.quantity.message}
                  </span>
                )}
              </label>

              <div className="flex justify-center">
                <input
                  className="btn btn-primary  text-white"
                  type="submit"
                  value="Book Now"
                />
              </div>
            </form>
        </div>
      </div>
    );
};

export default Purchase;