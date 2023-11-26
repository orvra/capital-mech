import React, { useState, useEffect } from "react";
import HeaderHero from "../components/HeaderHero";
import Map from "../components/Map";
import LocationsList from "../components/LocationsList";
import SearchBar from "../components/SearchBar";
import { useLoadScript } from "@react-google-maps/api";
import {
  getDistanceFromLatLonInKm,
  sortLocationsByProximity,
} from "../components/locationFunctions";
import locations from "../components/locations";

const libraries = ["places"];

function Locations({
  handleLocationChange,
  handleBookAppointment,
  ...location
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY,
    libraries,
  });

  const [coordinates, setCoordinates] = useState([
    { lat: location.lat, lng: location.lng },
  ]);
  const [locationList, setLocationList] = useState(locations);

  console.log("goku", coordinates);
  useEffect(() => {
    // Sort locations by proximity when coordinates change
    const sortedLocations = sortLocationsByProximity(locationList, coordinates);
    setLocationList(sortedLocations);
  }, [coordinates]); // Run when coordinates change

  return (
    <div>
      <HeaderHero src="/images/hero/hyundai_lift.jpg" title="LOCATIONS" />
      {isLoaded && <SearchBar setCoordinates={setCoordinates} />}
      <div className="max-w-[1400px] mx-auto md:flex md:flex-row-reverse">
        {!isLoaded ? <h1>Loading...</h1> : <Map />}

        <div className="overflow-y-auto md:h-[700px] md:w-1/3 lg:w-1/3">
          <LocationsList
            handleLocationChange={handleLocationChange}
            {...location}
            handleBookAppointment={handleBookAppointment}
            locations={locationList}
          />
        </div>
      </div>
    </div>
  );
}

export default Locations;
