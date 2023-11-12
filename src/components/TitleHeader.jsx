import React from "react";

function TitleHeader({ title, styling }) {
  return (
    <div className={`${styling}`}>
      <h1 className="groy text-3xl tracking-tighter font-bold text-center">
        {title}
      </h1>
      <div className="h-2 my-3 w-12 orange-bg mx-auto rounded-full"></div>
    </div>
  );
}

export default TitleHeader;
