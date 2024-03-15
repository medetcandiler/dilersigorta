import { FC } from "react";
import { IInsuranceServiceCard } from "./interface";
import Image from "next/image";

const InsuranceServiceCard: FC<IInsuranceServiceCard> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center w-full flex-grow">
      <Image
        alt={`Diler sigorta ${title}`}
        src={imageSrc}
        width={40}
        height={40}
        className="object-center w-[40px] h-[40px]"
      />
      <h3 className="mt-2.5 contentHeader text-center">{title}</h3>
      <p className="mt-2.5 contentText text-center">{description}</p>
    </div>
  );
};

export default InsuranceServiceCard;
