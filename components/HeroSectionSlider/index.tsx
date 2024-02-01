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
      <div className="text-3xl font-extrabold text-[#fff] md:text-6xl">
        {content.title}
      </div>
      <div className="text-xl font-medium text-[#fff] text-center">
        {content.description}
      </div>
      <div className="flex gap-2.5 items-center text-sm font-bold tracking-wide leading-5 text-center text-[#fff] whitespace-nowrap">
        <div className="grow justify-center items-stretch px-9 py-4 bg-sky-500 rounded-full">
          Teklif Alın
        </div>
        <div className="grow justify-center items-stretch px-9 py-4 border border-solid rounded-full">
          Daha Fazla Bilgi
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSlider;
