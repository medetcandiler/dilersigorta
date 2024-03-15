// @eslint-disable
import { FC, useEffect } from "react";
import Arrow from "../Arrow";
import { IHeroSectionSliderButtons } from "./interface";

const HeroSectionSliderButtons: FC<IHeroSectionSliderButtons> = ({
  currentSlice,
  setCurrentSlice,
  dataSlice,
}) => {
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
  return (
    <>
      <button
        onClick={handlePrevSlice}
        className="flex justify-between items-center px-3 py-3 bg-transparentSky rounded-md cursor-pointer transition duration-200 hover:scale-110"
      >
        <Arrow
          color="white"
          type="left"
          width={13}
          height={13}
          isChildArrow={false}
        />
      </button>
      <button
        onClick={handleNextSlice}
        className="flex justify-between items-center px-3 py-3 bg-transparentSky rounded-md cursor-pointer transition duration-200 hover:scale-110"
      >
        <Arrow
          color="white"
          type="right"
          width={13}
          height={13}
          isChildArrow={false}
        />
      </button>
    </>
  );
};

export default HeroSectionSliderButtons;
