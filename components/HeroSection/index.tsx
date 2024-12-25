"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroSectionSlider from "../HeroSectionSlider";
import HeroSectionSliderButtons from "../HeroSectionSliderButtons";
import { dataSlice } from "./data";

const HeroSection = () => {
  const [currentSlice, setCurrentSlice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  // Show popup 2 seconds after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const backgroundImageStyle = {
    background: `radial-gradient(rgba(0, 128, 128, 0.3), rgba(0, 123, 255, 0.3))`,
  };

  return (
    <section
      style={backgroundImageStyle}
      className={`relative bg-cover bg-center h-screen overflow-hidden pt-[70px]`}
    >
      <h1 className="hidden">Atalar Sigorta</h1>
      <h1 className="hidden">Kartal Sigorta</h1>
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

      {/* Popup Section */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="relative bg-white p-4 rounded-md shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute bg-[#fff] size-6 flex items-center justify-center rounded-full transition-all duration-300 top-6 right-6 hover:bg-[#f5f5f5] hover:size-7"
              onClick={() => setShowPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src="/images/bes.png" // Replace this with the correct path to your image
              width={600}
              height={600}
              alt="Bireysel Emeklilik Sistemi"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
