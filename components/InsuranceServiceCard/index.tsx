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
        alt={title}
        src={imageSrc}
        width={40}
        height={40}
        className="object-center "
      />
      <h3 className="mt-2.5 text-xl font-bold tracking-normal text-slate-800 text-center">
        {title}
      </h3>
      <p className="mt-2.5 text-sm font-medium tracking-wide text-neutral-500 text-center">
        {description}
      </p>
    </div>
  );
};

export default InsuranceServiceCard;
