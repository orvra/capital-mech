import React from "react";
import { Link } from "react-router-dom";

function LgFooter() {
  return (
    <div className="max-w-[1400px] mx-auto px-2 pt-10 pb-10 text-white min-[1400px]:px-0">
      <div className="grid grid-cols-6 gap-x-6 gap-y-4">
        <div className="col-span-4 border-b">
          <h2 className="font-semibold text-[15px]">AUTO SERVICES</h2>
        </div>
        <div className="col-span-1 pb-3 border-b">
          <h2 className="font-semibold text-[15px]">MY MECHANIC</h2>
        </div>
        <div className="col-span-1 border-b">
          <h2 className="font-semibold text-[15px]">ABOUT CAPITAL MECH</h2>
        </div>
        <div className="col-span-2 border-b">
          <h2 className="font-semibold text-[13px] orange">
            Vehicle Repair & Maintenance
          </h2>
        </div>
        <div className="col-span-1 pb-1 border-b">
          <h2 className="font-semibold text-[13px] orange">Custom Auto Shop</h2>
        </div>
        <div className="col-span-1 border-b">
          <h2 className="font-semibold text-[13px] orange">Luxury Car Wash</h2>
        </div>
        <div className="col-span-1 row-start-3 text-[12px] space-y-2">
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
        </div>
        <div className="block col-span-1 row-start-3 text-[12px] space-y-2">
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
        <div className="col-span-1 row-start-3 text-[12px] space-y-2">
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
        <div className="col-span-1 row-start-3 text-[12px] space-y-2">
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
        <div className="col-span-1 row-start-3 col-start-5 text-[12px] space-y-2 -translate-y-10">
          <div>
            <Link to="/locations" class="underline cursor-pointer">
              Find Your Mechanic
            </Link>
          </div>
          <div>
            <Link to="/book-appointment" className="underline cursor-pointer">
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
        <div className="col-span-1 row-start-3 col-start-6 text-[12px] space-y-2 -translate-y-10">
          <p class="underline cursor-pointer">About Capital Mech</p>
          <p class="underline cursor-pointer">Children Fountation Project</p>
          <p class="underline cursor-pointer">Email Sign Up</p>
          <p class="underline cursor-pointer">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default LgFooter;
