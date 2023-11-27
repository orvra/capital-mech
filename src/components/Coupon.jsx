import React from "react";

function Coupon({ amount, upTo, off, item, para }) {
  return (
    <div className="relative w-full mt-10  font-['Roboto_Flex_Variable'] max-w-[700px]">
      <div className="relative w-full aspect-[2.3/1] gray-bg p-2 rounded-xl lg:aspect-[2.5/1]">
        <div className="w-full h-full border border-dashed rounded-xl py-3 px-3">
          <div className="w-full h-1/3 flex items-center border py-3 px-1 justify-around min-[450px]:h-1/2 ">
            <div className="flex space-x-1">
              {off && (
                <div className="text-right">
                  <h2 className="text-white text-sm min-[450px]:text-3xl font-semibold">
                    $
                  </h2>
                  {upTo && (
                    <h4 className="text-white text-[8px] min-[450px]:text-xs">
                      UP TO
                    </h4>
                  )}
                </div>
              )}
              <h1 className="text-white text-2xl  min-[450px]:text-4xl min-[600px]:text-5xl tracking-tighter font-semibold">
                {amount}
              </h1>
              {off && (
                <h2 className="text-white text-md  min-[450px]:text-2xl min-[600px]:text-3xl font-semibold">
                  OFF
                </h2>
              )}
            </div>
            <div className="border-l h-full py-1"></div>
            <div>
              <h1 className="text-white text-xs min-[350px]:text-sm min-[550px]:text-3xl lg:text-xl xl:text-2xl tracking-tighter font-semibold">
                {item.toUpperCase()}
              </h1>
            </div>
          </div>

          <div className="flex py-2 text-white text-[7px] space-x-3.5 items-center min-[325px]:text-[7px] min-[400px]:text-[9px] min-[400px]:h-1/2 min-[400px]:pt-9 min-[450px]:pt-4  min-[450px]:space-x-4 min-[450px]:text-[10px] min-[600px]:text-[xs] ">
            <p className="">{para}</p>
            <img
              src="capital-mech/images/logo/CAPITALMECH6.png"
              className="h-3 min-[400px]:h-5 min-[450px]:h-6 min-[600px]:h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
