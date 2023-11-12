import React from "react";
import repairServices from "../data/repairServices";
import ServiceCard from "./ServiceCard";
import { ImDroplet } from "react-icons/im"; //oil change
import { IoAlertCircleSharp, IoCloud } from "react-icons/io5"; //brakes, exhause (cloud)
import { GiSpring, GiCarWheel, GiElectric } from "react-icons/gi"; //suspension, tire service, electric
import { BsFillBox2HeartFill, BsAlignMiddle } from "react-icons/bs"; //maintenance package, wheel alignment
import { FcInspection } from "react-icons/fc"; //inspection
import { MdOutlinePermDeviceInformation, MdHvac } from "react-icons/md"; //diagnostic, hvac
import { FaLightbulb, FaThermometerHalf } from "react-icons/fa"; //light and accessories, cooling system
import { BiSolidCarBattery } from "react-icons/bi"; //battery
import { PiEngineFill } from "react-icons/pi"; //engine services

function RepairServicesSection() {
  const iconMappings = {
    ImDroplet: <ImDroplet className="text-lg groy" />,
    IoAlertCircleSharp: <IoAlertCircleSharp className="text-xl groy" />,
    IoCloud: <IoCloud className="text-xl groy" />,
    GiSpring: <GiSpring className="text-xl groy" />,
    GiCarWheel: <GiCarWheel className="text-2xl groy" />,
    GiElectric: <GiElectric className="text-xl groy" />,
    BsFillBox2HeartFill: <BsFillBox2HeartFill className="text-md groy" />,
    BsAlignMiddle: <BsAlignMiddle className="text-xl groy" />,
    FcInspection: <FcInspection className="text-xl groy" />,
    MdOutlinePermDeviceInformation: (
      <MdOutlinePermDeviceInformation className="text-xl groy" />
    ),
    MdHvac: <MdHvac className="text-2xl groy" />,
    FaLightbulb: <FaLightbulb className="text-lg groy" />,
    FaThermometerHalf: <FaThermometerHalf className="text-xl groy" />,
    BiSolidCarBattery: <BiSolidCarBattery className="text-xl groy" />,
    PiEngineFill: <PiEngineFill className="text-xl groy" />,
  };
  return (
    <div className="grid grid-cols-1 px-2 gap-x-3.5 gap-y-9 pb-10  md:grid-cols-3 w-[1400px]:px-0">
      {repairServices.map((service) => (
        <ServiceCard
          key={service.id}
          src={service.src}
          title={service.title}
          icon={iconMappings[service.icon]}
          para={service.para}
        />
      ))}
    </div>
  );
}

export default RepairServicesSection;
