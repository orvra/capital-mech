import React from "react";
import HeaderHero from "../components/HeaderHero";
import Map from "../components/Map";
import LocationsList from "../components/LocationsList";

function Locations({
  handleLocationChange,
  currentLocation,
  handleBookAppointment,
}) {
  return (
    <div>
      <HeaderHero src="/images/hero/hyundai_lift.jpg" title="LOCATIONS" />
      <div className="max-w-[1400px] mx-auto md:flex md:flex-row-reverse">
        <Map />
        <div className="overflow-y-auto md:h-[700px] md:w-1/3 lg:w-1/3">
          <LocationsList
            handleLocationChange={handleLocationChange}
            currentLocation={currentLocation}
            handleBookAppointment={handleBookAppointment}
          />
        </div>
      </div>
    </div>
  );
}

export default Locations;
