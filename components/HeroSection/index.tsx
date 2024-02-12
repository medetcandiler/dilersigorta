"use client";
import { dataSlice } from "./data";
import { useState } from "react";
import HeroSectionSlider from "../HeroSectionSlider";
import HeroSectionSliderButtons from "../HeroSectionSliderButtons";

const HeroSection = () => {
  const [currentSlice, setCurrentSlice] = useState(0);

  const backgroundImageStyle = {
    backgroundImage: `radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('${dataSlice[currentSlice].bg}')`,
  };

  return (
    <section
      style={backgroundImageStyle}
      className={`bg-cover bg-center h-screen relative overflow-hidden pt-[70px]`}
    >
      <div className="absolute bottom-1/2 translate-y-1/2 px-1 sm:px-3 flex w-full justify-between">
        <HeroSectionSliderButtons
          dataSlice={dataSlice}
          currentSlice={currentSlice}
          setCurrentSlice={setCurrentSlice}
        />
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
