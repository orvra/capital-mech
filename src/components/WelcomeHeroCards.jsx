import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineLocalOffer, MdOutlineReviews } from "react-icons/md";
import React from "react";

function WelcomeHeroCards() {
  return (
    <div className="flex flex-col px-4 space-y-3 pb-10 w-full md:px-0 md:flex-row md:space-y-0 md:space-x-3 md:justify-between md:absolute md:z-[20] md:-translate-y-20">
      <div className="flex flex-col space-y-7 py-7 shadow-md rounded-md w-full justify-center items-center text-center gray-bg border-b-[10px] border-b-[#FF6E31] cursor-pointer">
        <div className="text-4xl groy rounded-full p-5 white-yellow-bg">
          <FaRegCalendarAlt />
        </div>
        <div className="space-y-2 text-2xl font-semibold white-yellow">
          <p>BOOK YOUR</p>
          <p className="orange">APPOINTMENT</p>
        </div>
      </div>
      <div className="flex flex-col space-y-7 py-7 shadow-md rounded-md w-full justify-center items-center text-center gray-bg border-b-[10px] border-b-[#FF6E31] cursor-pointer">
        <div className="text-4xl groy rounded-full p-5 white-yellow-bg">
          <MdOutlineLocalOffer />
        </div>
        <div className="space-y-2 text-2xl font-semibold white-yellow">
          <p>CHECK OUR</p>
          <p className="orange">SPECIAL OFFERS</p>
        </div>
      </div>
      <div className="flex flex-col space-y-7 py-7 shadow-md rounded-md w-full justify-center items-center text-center gray-bg border-b-[10px] border-b-[#FF6E31] cursor-pointer">
        <div className="text-4xl groy rounded-full p-5 white-yellow-bg">
          <MdOutlineReviews />
        </div>
        <div className="space-y-2 text-2xl font-semibold white-yellow">
          <p>SEE OUR</p>
          <p className="orange">CUSTOMER REVIEWS</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeroCards;
