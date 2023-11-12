import React from "react";
import { MdCarRepair } from "react-icons/md";
import { IoIosCar } from "react-icons/io";
import { RiCarWashingFill } from "react-icons/ri";

function AutoServices() {
  return (
    <div>
      <div className="flex flex-col w-full ivory-bg mt-9 space-y-8 lg:h-[250px] xl:h-[300px] overflow-y-hidden mb-10 lg:flex-row-reverse lg:space-y-0">
        <div className="px-4 space-y-4">
          <div className="flex  items-center space-x-4 pt-8 pb-4">
            <div className="p-1 gray-bg rounded-md">
              <MdCarRepair className="text-4xl white-yellow gray-bg" />
            </div>
            <h2 className="tracking-tighter text-2xl font-semibold groy">
              Vehicle Repair & Maintenance
            </h2>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quo
            dolorem rem a hic nihil voluptatem molestias repellendus sequi
            necessitatibus, dicta non omnis tenetur obcaecati sit aliquid!
            Exercitationem perspiciatis culpa iusto placeat pariatur reiciendis
            veritatis dolorum assumenda temporibus provident at vel porro
            laboriosam reprehenderit ipsam, enim obcaecati dolores fugiat animi!
          </p>
        </div>

        <img
          src="/images/hero/lift.jpg"
          className="w-full object-cover lg:w-1/3"
        />
      </div>

      <div className="flex flex-col w-full ivory-bg mt-9 space-y-8 lg:h-[250px] xl:h-[300px] overflow-y-hidden mb-10 lg:flex-row lg:space-y-0">
        <div className="px-4 space-y-4">
          <div className="flex  items-center space-x-4 pt-8 pb-4">
            <div className="p-1.5 gray-bg rounded-md">
              <IoIosCar className="text-3xl white-yellow gray-bg" />
            </div>
            <h2 className="tracking-tighter text-2xl font-semibold groy">
              Custom Auto Shop
            </h2>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quo
            dolorem rem a hic nihil voluptatem molestias repellendus sequi
            necessitatibus, dicta non omnis tenetur obcaecati sit aliquid!
            Exercitationem perspiciatis culpa iusto placeat pariatur reiciendis
            veritatis dolorum assumenda temporibus provident at vel porro
            laboriosam reprehenderit ipsam, enim obcaecati dolores fugiat animi!
          </p>
        </div>

        <img
          src="/images/hero/prelude.jpg"
          className="w-full object-cover h-full lg:w-1/3"
        />
      </div>

      <div className="flex flex-col w-full ivory-bg mt-9 space-y-8 lg:h-[250px] xl:h-[300px] overflow-y-hidden mb-10 lg:flex-row-reverse lg:space-y-0">
        <div className="px-4 space-y-4">
          <div className="flex  items-center space-x-4 pt-8 pb-4">
            <div className="p-1.5 gray-bg rounded-md">
              <RiCarWashingFill className="text-3xl white-yellow gray-bg" />
            </div>
            <h2 className="tracking-tighter text-2xl font-semibold groy">
              Luxury Car Wash
            </h2>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quo
            dolorem rem a hic nihil voluptatem molestias repellendus sequi
            necessitatibus, dicta non omnis tenetur obcaecati sit aliquid!
            Exercitationem perspiciatis culpa iusto placeat pariatur reiciendis
            veritatis dolorum assumenda temporibus provident at vel porro
            laboriosam reprehenderit ipsam, enim obcaecati dolores fugiat animi!
          </p>
        </div>

        <img
          src="/images/hero/polish.jpg"
          className="w-full object-cover h-full lg:w-1/3"
        />
      </div>
    </div>
  );
}

export default AutoServices;
