import React, { useState, useEffect } from "react";
import FooterAccordion from "./FooterAccordion";
import LgFooter from "./LgFooter";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1030);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1030);
    }

    // Add a listener for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="gray-bg">
      {isSmallScreen ? <FooterAccordion /> : <LgFooter />}

      <div className="flex flex-col items-center text-center pt-3 pb-2">
        <p className="text-[8px] text-white font-regular opacity-90 min-[375px]:text-[9px]">
          &copy; 2023 Capital Mech | All Rights Reserved | A Premium Auto
          Service Company
        </p>
        <div className="text-white text-[9px] space-y-1 py-2">
          <p className="underline cursor-pointer">Terms & Conditions</p>
          <p className="underline cursor-pointer">Privacy Policy</p>
          <p className="underline cursor-pointer">Parliament Hill Act</p>
          <p className="underline cursor-pointer">ORVRA Solutions</p>
        </div>
        <div className="flex items-center text-white space-x-2 py-2">
          <FaFacebookF className="text-xl cursor-pointer" />
          <FaXTwitter className="text-xl cursor-pointer" />
          <AiFillYoutube className="text-2xl cursor-pointer" />
          <AiOutlineInstagram className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
