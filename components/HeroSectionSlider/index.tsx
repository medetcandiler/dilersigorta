import { FC } from "react";
import { IHeroSectionSlider } from "./interface";

const HeroSectionSlider: FC<IHeroSectionSlider> = ({ content, isVisible }) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center space-y-6 w-2/3 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-100px]"
      } md:w-1/2`}
    >
      <h1 className="text-3xl font-extrabold text-[#fff] md:text-6xl text-center">
        {content.title}
      </h1>
      <p className="text-lg font-medium text-[#fff] text-center md:text-xl">
        {content.description}
      </p>
      <div className="flex gap-2.5 items-center text-sm font-bold tracking-wide leading-5 text-center text-[#fff] whitespace-nowrap">
        <button className="grow justify-center items-stretch px-4 py-3 md:px-9 md:py-4 border border-sky-500 bg-sky-500 rounded-full">
          Teklif Alın
        </button>
        <button className="grow justify-center items-stretch px-4 py-3 md:px-9 md:py-4 border border-solid rounded-full">
          Daha Fazla Bilgi
        </button>
      </div>
    </div>
  );
};

export default HeroSectionSlider;
