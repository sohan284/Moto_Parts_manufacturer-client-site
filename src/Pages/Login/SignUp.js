import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const Booking = () => {
  const { toolId } = useParams();
  const [bookingTool, setBookingTool] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    fetch(http://localhost:5000/tool/${toolId})
      .then((res) => res.json())
      .then((data) => setBookingTool(data));
  }, [toolId]);

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="pt-5 rounded-lg"
            src={bookingTool.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookingTool.name}
            <div className="badge badge-primary">In Stock</div>
          </h2>
          <p>{bookingTool.description}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline text-lg">
              Available Quantity: {bookingTool.availableQuantity}
            </div>
            <div className="badge badge-outline text-lg">
              Minimum Order: {bookingTool.minimumOrder}
            </div>
          </div>

          <p className="text-3xl py-2 text-center">
            Price/Tool(Price Per Tool): {bookingTool.price}$
          </p>
          <div className="form-control mx-auto  w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter Quantity</span>
            </label>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                defaultValue={bookingTool.minimumOrder}
                contentEditable="true"
                placeholder="Quantity"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity Is Required!",
                  },
                  min: {
                    value: bookingTool.minimumOrder,
                    message: Order At least ${bookingTool.minimumOrder} piece!,
                  },
                  max: {
                    value: bookingTool.availableQuantity,
                    message: Can order maximum ${bookingTool.availableQuantity} piece!,
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
      </div>
    </div>
  );
};

export default Booking;