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
      className={`flex flex-col items-center p-10 w-full drop-shadow-md flex-grow bg-white md:items-start`}
    >
      <Image
        alt={title}
        src={imageSrc}
        width={40}
        height={40}
        className="object-center"
      />
      <h1
        className={`contentHeader text-2xl font-bold text-center -mb-3 mt-2 md:text-start`}
      >
        Diler Sigorta ile
      </h1>
      <h3
        className={`contentHeader mt-2.5 text-2xl font-bold tracking-normal text-center md:text-start xl:whitespace-nowrap`}
      >
        {title}
      </h3>
      <p
        className={`contentText mt-2.5 text-sm font-medium tracking-wide text-center md:text-start`}
      >
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
