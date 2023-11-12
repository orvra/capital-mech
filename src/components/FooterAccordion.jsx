import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
              <p class="underline cursor-pointer">Oil Change</p>
              <p class="underline cursor-pointer">Brake Service</p>
              <p class="underline cursor-pointer">Suspension Repair</p>
              <p class="underline cursor-pointer">Maintenance Packages</p>
              <p class="underline cursor-pointer">Tire Services</p>
              <p class="underline cursor-pointer">Wheel Alignment</p>
              <p class="underline cursor-pointer">Vehicle Inspections</p>
              <p class="underline cursor-pointer">Electric Vehicle Support</p>
              <p class="underline cursor-pointer">Exhaust System Care</p>
              <p class="underline cursor-pointer">Diagnostic Services</p>
              <p class="underline cursor-pointer">Lighting & Accessories</p>
              <p class="underline cursor-pointer">Cooling System Maintenance</p>
              <p class="underline cursor-pointer">HVAC Service</p>
              <p class="underline cursor-pointer">Battery Care</p>
              <p class="underline cursor-pointer">Engine Services</p>
            </div>
            <h4 className="font-medium">Custom Auto Shop</h4>
            <div className="pl-4 py-3 space-y-1">
              <p class="underline cursor-pointer">Custom Upgrades</p>
              <p class="underline cursor-pointer">Performance Tuning</p>
              <p class="underline cursor-pointer">Custom Fabrication</p>
              <p class="underline cursor-pointer">Bodywork & Painting</p>
            </div>
            <h4 className="font-medium">Luxury Car Wash</h4>
            <div className="pl-4 py-3 space-y-1">
              <p class="underline cursor-pointer">Premium Exterior Wash</p>
              <p class="underline cursor-pointer">Interior Detailing</p>
              <p class="underline cursor-pointer">Hand Wax & Buff</p>
              <p class="underline cursor-pointer">Wheel and Rim Cleaning</p>
              <p class="underline cursor-pointer">Paint Protection</p>
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
            SELECT STORE
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
              <p class="underline cursor-pointer">Find Your Store</p>
              <p class="underline cursor-pointer">Book Your Appointment</p>
              <p class="underline cursor-pointer">Coupons & Special Offers</p>
              <p class="underline cursor-pointer">Pricing & Estimates</p>
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
