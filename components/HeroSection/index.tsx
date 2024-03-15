"use client";
import { dataSlice } from "./data";
import { useState } from "react";
import HeroSectionSlider from "../HeroSectionSlider";
import HeroSectionSliderButtons from "../HeroSectionSliderButtons";
import Image from "next/image";

const HeroSection = () => {
  const [currentSlice, setCurrentSlice] = useState(0);
  const backgroundImageStyle = {
    background: `radial-gradient(rgba(0, 128, 128, 0.3), rgba(0, 123, 255, 0.3))`,
  };

  return (
    <section
      style={backgroundImageStyle}
      className={`relative bg-cover bg-center h-screen overflow-hidden pt-[70px]`}
    >
      
      <Image
        src={dataSlice[currentSlice].bg}
        fill={true}
        alt="diler sigorta welcoming images"
        priority
        className="-z-10 object-cover"
      />

      <div className="absolute bottom-1/2 translate-y-1/2 px-1 sm:px-3 flex w-full justify-between md:pt-[70px]">
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
