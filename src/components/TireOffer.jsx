import React from "react";
import { FaRegSnowflake } from "react-icons/fa";

function TireOffer() {
  return (
    <>
      <div className="relative gray-bg overflow-y-hidden mt-8">
        <div className="mt-8 flex flex-col space-y-4 justify-center items-center text-white pt-10">
          <div className="flex space-x-4 items-center">
            <FaRegSnowflake className="text-2xl" />
            <h2 className="text-xl font-semibold">Winter is coming...</h2>
            <FaRegSnowflake className="text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-center">
            Get your tires with Capital Mech and drive in confidence.
          </h2>
          <h2 className="text-md font-medium text-center pb-6">
            Here's what you get with the purchase of 4 tires:
          </h2>
          <div className="flex flex-col justify-center text-center space-y-7 lg:flex-row lg:space-y-0 lg:space-x-12 lg:items-end">
            <div className="space-y-4 lg:flex lg:flex-col">
              <img
                className="h-36 object-contain translate-x-[62px] lg:translate-x-0"
                src="/capital-mech/images/hero/tire_rotate3.png"
              />
              <h2>Free tire rotation every 5000KM</h2>
            </div>
            <div className="space-y-4 lg:flex lg:flex-col lg:justify-center">
              <img
                className="h-36 object-contain translate-x-[62px] lg:translate-x-0"
                src="/capital-mech/images/hero/tire_balance3.png"
              />
              <h2>Free rebalance every 5000KM</h2>
            </div>
            <div className="space-y-4 lg:flex lg:flex-col">
              <img
                className="h-32 object-contain translate-x-[90px] lg:translate-x-0"
                src="/capital-mech/images/hero/tire_repair3.png"
              />
              <h2>Free one time tire repair</h2>
            </div>
            <div className="space-y-4 lg:flex lg:flex-col">
              <img
                className="h-40 object-contain translate-x-14 lg:translate-x-0"
                src="/capital-mech/images/hero/tire_pressure3.png"
              />
              <h2>Free air pressure checks</h2>
            </div>
          </div>
        </div>
        <p className="text-[10px] white-yellow text-center translate-y-7 lg:translate-y-12">
          Valid with the purchase of any 4 sets of tires. Servicable at any of
          our locations.
        </p>
        <div className="flex justify-center mx-auto w-full pt-0 md:w-[70%]">
          <img
            src="/capital-mech/images/hero/tires3.png"
            className="w-full object-cover translate-y-16 lg:translate-y-24"
          />
        </div>
      </div>
    </>
  );
}

export default TireOffer;
