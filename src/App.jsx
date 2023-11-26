import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import MenuOverlay from "./components/MenuOverlay";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import CustomAutoShop from "./pages/CustomAutoShop";
import Promotions from "./pages/Promotions";
import LuxuryCarWash from "./pages/LuxuryCarWash";
import RepairService from "./pages/RepairService";
import BookAppointment from "./pages/BookAppointment";
import locations from "./components/locations";
import ChangeLocationModal from "./components/ChangeLocationModal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const storedLocation = JSON.parse(localStorage.getItem("location"));

    if (storedLocation) {
      console.log(storedLocation);
      setLocation(storedLocation);
    } else {
      setLocation(locations[0]);
    }
    console.log(location, "hellboi");
  }, []);

  const handleMenuClick = () => {
    setDisplayMenu(true);
  };

  const handleMenuClose = () => {
    setDisplayMenu(false);
  };

  const handleLocationChange = (loc) => {
    setLocation(loc);
    localStorage.setItem("location", JSON.stringify(loc));
  };

  const handleModalClose = () => {
    setDisplayLocationModal(false);
  };

  const [displayLocationModal, setDisplayLocationModal] = useState(false);
  const [modalLocation, setModalLocation] = useState(null);
  const navigate = useNavigate();

  function handleBookAppointment(i) {
    console.log(i);
    if (i !== location.index) {
      const currentLocation = locations.find((currLoc) => currLoc.index === i);
      setModalLocation(currentLocation);
      setDisplayLocationModal(true);
      console.log(currentLocation);
    } else {
      setDisplayLocationModal(false);
      navigate("/book-appointment");
    }
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {location && <Navbar handleMenuClick={handleMenuClick} {...location} />}

      <AnimatePresence>
        {displayMenu && <MenuOverlay handleMenuClose={handleMenuClose} />}
      </AnimatePresence>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/locations"
          element={
            location ? ( // Check if location is defined
              <Locations
                handleLocationChange={handleLocationChange}
                {...location}
                handleBookAppointment={handleBookAppointment}
              />
            ) : null
          }
        />
        <Route path="/repair-services" element={<Services />} />
        <Route path="/custom-auto-shop" element={<CustomAutoShop />} />
        <Route path="/luxury-car-wash" element={<LuxuryCarWash />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/repair-services/:service" element={<RepairService />} />
        <Route
          path="/book-appointment"
          element={<BookAppointment {...location} />}
        />
      </Routes>
      {displayLocationModal && modalLocation && (
        <ChangeLocationModal
          handleModalClose={handleModalClose}
          handleLocationChange={handleLocationChange}
          {...modalLocation}
        />
      )}
      <Footer />
    </>
  );
}

export default App;
