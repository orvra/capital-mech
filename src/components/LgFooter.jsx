import React from "react";

function LgFooter() {
  return (
    <div className="max-w-[1400px] mx-auto px-2 pt-10 pb-10 text-white min-[1400px]:px-0">
      <div className="grid grid-cols-6 gap-x-6 gap-y-4">
        <div className="col-span-4 border-b">
          <h2 className="font-semibold text-[15px]">AUTO SERVICES</h2>
        </div>
        <div className="col-span-1 pb-3 border-b">
          <h2 className="font-semibold text-[15px]">MY STORE</h2>
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
          <p class="underline cursor-pointer">Oil Change</p>
          <p class="underline cursor-pointer">Brake Service</p>
          <p class="underline cursor-pointer">Suspension Repair</p>
          <p class="underline cursor-pointer">Maintenance Packages</p>
          <p class="underline cursor-pointer">Tire Services</p>
          <p class="underline cursor-pointer">Wheel Alignment</p>
          <p class="underline cursor-pointer">Vehicle Inspections</p>
          <p class="underline cursor-pointer">Electric Vehicle Support</p>
        </div>
        <div className="col-span-1 row-start-3 text-[12px] space-y-2">
          <p class="underline cursor-pointer">Exhaust System Care</p>
          <p class="underline cursor-pointer">Diagnostic Services</p>
          <p class="underline cursor-pointer">Lighting & Accessories</p>
          <p class="underline cursor-pointer">Cooling System Maintenance</p>
          <p class="underline cursor-pointer">HVAC Service</p>
          <p class="underline cursor-pointer">Battery Care</p>
          <p class="underline cursor-pointer">Engine Services</p>
        </div>
        <div className="col-span-1 row-start-3 text-[12px] space-y-2">
          <p class="underline cursor-pointer">Custom Upgrades</p>
          <p class="underline cursor-pointer">Performance Tuning</p>
          <p class="underline cursor-pointer">Custom Fabrication</p>
          <p class="underline cursor-pointer">Bodywork & Painting</p>
        </div>
        <div className="col-span-1 row-start-3 text-[12px] space-y-2">
          <p class="underline cursor-pointer">Premium Exterior Wash</p>
          <p class="underline cursor-pointer">Interior Detailing</p>
          <p class="underline cursor-pointer">Hand Wax & Buff</p>
          <p class="underline cursor-pointer">Wheel and Rim Cleaning</p>
          <p class="underline cursor-pointer">Paint Protection</p>
        </div>
        <div className="col-span-1 row-start-3 col-start-5 text-[12px] space-y-2 -translate-y-10">
          <p class="underline cursor-pointer">Find Your Store</p>
          <p class="underline cursor-pointer">Book Your Appointment</p>
          <p class="underline cursor-pointer">Coupons & Special Offers</p>
          <p class="underline cursor-pointer">Pricing & Estimates</p>
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
