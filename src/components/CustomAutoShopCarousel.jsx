import React from "react";
import Carousel from "react-material-ui-carousel";

function CustomAutoShopCarousel() {
  var items = [
    {
      name: "Mercedez Benz Car",
      src: "/capital-mech/images/custom auto shop/carousel/benz.jpg",
    },
    {
      name: "Mercedez Benz SUV",
      src: "/capital-mech/images/custom auto shop/carousel/benz_jeep.jpg",
    },
    {
      name: "Classic Red Car",
      src: "/capital-mech/images/custom auto shop/carousel/classic_red_car.jpg",
    },
    {
      name: "Black Ferrari",
      src: "/capital-mech/images/custom auto shop/carousel/ferrari_black.jpg",
    },
    {
      name: "Ferrari Red Interior",
      src: "/capital-mech/images/custom auto shop/carousel/ferrari_fabric.jpg",
    },
    {
      name: "Orange Lambo",
      src: "/capital-mech/images/custom auto shop/carousel/garage_cars.jpg",
    },
    {
      name: "Green Lambo",
      src: "/capital-mech/images/custom auto shop/carousel/green_lambo.jpg",
    },
    {
      name: "McLaren",
      src: "/capital-mech/images/custom auto shop/carousel/MCLAREN.jpg",
    },
    {
      name: "Orange Corvette",
      src: "/capital-mech/images/custom auto shop/carousel/orange_corvette.jpg",
    },
    {
      name: "Honda Prelude",
      src: "/capital-mech/images/custom auto shop/carousel/prelude.jpg",
    },
    {
      name: "Classic Red Aston",
      src: "/capital-mech/images/custom auto shop/carousel/red_classic.jpg",
    },
    {
      name: "Purple BMW",
      src: "/capital-mech/images/custom auto shop/carousel/spider.jpg",
    },
    {
      name: "Classic Sunfire",
      src: "/capital-mech/images/custom auto shop/carousel/sunfire.jpg",
    },
    {
      name: "Custom Toyota",
      src: "/capital-mech/images/custom auto shop/carousel/toyota_white.jpg",
    },
  ];

  return (
    <Carousel
      className="mb-14 aspect-[4/3] lg:aspect-[16/9]"
      autoPlay={true}
      indicators={true}
    >
      {items.map((item, i) => (
        <div className="aspect-[4/3] lg:aspect-[16/9]">
          <img key={i} src={item.src} className="w-full h-full object-cover" />
        </div>
      ))}
    </Carousel>
  );
}

export default CustomAutoShopCarousel;
