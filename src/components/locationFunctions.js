

// Function to calculate distance between two points using Haversine formula
export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };
  
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };


// Utility function to sort locations by proximity to given coordinates
 export const sortLocationsByProximity = (locations, coordinates) => {
    return locations.slice().sort((loc1, loc2) => {
      const distance1 = getDistanceFromLatLonInKm(
        coordinates.lat,//coordinates[0].lat,
        coordinates.lng,//coordinates[0].lng,
        loc1.lat,
        loc1.lng
      );
      const distance2 = getDistanceFromLatLonInKm(
        coordinates.lat,//coordinates[0].lat,
        coordinates.lng,//coordinates[0].lng,
        loc2.lat,
        loc2.lng
      );
  
      return distance1 - distance2;
    });
  };
