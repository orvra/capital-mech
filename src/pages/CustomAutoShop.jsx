import React from "react";
import AutoServiceCard from "../components/AutoServiceCard";
import { easeIn, motion } from "framer-motion";
import { MdCarRepair } from "react-icons/md";
import TitleHeader from "../components/TitleHeader";
import CustomAutoShopCarousel from "../components/CustomAutoShopCarousel";

function CustomAutoShop() {
  return (
    <div>
      <div className="relative flex justify-center items-center w-full aspect-video">
        <div className="absolute w-full h-full bg-black"></div>
        <motion.div
          className="z-[1] absolute w-full h-full
        "
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 2 }}
        >
          <img
            src="/images/hero/corvette_orange.jpg"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          className="absolute z-[2]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeIn" }}
        >
          <h1 className="text-white font-extrabold white-yellow text-xl xxs:text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
            <h1 className="inline text-3xl xxs:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
              C
            </h1>
            USTOM{" "}
            <h1 className="inline text-3xl xxs:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
              A
            </h1>
            UTO{" "}
            <h1 className="inline text-3xl xxs:text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
              S
            </h1>
            HOP
          </h1>
        </motion.div>
      </div>
      <div className="max-w-[1400px] mx-auto xxs:px-4 min-[1400px]:px-0">
        <AutoServiceCard
          reverse={true}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Custom Upgrades"
          para="Unleash the full potential of your vehicle with our custom upgrade services. From engine enhancements that boost horsepower and torque to aesthetic improvements that turn heads on the road, we offer a wide range of customization options. Whether you're a performance enthusiast or simply looking to personalize your ride, our team of skilled technicians is here to make your automotive dreams a reality."
          src="/images/custom auto shop/blue_car.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={false}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Performance Tuning"
          para="Experience the thrill of high-performance driving with our performance tuning services. Our specialists will fine-tune your vehicle's engine and components to optimize power, speed, and responsiveness. Whether you're a racing enthusiast, or you simply love the rush of a powerful ride, our performance upgrades are designed to take your driving experience to the next level."
          src="/images/custom auto shop/custom_engine.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={true}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Custom Fabrication"
          para="Transform your vehicle into a unique masterpiece with our custom fabrication solutions. Our skilled craftsmen can bring your ideas to life, whether it's custom bodywork, interior designs, or specialized components. Embrace individuality and style with our custom fabrication services and drive a vehicle that truly reflects your personality and vision."
          src="/images/custom auto shop/car_seats.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={false}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Bodywork & Painting"
          para="Revitalize and enhance your vehicle's appearance with our bodywork and painting services. Our talented painters and technicians will restore and improve your vehicle's visual appeal. Whether it's fixing dents, scratches, or giving your vehicle a complete makeover, we'll make sure it shines with a new coat of paint and looks as good as new."
          src="/images/custom auto shop/bodywork.jpg"
          button={false}
          buttonText="SEE MORE"
        />
      </div>

      <div className="w-full">
        <TitleHeader title="SAMPLE WORK" styling="py-7 pb-10" />
      </div>

      <div className="max-w-[1400px] mx-auto xxs:px-4 min-[1400px]:px-0">
        <CustomAutoShopCarousel />
      </div>
    </div>
  );
}

export default CustomAutoShop;
