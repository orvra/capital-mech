import React from "react";
import { useNavigate } from "react-router-dom";
import locations from "./locations";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function LocationsList({
  handleLocationChange,
  currentLocation,
  handleBookAppointment,
}) {
  const testClick = (e) => {
    console.log(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <div className="space-y-6 py-6">
      {locations.map((location, i) => (
        <div key={i} className="px-4 space-y-1 border-b border-gray-300">
          <div className="flex space-x-2 items-center pb-1">
            <div className="white-yellow gray-bg inline-block py-1 w-7 text-center">
              {i + 1}
            </div>
            <h2 className="tracking-tighter font-semibold groy">
              {location.title}
            </h2>
          </div>
          <pre className="roboto-font text-sm text-gray-700">
            {location.address}
          </pre>
          <p className="roboto-font text-sm text-blue-800 underline cursor-pointer">
            {location.number}
          </p>
          {/*buttons*/}
          <div className="py-4 space-y-2">
            <button
              className="flex justify-center items-center space-x-1.5 rounded-none white-yellow gray-bg w-full text-sm py-3 hover:bg-black"
              onClick={() => handleBookAppointment(location.index)}
            >
              <FaRegCalendarAlt className="text-lg" />
              <p>{"Book Appointment".toUpperCase()}</p>
            </button>

            {currentLocation !== location.index ? (
              <button
                className="flex justify-center items-center space-x-1 rounded-none white-yellow gray-bg w-full text-sm py-3 hover:bg-black"
                onClick={() => handleLocationChange(location)}
              >
                <MdOutlineLocationOn className="text-lg" />
                <p>{"Make this My Location".toUpperCase()}</p>
              </button>
            ) : (
              <button
                className="flex justify-center items-center space-x-1 rounded-none bg-gray-200 text-white  w-full text-sm py-3 "
                onClick={() => handleLocationChange(location)}
                disabled={true}
              >
                <MdOutlineLocationOn className="text-lg" />
                <p>{"Make this My Location".toUpperCase()}</p>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationsList;
