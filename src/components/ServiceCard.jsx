import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ src, icon, title, para }) {
  return (
    <div className="w-full shadow-md pb-6">
      <img className="w-full object-cover aspect-[3/2]" src={src} />
      <div className="relative px-2 space-y-3 pt-6">
        <div className="flex items-center space-x-2.5">
          {icon}
          <h2 className="tracking-tighter text-lg  font-semibold groy xxs:text-[28px]">
            {title}
          </h2>
        </div>
        <p className="text-xs roboto-font">{para}</p>
        <Link to={`/repair-services/${title.replace(/\s+/g, "-")}`}>
          <h3 className="group groy pt-4 font-medium cursor-pointer underline-offset-8 hover:underline">
            VIEW MORE
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
