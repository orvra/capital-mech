import React from "react";
import { MdCarRepair } from "react-icons/md";
import { IoIosCar } from "react-icons/io";
import { RiCarWashingFill } from "react-icons/ri";

function AutoServiceCard({
  reverse,
  icon,
  title,
  para,
  src,
  button,
  buttonText,
}) {
  return (
    <div
      className={
        !reverse
          ? "flex flex-col w-full ivory-bg shadow-sm my-8 space-y-8 lg:max-h-[300px] overflow-y-hidden lg:flex-row-reverse lg:space-y-0"
          : "flex flex-col w-full ivory-bg shadow-sm my-8 space-y-8 lg:max-h-[300px] overflow-y-hidden lg:flex-row lg:space-y-0"
      }
    >
      <div className="px-4 space-y-4">
        <div className="flex items-center space-x-4 pt-8 pb-4">
          <div className="p-1.5 gray-bg rounded-md">
            {icon}
            {/*<MdCarRepair className="text-3xl white-yellow gray-bg" />*/}
          </div>
          <h2 className="tracking-tighter text-2xl font-semibold groy">
            {title}
          </h2>
        </div>
        <p className="text-sm roboto-font groy">{para}</p>
        {button && (
          <button className="translate-y-2 gray-bg text-white font-semibold py-2 px-12 border border-gray-400 rounded-sm shadow-md hover:bg-black">
            {buttonText}
          </button>
        )}
      </div>

      <img src={src} className="w-full object-cover h-full lg:w-[400px]" />
    </div>
  );
}

export default AutoServiceCard;
