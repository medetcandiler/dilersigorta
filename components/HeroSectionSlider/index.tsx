import { FC } from "react";
import { IHeroSectionSlider } from "./interface";
import Link from "next/link";
import Image from "next/image";

const HeroSectionSlider: FC<IHeroSectionSlider> = ({ content, isVisible }) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center space-y-6 w-2/3 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-150px]"
      } md:w-2/5`}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/whitedilerlogo.png"
          alt="diler sigorta logo"
          width={80}
          height={80}
        />
        <h1 className="text-lg font-bold text-[#fff] -mb-6 -mt-3">
          Diler Sigorta
        </h1>
      </div>
      <h1 className="titleStyle text-[#fff]">{content.title}</h1>
      <p className="text-lg font-medium text-[#fff] text-center md:text-xl">
        {content.description}
      </p>
      <div className="flex gap-2.5 items-center text-sm font-bold tracking-wide leading-5 text-center text-[#fff] whitespace-nowrap">
        <Link href="/iletisim" className="skySqrButton">
          Teklif Alın
        </Link>
        <Link
          href={content.href}
          className="outlineButton hover:bg-[rgba(255, 255, 255, 0.5)]"
        >
          Daha Fazla Bilgi
        </Link>
      </div>
    </div>
  );
};

export default HeroSectionSlider;
