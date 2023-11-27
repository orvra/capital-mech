import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function WelcomeHero() {
  var items = [
    {
      name: "Ottawa's first premium auto repair shop",
      description:
        "We take pride in our top notch auto repair services. We take in high end vehicles and classic cars and offer high-end customization.",
      src: "/capital-mech/images/hero/BMW.jpg",
      button: "Find your shop",
      opacity: 70,
    },
    {
      name: "Exceptional services for exceptional vehicles",
      description:
        "From routine oil changes to comprehensive auto repairs, we've got your vehicle covered",
      button: "View services",
      src: "/capital-mech/images/hero/garage_repairs.jpg",
      opacity: 20,
    },
    {
      name: "Luxury car wash",
      description:
        "Every vehicle serviced at our shop includes a complimentary car wash that leaves your car radiant",
      button: "Learn more",
      src: "/capital-mech/images/hero/bentley_car_wash.jpg",
      opacity: 70,
    },
    {
      name: "Classic car customization",
      description:
        "Revive your vintage ride with the expertise of our highly specialized team",
      button: "Discover more",
      src: "/capital-mech/images/hero/classic_reveal.jpg",
      opacity: 20,
    },
  ];

  return (
    <Carousel
      className="absolute z-[10] h-[500px] md:h-[800px]"
      autoPlay={true}
      indicators={true}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <div className="relative w-full h-[500px] overflow-y-hidden md:h-[800px]">
      <div className="absolute z-[3] h-full w-full">
        <div
          className={`absolute z-[2] h-full w-full bg-gradient-to-b from-black to-transparent`}
          style={{ opacity: item.opacity / 100 }}
        ></div>
        <img
          src={item.src}
          className="absolute z-[1] h-full w-full object-cover"
        />
      </div>
      <div className="z-[3] absolute h-full w-full">
        <div className="max-w-[1400px] mx-auto px-4 pt-20 space-y-6 md:px-8 lg:px-24 xl:px-4">
          <h1 className="text-white text-2xl font-bold sm:text-3xl md:text-4xl">
            {item.name}
          </h1>
          <p className="text-white font-semibold sm:text-lg">
            {item.description}
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow-md">
            {item.button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHero;
