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
    }, 5000);

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
    backgroundImage: `radial-gradient(rgba(0, 128, 128, 0.7), rgba(0, 123, 255, 0.1)), url('${dataSlice[currentSlice].bg}')`,
  };

  return (
    <section
      style={backgroundImageStyle}
      className={`bg-cover bg-center h-screen relative overflow-hidden pt-[80px]`}
    >
      <div className="absolute bottom-12 flex w-full justify-between px-12">
        <div
          onClick={handlePrevSlice}
          className="flex justify-between items-center px-4 py-3 bg-sky-500 rounded-md cursor-pointer"
        >
          <Arrow color="white" type="left" width={15} height={15} />
        </div>
        <div
          onClick={handleNextSlice}
          className="flex justify-between items-center px-4 py-3 bg-sky-500 rounded-md cursor-pointer"
        >
          <Arrow color="white" type="right" width={15} height={15} />
        </div>
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
