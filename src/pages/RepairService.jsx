import React from "react";
import { useParams } from "react-router-dom";
import HeaderHero from "../components/HeaderHero";
import TitleHeader from "../components/TitleHeader";
import { ImDroplet } from "react-icons/im"; //oil change
import { IoAlertCircleSharp, IoCloud } from "react-icons/io5"; //brakes, exhause (cloud)
import { GiSpring, GiCarWheel, GiElectric } from "react-icons/gi"; //suspension, tire service, electric
import { BsFillBox2HeartFill, BsAlignMiddle } from "react-icons/bs"; //maintenance package, wheel alignment
import { FcInspection } from "react-icons/fc"; //inspection
import { MdOutlinePermDeviceInformation, MdHvac } from "react-icons/md"; //diagnostic, hvac
import { FaLightbulb, FaThermometerHalf } from "react-icons/fa"; //light and accessories, cooling system
import { BiSolidCarBattery } from "react-icons/bi"; //battery
import { PiEngineFill } from "react-icons/pi"; //engine services
import AutoServiceCard from "../components/AutoServiceCard";
import repairServices from "../data/repairServices";
import Coupon from "../components/Coupon";
import { Link } from "react-router-dom";

function RepairService() {
  const iconMappings = {
    ImDroplet: <ImDroplet className="text-lg white-yellow" />,
    IoAlertCircleSharp: <IoAlertCircleSharp className="text-xl white-yellow" />,
    IoCloud: <IoCloud className="text-xl white-yellow" />,
    GiSpring: <GiSpring className="text-xl white-yellow" />,
    GiCarWheel: <GiCarWheel className="text-2xl white-yellow" />,
    GiElectric: <GiElectric className="text-xl white-yellow" />,
    BsFillBox2HeartFill: (
      <BsFillBox2HeartFill className="text-md white-yellow" />
    ),
    BsAlignMiddle: <BsAlignMiddle className="text-xl white-yellow" />,
    FcInspection: <FcInspection className="text-xl white-yellow" />,
    MdOutlinePermDeviceInformation: (
      <MdOutlinePermDeviceInformation className="text-xl white-yellow" />
    ),
    MdHvac: <MdHvac className="text-2xl white-yellow" />,
    FaLightbulb: <FaLightbulb className="text-lg white-yellow" />,
    FaThermometerHalf: <FaThermometerHalf className="text-xl white-yellow" />,
    BiSolidCarBattery: <BiSolidCarBattery className="text-xl white-yellow" />,
    PiEngineFill: <PiEngineFill className="text-xl white-yellow" />,
  };
  const { service } = useParams();
  const repairService = service.replace(/-/g, " ");
  const svc = repairServices.find(
    (serv) => serv.title.toLowerCase() === repairService
  );
  return (
    <div>
      <HeaderHero
        src="/capital-mech/images/hero/BMW_engine.jpg"
        title={repairService.toUpperCase()}
      />
      <div className="max-w-[1200px] mx-auto">
        <AutoServiceCard
          reverse={false}
          icon={iconMappings[svc.icon]}
          title={svc.title}
          para={svc.para}
          src={svc.src}
          button={false}
        />
        <TitleHeader title={svc.header} styling="roboto-font" />
        <div className="pt-4 px-4 mb-10 roboto-font min-[1200px]:px-0">
          <p className="">{svc.headerText}</p>
          <h2 className="text-2xl pt-8 pb-6 font-semibold groy">
            {svc.subHeader}
          </h2>
          <h3 className="new-line">{svc.subHeaderText}</h3>
        </div>

        <TitleHeader title="SPECIAL OFFERS" styling="pt-4 roboto-font" />
        <div className="w-full flex flex-col items-center mb-10 px-4 lg:gap-x-4 lg:grid lg:grid-cols-2 min-[1200px]:px-0">
          <Coupon
            upTo={true}
            off={true}
            amount={75}
            item={"WINTER TIRES"}
            para={
              "Discover Winter Tires Collection. Valid for pre-tax purchases, excluding dealer and special orders. Expires on December 31, 2023. Please present coupon at the time of service."
            }
          />
          <Coupon
            amount={"FREE"}
            item={"Premium Car Wash"}
            para={
              "Experience a refreshing car wash on us! No strings attached. This special offer is available for a limited time, so don't miss out. Remember to present this coupon to enjoy your complimentary car wash. Offer expires soon."
            }
          />
        </div>
        <div className="flex justify-center my-12">
          <Link to="/promotions">
            <button className="gray-bg text-white font-semibold py-2 px-12 border border-gray-400 rounded-sm shadow-md hover:bg-black">
              SEE ALL OFFERS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RepairService;
