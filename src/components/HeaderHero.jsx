import React from "react";

function HeaderHero({ src, title }) {
  return (
    <div className="relative w-full min-h-[485px]">
      <img src={src} className="absolute  w-full h-full object-cover" />
      <div className="absolute flex items-center z-[4] max-w-[1400px] h-full top-0 left-0 right-0 bottom-0 mx-auto mt-8 lg:mt-4">
        <h1 className="text-4xl px-2 text-white font-semibold lg:text-6xl min-[1400px]:px-0">
          {title}
          <div className="mt-2 rounded-full py-1 w-1/3 bg-white lg:py-1.5"></div>
        </h1>
      </div>

      <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-black to-transparent opacity-90"></div>
    </div>
  );
}

export default HeaderHero;
