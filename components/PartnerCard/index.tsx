import React, { FC } from "react";
import { IPartnerCard } from "./interface";
import Image from "next/image";

const PartnerCard: FC<IPartnerCard> = ({ imageSrc, alt, size }) => {
  return (
    <div className="flex justify-center items-center transition duration-300 cursor-pointer bg-[#fff] py-10 shadow-2xl grayscale hover:grayscale-0 ">
      <Image src={imageSrc} width={size} height={size} alt={alt} />
    </div>
  );
};

export default PartnerCard;
