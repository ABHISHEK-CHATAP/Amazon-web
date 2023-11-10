import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouseComponent = () => {
  return (
    <>
      <Carousel autoPlay={true} interval={5500} dynamicHeight={100} infiniteLoop={true}>
        <div>
          <img src="https://m.media-amazon.com/images/G/31/img23/Jupiter23/Laptops_Phase-3/Laptop_End_Header_Mob._SX1242_QL85_.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/G/31/img23/Jupiter23/Laptops/Mainstream1_1400x800._SX414_QL85_.jpg" />
        </div>
        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/articles/Artboard_1_1000x.png?v=1652873769" />
        </div>
        <div>
          <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/10/home-entertainment-deals-amazon.png" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/G/31/img23/Jupiter23/Laptops_Updated/Acer_Aspire-5_1400X800._SX414_QL85_.jpg" />
        </div>
        <div>
          <img src="https://www.boat-lifestyle.com/cdn/shop/articles/6_1000x.jpg?v=1695815684" />
        </div>
      </Carousel>
    </>
  );
};

export default CarouseComponent;
