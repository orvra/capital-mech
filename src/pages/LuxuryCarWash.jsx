import React from "react";
import HeaderHero from "../components/HeaderHero";
import AutoServiceCard from "../components/AutoServiceCard";
import { MdCarRepair } from "react-icons/md";

function LuxuryCarWash() {
  return (
    <div>
      <HeaderHero
        src="/images/hero/bentley_car_wash.jpg"
        title="LUXURY CAR WASH"
      />
      <div className="max-w-[1400px] mx-auto xxs:px-4 min-[1400px]:px-0">
        <AutoServiceCard
          reverse={true}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Exterior Car Wash"
          para="Treat your luxury car to a rejuvenating experience with our meticulous exterior car wash service. Our skilled team pays attention to every detail, ensuring your vehicle's exterior shines like new. We use premium products and techniques to remove dirt, grime, and contaminants, leaving your car with a flawless, showroom-worthy finish."
          src="/images/luxury car wash/exterior_wash.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={false}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Interior Detailing"
          para="Indulge in the luxury of a pristine interior with our comprehensive interior detailing service. We go beyond the surface, meticulously cleaning, sanitizing, and restoring every nook and cranny of your car's interior. From upholstery and carpets to dashboard and leather seats, your car's interior will feel brand new."
          src="/images/luxury car wash/interior_detail.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={true}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Hand Wax & Buff"
          para="Experience the ultimate shine and protection for your luxury car's paint with our hand wax and buff service. Our skilled technicians apply high-quality wax and use precision buffing techniques to achieve a deep, glossy finish. The result is a paint surface that's not only stunning but also shielded from environmental elements."
          src="/images/luxury car wash/buff.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={false}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Wheel & Rim Cleaning"
          para="Elevate your luxury car's appearance with our wheel and rim cleaning service. We specialize in removing brake dust, road grime, and dirt from your wheels and rims, ensuring they gleam with brilliance. Our attention to detail extends to every spoke and rim, leaving your car's wheels looking stunning."
          src="/images/luxury car wash/rim_cleaning.jpg"
          button={false}
          buttonText="SEE MORE"
        />
        <AutoServiceCard
          reverse={true}
          icon={<MdCarRepair className="text-3xl white-yellow gray-bg" />}
          title="Paint Protection"
          para="Preserve your luxury car's immaculate finish with our paint protection service. We apply advanced protective coatings that act as a shield against the elements, safeguarding your car's paint from harsh UV rays, pollutants, and minor scratches. With our paint protection, your car's shine lasts longer."
          src="/images/luxury car wash/paint_protection.jpg"
          button={false}
          buttonText="SEE MORE"
        />
      </div>
    </div>
  );
}

export default LuxuryCarWash;
