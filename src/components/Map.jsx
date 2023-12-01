import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useMemo } from "react";
import React, { useState, useEffect } from "react";
import locations from "./locations";

function Map({ coordinates }) {
  /*const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_PUBLIC_GOOGLE_API_KEY,
  });*/

  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const handleMarkerClick = (id, address) => {
    setInfoWindowData({ id, address });

    setIsOpen(true);
  };

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));

  return (
    <div className="map max-w-[1400px] mx-auto">
      {/*!isLoaded ? (
        <h1>Loading...</h1>
      ) : (*/}
      <GoogleMap
        mapContainerClassName="map-container"
        center={{ lat: 44.53, lng: -77.49 }}
        zoom={6}
        options={{ mapId: "96eeec0a916300a8" }}
      >
        {locations.map(({ lat, lng, address, index, title, number }, i) => (
          <MarkerF
            key={i}
            position={{ lat, lng }}
            onClick={() => handleMarkerClick(index, address)}
            shouldFocus={null}
          >
            {isOpen && infoWindowData?.id === index && (
              <InfoWindowF
                onCloseClick={() => {
                  setIsOpen(false);
                }}
                options={{
                  pixelOffset: new google.maps.Size(0, -10),
                  shouldFocus: null,
                }}
                zIndex={2}
              >
                <div className="space-y-1">
                  <p className="primary-font text-xs font-medium tracking-tighter">
                    {title}
                  </p>
                  <pre className="text-xs font-medium roboto-font text-gray-600">
                    {infoWindowData.address}
                  </pre>
                  <p className="text-xs font-medium roboto-font text-gray-600 cursor-pointer hover:text-blue-700">
                    {number}
                  </p>
                </div>
              </InfoWindowF>
            )}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
}

export default Map;
