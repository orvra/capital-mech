import React from "react";
import Coupon from "../components/Coupon";

function Promotions() {
  return (
    <div className="max-w-[1400px] mx-auto px-2 xxs:px-4 min-[1400px]:px-0">
      <div className="w-full flex flex-col items-center mb-10 lg:gap-x-4 lg:grid lg:grid-cols-2">
        <Coupon
          upTo={true}
          off={true}
          amount={75}
          item={"WINTER TIRES"}
          para={
            "Discover Winter Tires Collection. Valid for pre-tax purchases, excluding dealer and special orders. Expires on December 31, 2023. Please present coupon at the time of service."
          }
        />
        <Coupon
          amount={"FREE"}
          item={"Premium Car Wash"}
          para={
            "Experience a refreshing car wash on us! No strings attached. This special offer is available for a limited time, so don't miss out. Remember to present this coupon to enjoy your complimentary car wash. Offer expires soon."
          }
        />
        <Coupon
          off={true}
          amount={20}
          item="Any Oil Change"
          para="Offer expires December 31, 2023. Not valid with other promotions or prior services. Valid only at Capital Mech. Please present coupon at the time of service."
        />
        <Coupon
          off={true}
          amount={25}
          item="Luxury Interior Fragrance"
          para="Receive a Complimentary Luxury Interior Fragrance with Any Bodywork & Painting Service. Offer expires December 31, 2023. Not valid with other promotions or prior services. Valid only at Capital Mech."
        />
        <Coupon
          off={true}
          upTo={true}
          amount={50}
          item="Paint Protection Package"
          para="Offer expires December 31, 2023. Not valid with other promotions or prior services. Valid only at Capital Mech. Please present coupon at the time of service. Additional fees may apply for certain vehicles or services. See store for details."
        />
        <Coupon
          off={true}
          amount={25}
          item="Vehicle Inspection Service"
          para="Offer expires December 31, 2023. Not valid with other promotions or prior services. Valid only at Capital Mech. Please present coupon at the time of service. Additional fees may apply for certain vehicles or services. See store for details."
        />
      </div>
    </div>
  );
}

export default Promotions;
