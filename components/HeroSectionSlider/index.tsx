import { FC } from "react";
import { IHeroSectionSlider } from "./interface";

const HeroSectionSlider: FC<IHeroSectionSlider> = ({ content, isVisible }) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center pb-32 w-1/2 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-100px]"
      }`}
    >
      <div className="mt-40 text-6xl font-extrabold tracking-wide text-center text-white leading-[80px] w-[695px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
        {content.title}
      </div>
      <div className="mt-10 text-xl font-medium tracking-wide leading-8 text-center text-white max-md:max-w-full">
        {content.description}
      </div>
      <div className="flex gap-2.5 items-stretch mt-10 text-sm font-bold tracking-wide leading-5 text-center text-white whitespace-nowrap">
        <div className="grow justify-center items-stretch px-9 py-4 bg-sky-500 rounded-[37px] max-md:px-5">
          Teklif Alın
        </div>
        <div className="grow justify-center items-stretch px-9 py-4 border border-solid rounded-[37px] max-md:px-5">
          Daha Fazla Bilgi
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSlider;
