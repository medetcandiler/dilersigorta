import { FC } from "react";
import { IAboutCard } from "./interface";
import Image from "next/image";

const AboutCard: FC<IAboutCard> = ({ title, content, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center px-5 gap-5 md:flex-row md:items-center md:gap-10 ">
      <div
        className={`flex justify-center ${
          title === "Etkin Çözümler" ? "order-first md:order-last" : ""
        } md:w-1/2`}
      >
        <Image
          className="rounded-xl shadow  object-cover w-[270px] h-[200px] md:h-[350px] md:w-[400px]"
          src={imageSrc}
          width={450}
          height={450}
          alt={title}
          priority
        />
      </div>

      <div className="flex flex-col gap-2 md:w-1/2 md:gap-4 sm:px-5 md:px-0 lg:px-10 ">
        <h3 className="contentHeader text-center md:text-start">{title}</h3>
        <p className="contentText text-center md:text-md md:text-start">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
