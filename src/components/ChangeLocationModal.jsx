import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function ChangeLocationModal({
  handleModalClose,
  handleLocationChange,
  ...modalLocation
}) {
  const navigate = useNavigate();

  function handleModalYes(loc) {
    handleLocationChange(loc);
    handleModalClose();
    navigate("/book-appointment");
  }
  return (
    <div className="fixed inset-0 z-[125] w-full h-full flex justify-center items-center">
      {/* Black overlay with transparency */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div className="absolute w-[300px] h-[200px] text-black flex flex-col justify-center items-center text-center p-4 bg-white rounded-md">
        {/* Close button in the upper right corner */}
        <button
          onClick={handleModalClose}
          className="absolute top-0 right-2 py-2 text-xl bg-white"
        >
          <AiOutlineCloseCircle className="text-gray-500 hover:text-black" />
        </button>

        <p className="">Change location to {modalLocation.title}?</p>
        {/* Buttons */}
        <div className="absolute bottom-4 space-x-4">
          <button
            className="border border-gray-300 text-gray-500 w-16 py-2 rounded-sm hover:text-black hover:border-black"
            onClick={() => handleModalYes(modalLocation)}
          >
            Yes
          </button>

          <button
            className="border border-gray-300 text-gray-500 w-16 py-2 rounded-sm hover:text-black hover:border-black"
            onClick={handleModalClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeLocationModal;
