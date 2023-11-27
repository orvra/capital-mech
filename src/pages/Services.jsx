import React from "react";
import HeaderHero from "../components/HeaderHero";
import TitleHeader from "../components/TitleHeader";
import RepairServicesSection from "../components/RepairServicesSection";

function Services() {
  return (
    <div className="">
      <HeaderHero
        src="/capital-mech/images/hero/BMW_engine.jpg"
        title="REPAIR SERVICES"
      />
      <div className="relative max-w-[1400px] mx-auto">
        <TitleHeader
          title={"Vehicle Repair & Maintenance".toUpperCase()}
          styling="pt-10 pb-8"
        />
        <RepairServicesSection />
      </div>
    </div>
  );
}

export default Services;
