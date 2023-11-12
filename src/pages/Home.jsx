import React from "react";
import WelcomeHero from "../components/WelcomeHero";
import WelcomeHeroCards from "../components/WelcomeHeroCards";
import AutoServices from "../components/AutoServices";
import TitleHeader from "../components/TitleHeader";
import TireOffer from "../components/TireOffer";
import Coupon from "../components/Coupon";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-6">
      <WelcomeHero />
      <div className="relative max-w-[1400px] mx-auto z-20">
        <WelcomeHeroCards />
        <TitleHeader
          title="CAPITAL MECH AUTO SERVICES"
          styling="px-4 pt-6 md:pb-2 md:pt-[220px] md:px-0"
        />
        <AutoServices />
        <TitleHeader title="SPECIAL OFFERS" styling="md:py-2" />
        <TireOffer />
        <div className="w-full flex flex-col items-center px-2 xxs:px-4 min-[1400px]:px-0 lg:space-x-4 lg:flex-row">
          <Coupon
            upTo={true}
            off={true}
            amount={75}
            item={"WINTER TIRES"}
            para={
              "Discover Winter Tires Collection. Valid for pre-tax purchases, excluding dealer and special orders. Coupon code: WINT50, Expires on December 31, 2023. Please make sure to present this coupon when dropping off your vehicle for winter tire installation."
            }
          />
          <Coupon
            amount={"FREE"}
            item={"PREMIUM CAR WASH"}
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

export default Home;
