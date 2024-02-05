import { FC } from "react";
import { IAboutCard } from "./interface";
import Image from "next/image";

const AboutCard: FC<IAboutCard> = ({ title, content, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center px-5 gap-5 md:flex-row md:items-center md:gap-20">
      <div
        className={`flex justify-center ${
          title === "Etkin Çözümler" ? "order-first md:order-last" : ""
        } md:w-1/2`}
      >
        <Image
          className="rounded-xl shadow"
          src={imageSrc}
          width={500}
          height={500}
          alt={title}
          priority
        />
      </div>

      <div className="flex flex-col gap-2 md:w-1/2 md:gap-4">
        <h3 className="text-3xl font-medium text-center md:text-start">
          {title}
        </h3>
        <p className="text-sm font-medium tracking-wide text-center md:text-md md:text-start">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
