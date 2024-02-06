import { FC } from "react";
import { IHeroSectionSlider } from "./interface";

const HeroSectionSlider: FC<IHeroSectionSlider> = ({ content, isVisible }) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center space-y-6 w-2/3 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-150px]"
      } md:w-1/2`}
    >
      <h1 className="titleStyle text-[#fff]">
        {content.title}
      </h1>
      <p className="text-lg font-medium text-[#fff] text-center md:text-xl">
        {content.description}
      </p>
      <div className="flex gap-2.5 items-center text-sm font-bold tracking-wide leading-5 text-center text-[#fff] whitespace-nowrap">
        <button className="skyButton">
          Teklif Alın
        </button>
        <button className="outlineButton">
          Daha Fazla Bilgi
        </button>
      </div>
    </div>
  );
};

export default HeroSectionSlider;
