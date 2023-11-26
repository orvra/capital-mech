import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { easeIn, motion } from "framer-motion";
import { duration } from "@mui/material";

function MenuOverlay({ handleMenuClose }) {
  return (
    <>
      <motion.div
        initial={{ y: "-100%", x: "-100%" }}
        animate={{ y: "0", x: 0 }}
        transition={{
          duration: 0.5,
        }}
        exit={{ y: "-100%", x: "-100%", transition: { duration: 0.5 } }}
        className="fixed w-full min-h-screen top-0 bottom-0 z-[150] gray-bg lg:hidden"
      >
        <div className="relative flex flex-col items-center text-center mx-auto w-full h-full">
          <div
            className="absolute left-0 pl-2 pt-12 text-white text-4xl cursor-pointer"
            onClick={handleMenuClose}
          >
            <BiMenu />
          </div>
          <div className="pt-[52px] text-white xs:pt-12 space-y-10">
            <div className="mx-auto w-48 xs:w-64">
              <img src="/images/logo/CAPITALMECH6.png" />
            </div>
            <div className="text-xl xs:text-2xl pt-5">
              <NavLink onClick={handleMenuClose} to="/">
                Home
              </NavLink>
            </div>
            <div className="text-xl xs:text-2xl">
              <NavLink onClick={handleMenuClose} to="/locations">
                Locations
              </NavLink>
            </div>
            <div className="text-xl xs:text-2xl">
              <NavLink onClick={handleMenuClose} to="/repair-services">
                Repair Services
              </NavLink>
            </div>
            <div className="text-xl xs:text-2xl">
              <NavLink onClick={handleMenuClose} to="/custom-auto-shop">
                Custom Auto Shop
              </NavLink>
            </div>
            <div className="text-xl xs:text-2xl">
              <NavLink onClick={handleMenuClose} to="/luxury-car-wash">
                Luxury Car Wash
              </NavLink>
            </div>
            <div className="text-xl xs:text-2xl">
              <NavLink onClick={handleMenuClose} to="/promotions">
                Promotions
              </NavLink>
            </div>
            <div className="text-xl xs:text-2xl">
              <NavLink onClick={handleMenuClose} to="/book-appointment">
                Book Appointment
              </NavLink>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MenuOverlay;
