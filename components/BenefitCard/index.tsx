import { FC } from "react";
import { IBenefitCard } from "./interface";
import Image from "next/image";

const BenefitCard: FC<IBenefitCard> = ({
  imageSrc,
  title,
  description,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col items-center px-10 py-12 w-full shadow-2xl flex-grow ${
        bgColor ? 'bg-sky-500 text-white' : "bg-white"
      } md:items-start`}
    >
      <Image
        alt={title}
        src={imageSrc}
        width={40}
        height={40}
        className="object-center"
      />
      <h3 className="mt-2.5 text-2xl font-bold tracking-normal text-center md:text-start xl:whitespace-nowrap">
        {title}
      </h3>
      <p className="mt-2.5 text-sm font-medium tracking-wide text-center md:text-start">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
