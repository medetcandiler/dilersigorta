"use client";
import { dataSlice } from "./data";
import { useState, useEffect } from "react";
import HeroSectionSlider from "../HeroSectionSlider";
import Arrow from "../Arrow";

const HeroSection = () => {
  const [currentSlice, setCurrentSlice] = useState(0);

  useEffect(() => {
    const intervalNext = setInterval(() => {
      handleNextSlice();
    }, 3500);

    return () => {
      clearInterval(intervalNext);
    };
  }, [currentSlice]);

  const handleNextSlice = () => {
    setCurrentSlice((prev) => (prev + 1) % dataSlice.length);
  };

  const handlePrevSlice = () => {
    setCurrentSlice((prev) => (prev - 1 + dataSlice.length) % dataSlice.length);
  };

  const backgroundImageStyle = {
    backgroundImage: `radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('${dataSlice[currentSlice].bg}')`,
  };

  return (
    <section
      style={backgroundImageStyle}
      className={`bg-cover bg-center h-screen relative overflow-hidden pt-[70px]`}
    >
      <div className="absolute bottom-1/2 translate-y-1/2 px-1 sm:px-3 flex w-full justify-between md:bottom-12 md:px-12  ">
        <button
          onClick={handlePrevSlice}
          className="flex justify-between items-center px-3 py-3 bg-transparentSky rounded-md cursor-pointer"
        >
          <Arrow
            color="white"
            type="left"
            width={15}
            height={15}
            isChildArrow={false}
          />
        </button>
        <button
          onClick={handleNextSlice}
          className="flex justify-between items-center px-3 py-3 bg-transparentSky rounded-md cursor-pointer"
        >
          <Arrow
            color="white"
            type="right"
            width={15}
            height={15}
            isChildArrow={false}
          />
        </button>
      </div>

      <div className="flex justify-center items-center h-full">
        {dataSlice.map((data, index) => (
          <HeroSectionSlider
            key={index}
            content={data}
            isVisible={index === currentSlice}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
