import React from "react";
import AutoServiceCard from "./AutoServiceCard";
import { MdCarRepair } from "react-icons/md";
import { IoIosCar } from "react-icons/io";
import { RiCarWashingFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function AutoServices() {
  return (
    <div>
      <div className="relative flex flex-col w-full ivory-bg mt-9 space-y-8 lg:h-[250px] xl:h-[300px] overflow-y-hidden mb-10 lg:flex-row-reverse lg:space-y-0">
        <div className="px-4 space-y-2">
          <div className="flex  items-center space-x-4 pt-8 pb-4">
            <div className="p-1 gray-bg rounded-md">
              <MdCarRepair className="text-4xl white-yellow gray-bg" />
            </div>
            <h2 className="tracking-tighter text-2xl font-semibold groy">
              Vehicle Repair & Maintenance
            </h2>
          </div>
          <p className="text-[15px] roboto-font groy">
            At our premium auto shop, we offer a comprehensive range of expert
            repair services designed to keep your vehicle running smoothly. From
            routine maintenance like oil changes and brake inspections to
            complex engine diagnostics and meticulous detailing, our skilled
            technicians are committed to delivering top-notch service. With
            cutting-edge technology and a dedication to excellence, trust us to
            provide superior automotive care for your vehicle's needs.
          </p>
          <Link to="/repair-services">
            <button className="absolute bottom-6 rounded gray-bg text-white font-semibold py-2 px-12 border border-gray-400 shadow-md hover:bg-black">
              LAUNCH
            </button>
          </Link>
        </div>

        <img
          src="/images/hero/lift.jpg"
          className="w-full object-cover lg:w-1/3"
        />
      </div>

      <div className="relative flex flex-col w-full ivory-bg mt-9 space-y-8 lg:h-[250px] xl:h-[300px] overflow-y-hidden mb-10 lg:flex-row lg:space-y-0">
        <div className="px-4 space-y-2">
          <div className="flex  items-center space-x-4 pt-8 pb-4">
            <div className="p-1.5 gray-bg rounded-md">
              <IoIosCar className="text-3xl white-yellow gray-bg" />
            </div>
            <h2 className="tracking-tighter text-2xl font-semibold groy">
              Custom Auto Shop
            </h2>
          </div>
          <p className="text-[15px] roboto-font groy">
            Step into our custom auto shop where we specialize in a suite of
            tailored services to elevate your driving experience. From bespoke
            custom upgrades that redefine your vehicle's aesthetics to precision
            performance tuning that amplifies its power and responsiveness,
            we're dedicated to crafting your dream ride. Our expertise extends
            to custom fabrication, ensuring unique and personalized elements
            that stand out. Additionally, our meticulous bodywork and painting
            services bring life to your vision, delivering flawless finishes and
            attention to every detail. At our shop, innovation meets artistry,
            offering you a transformative automotive journey like no other.
          </p>
          <Link to="/custom-auto-shop">
            <button className="absolute bottom-6 rounded gray-bg text-white font-semibold py-2 px-12 border border-gray-400 shadow-md hover:bg-black">
              LAUNCH
            </button>
          </Link>
        </div>

        <img
          src="/images/hero/prelude.jpg"
          className="w-full object-cover h-full lg:w-1/3"
        />
      </div>

      <div className="relative flex flex-col w-full ivory-bg mt-9 space-y-8 lg:h-[250px] xl:h-[300px] overflow-y-hidden mb-10 lg:flex-row-reverse lg:space-y-0">
        <div className="px-4 space-y-4">
          <div className="flex  items-center space-x-4 pt-8 pb-4">
            <div className="p-1.5 gray-bg rounded-md">
              <RiCarWashingFill className="text-3xl white-yellow gray-bg" />
            </div>
            <h2 className="tracking-tighter text-2xl font-semibold groy">
              Luxury Car Wash
            </h2>
          </div>
          <p className="text-[15px] roboto-font groy">
            Step into our luxury car care haven, where meticulous attention
            meets premium services for your vehicle. Our offerings include a
            thorough exterior wash for a pristine finish and interior detailing
            that leaves your car refreshed. Experience the finesse of hand
            waxing and buffing, along with dedicated wheel and rim cleaning for
            that extra shine. Additionally, our specialized paint protection
            service ensures lasting beauty for your vehicle. Discover a realm of
            refined care where your car receives top-notch pampering and
            protection.
          </p>
          <Link to="/luxury-car-wash">
            <button className="absolute bottom-6 rounded gray-bg text-white font-semibold py-2 px-12 border border-gray-400 shadow-md hover:bg-black">
              LAUNCH
            </button>
          </Link>
        </div>

        <img
          src="/images/hero/polish.jpg"
          className="w-full object-cover h-full lg:w-1/3"
        />
      </div>
    </div>
  );
}

export default AutoServices;
