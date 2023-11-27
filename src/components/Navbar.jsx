import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TbMapPinCog } from "react-icons/tb";
import { BiDownArrow, BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";

function Navbar({ handleMenuClick, ...location }) {
  const [popupEnabled, setPopupEnabled] = useState(false);

  const handleMouseEnter = () => {
    setPopupEnabled(true);
  };

  const handleMouseExit = () => {
    setPopupEnabled(false);
  };
  return (
    <nav className="w-full h-24 text-white w-full">
      <div className="flex h-full items-center justify-between max-w-[1400px] mx-auto px-2 min-[1400px]:px-0">
        <div className="flex items-center space-x-1 xs:space-x-2">
          <div
            className="text-3xl xxs:text-4xl cursor-pointer custom:hidden"
            onClick={handleMenuClick}
          >
            <BiMenu />
          </div>
          <Link to="/">
            <img
              src="/capital-mech/images/logo/CAPITALMECH6.png"
              className="pt-2 w-44 xl:w-64 xl:pt-4"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-3 xl:space-x-5">
          <div className="hidden roboto-font text-xs space-x-4 min-[1200px]:space-x-5 xl:space-x-8 custom:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/repair-services">Repair Services</NavLink>
            <NavLink to="/custom-auto-shop">Custom Auto Shop</NavLink>
            <NavLink to="/luxury-car-wash">Luxury Car Wash</NavLink>
            <NavLink to="/promotions">Promotions</NavLink>
            <NavLink to="/book-appointment">Book Appointment</NavLink>
          </div>

          <div
            className="orange text-xs space-y-1 group "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseExit}
          >
            <div className="flex space-x-1.5 justify-start items-center cursor-pointer">
              <TbMapPinCog className="text-xl md:text-3xl" />
              <div className="white-yellow text-[9px] md:text-xs">
                <p>My mechanic: </p>
                <p className="underline">
                  {location.title.split(" ").slice(0, -1).join(" ")}
                </p>
                <p className="underline">{location.address.split("\n")[0]}</p>
                <p className="underline">{location.address.split("\n")[2]}</p>
              </div>
              <div className="pl-0 group-hover:translate-y-0.5 md:pl-2">
                <BiDownArrow className="text-[11px] md:text-sm" />
              </div>
            </div>
            <AnimatePresence>
              {popupEnabled && (
                <div className="relative max-w-[1400px] mx-auto">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 z-[50] w-[300px] xxs:w-[375px] bg-white pb-4 shadow rounded"
                  >
                    <h2 className="orange text-lg font-semibold pt-6 pb-1 bg-navy px-4">
                      {location.title}
                    </h2>
                    <div className="px-4 groy pt-4 space-y-4 text-sm roboto-font">
                      <p className="new-line">{location.address}</p>
                      <div className="flex space-x-2 items-center">
                        <BiSolidPhoneCall />
                        <p>{location.number}</p>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <IoMdMail />
                        <p>{location.email}</p>
                      </div>
                      <div className="grid grid-cols-3 w-full text-gray-500">
                        <p>Monday</p>
                        <p className="col-span-2">08:00 AM - 06:00 PM</p>
                        <p className="row-start-2">Tuesday</p>
                        <p className="row-start-2 col-span-2">
                          08:00 AM - 06:00 PM
                        </p>
                        <p className="row-start-3">Wednesday</p>
                        <p className="row-start-3 row-start-2 col-span-2">
                          08:00 AM - 06:00 PM
                        </p>
                        <p className="row-start-4">Thursday</p>
                        <p className="row-start-4 row-start-2 col-span-2">
                          08:00 AM - 06:00 PM
                        </p>
                        <p className="row-start-5">Friday</p>
                        <p className="row-start-5 row-start-2 col-span-2">
                          08:00 AM - 06:00 PM
                        </p>
                        <p className="row-start-6">Saturday</p>
                        <p className="row-start-6 row-start-2 col-span-2">
                          08:00 AM - 06:00 PM
                        </p>
                        <p className="row-start-7">Sunday</p>
                        <p className="row-start-7 row-start-2 col-span-2">
                          CLOSED
                        </p>
                      </div>
                      <div>
                        <Link to="/book-appointment">
                          <button className="gray-bg text-white font-semibold mt-3 mb-2 py-2 rounded w-full border border-gray-400 shadow-md hover:bg-black">
                            BOOK APPOINTMENT
                          </button>
                        </Link>
                        <Link to="/locations">
                          <button className="gray-bg text-white font-semibold w-full border py-2 border-gray-400 rounded shadow-md hover:bg-black">
                            CHANGE LOCATION
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
