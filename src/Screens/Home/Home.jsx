import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import { Carousel } from "react-responsive-carousel";
import CarouseComponent from "../../Components/Corousel/CorouselComponent";

const Home = () => {
  return (
    <>
      <div className="HomeScreen">
        <Navbar />
        <CarouseComponent/>
        <Products />
      </div>
    </>
  );
};

export default Home;
