import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

export default function FooterAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor: "var(--gray-color)",
            color: "white",
            "&:hover": {
              borderTop: "1px solid var(--secondary-color)", // Change the top border on hover
              borderBottom: "1px solid var(--secondary-color)", // Change the bottom border on hover
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "Roboto Flex Variable",
              fontSize: "12px",
            }}
          >
            AUTO SERVICES
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: "var(--gray-color)", color: "white" }}
        >
          <div className="text-xs font-['Roboto_Flex_Variable'] text-gray-200 pl-2 space-y-0">
            <h4 className="font-medium">Vehicle Repair & Maintenance</h4>
            <div className="pl-4 py-3 space-y-1">
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/oil-change"
                >
                  Oil Change
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/brake-repair"
                >
                  Brake Repair
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/suspension-repair"
                >
                  Suspension Repair
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/maintenance-packages"
                >
                  Maintenance Packages
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/tire-services"
                >
                  Tire Services
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/wheel-alignment"
                >
                  Wheel Alignment
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/vehicle-inspections"
                >
                  Vehicle Inspections
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/electric-vehicle-support"
                >
                  Electric Vehicle Support
                </Link>
              </div>

              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/exhaust-system-repair"
                >
                  Exhaust System Repair
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/diagnostic-services"
                >
                  Diagnostic Services
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/lighting-and-accessories"
                >
                  Lighting & Accessories
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/cooling-system-maintenance"
                >
                  Cooling System Maintenance
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/hvac-service"
                >
                  HVAC Service
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/battery-care"
                >
                  Battery Care
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/repair-services/engine-services"
                >
                  Engine Services
                </Link>
              </div>
            </div>
            <h4 className="font-medium">Custom Auto Shop</h4>
            <div className="pl-4 py-3 space-y-1">
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/custom-auto-shop"
                >
                  Custom Upgrades
                </Link>
              </div>

              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/custom-auto-shop"
                >
                  Performance Tuning
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/custom-auto-shop"
                >
                  Custom Fabrication
                </Link>
              </div>
              <div>
                <Link
                  className="inline-block underline cursor-pointer"
                  to="/custom-auto-shop"
                >
                  Bodywork & Painting
                </Link>
              </div>
            </div>
            <h4 className="font-medium">Luxury Car Wash</h4>
            <div className="pl-4 py-3 space-y-1">
              <div>
                <Link to="/luxury-car-wash" class="underline cursor-pointer">
                  Premium Exterior Wash
                </Link>
              </div>
              <div>
                <Link to="/luxury-car-wash" class="underline cursor-pointer">
                  Interior Detailing
                </Link>
              </div>
              <div>
                <Link to="/luxury-car-wash" class="underline cursor-pointer">
                  Hand Wax & Buff
                </Link>
              </div>
              <div>
                <Link to="/luxury-car-wash" class="underline cursor-pointer">
                  Wheel and Rim Cleaning
                </Link>
              </div>
              <div>
                <Link to="/luxury-car-wash" class="underline cursor-pointer">
                  Paint Protection
                </Link>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disableGutters={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            backgroundColor: "var(--gray-color)",
            color: "white",
            "&:hover": {
              borderTop: "1px solid var(--secondary-color)", // Change the top border on hover
              borderBottom: "1px solid var(--secondary-color)", // Change the bottom border on hover
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "Roboto Flex Variable",
              fontSize: "12px",
            }}
          >
            MY MECHANIC
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "var(--gray-color)",
            color: "white",
            paddingY: 0,
          }}
        >
          <div className="text-xs font-['Roboto_Flex_Variable'] text-gray-200 pl-2 space-y-0">
            <div className="py-3 space-y-2">
              <div>
                <Link to="/locations" class="underline cursor-pointer">
                  Find Your Mechanic
                </Link>
              </div>
              <div>
                <Link
                  to="/book-appointment"
                  className="underline cursor-pointer"
                >
                  Book Your Appointment
                </Link>
              </div>
              <div>
                <Link to="/promotions" className="underline cursor-pointer">
                  Coupons & Special Offers
                </Link>
              </div>
              <div>
                <Link to="/" className="underline cursor-pointer">
                  Pricing & Estimates
                </Link>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        disableGutters={true}
        sx={{
          boxShadow:
            "0px 2px 0px -1px rgba(0, 0, 0, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            backgroundColor: "var(--gray-color)",
            color: "white",
            "&:hover": {
              borderTop: "1px solid var(--secondary-color)", // Change the top border on hover
              borderBottom: "1px solid var(--secondary-color)", // Change the bottom border on hover
            },
          }}
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              fontFamily: "Roboto Flex Variable",
              fontSize: "12px",
            }}
          >
            ABOUT US
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "var(--gray-color)",
            color: "white",
            paddingY: 0,
          }}
        >
          <div className="text-xs font-['Roboto_Flex_Variable'] text-gray-200 pl-2 space-y-0">
            <div className="py-3 space-y-2">
              <p class="underline cursor-pointer">About Capital Mech</p>
              <p class="underline cursor-pointer">
                Children Fountation Project
              </p>
              <p class="underline cursor-pointer">Email Sign Up</p>
              <p class="underline cursor-pointer">Contact Us</p>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
