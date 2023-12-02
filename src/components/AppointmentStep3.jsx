import React, { useState } from "react";
import { Link } from "react-router-dom";

function AppointmentStep3({ formSubmitted, setFormSubmitted }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    year: "",
    brand: "",
    model: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="roboto-font groy self-start pt-6 pb-0 w-full">
      {!formSubmitted ? (
        <form className="" onSubmit={handleSubmit}>
          <label className="">
            Contact Info:
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First & Last Name"
              className="py-1 px-2 w-full bg-white my-0.5 border rounded"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              className="py-1 px-2 w-full bg-white my-0.5 border rounded"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              type="text"
              id="number"
              name="number"
              placeholder="Phone Number"
              className="py-1 px-2 w-full bg-white my-0.5 mb-4 border rounded"
              onChange={handleChange}
              value={formData.number}
            />
          </label>
          <label>
            Vehicle Info:
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Year"
              className="py-1 px-2 w-full bg-white my-0.5 border rounded"
              onChange={handleChange}
              value={formData.year}
            />
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Brand"
              className="py-1 px-2 w-full bg-white my-0.5 border rounded"
              onChange={handleChange}
              value={formData.brand}
            />
            <input
              type="text"
              id="model"
              name="model"
              placeholder="Model"
              className="py-1 px-2 w-full bg-white my-0.5 border rounded"
              onChange={handleChange}
              value={formData.model}
            />
          </label>
          {!formSubmitted && (
            <button className="gray-bg white-yellow w-full font-semibold py-2 px-12 mt-4 border border-gray-400 rounded shadow-md hover:bg-black">
              SUBMIT
            </button>
          )}
        </form>
      ) : (
        <div className="flex flex-col space-y-4 text-lg groy items-center text-center">
          <p className="px-12">
            Thank you for booking your appointment with Capital Mech!
          </p>
          <p className="px-12 pb-4">
            You should recieve a confirmation email within the following hour.
          </p>
          <Link to="/">
            <button className="gray-bg text-white w-64 font-semibold py-2 px-12 border border-gray-400 rounded shadow-md hover:bg-black">
              RETURN HOME
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default AppointmentStep3;
