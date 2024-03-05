import React, { FC } from "react";
import { IPartnerCard } from "./interface";
import Image from "next/image";

const PartnerCard: FC<IPartnerCard> = ({
  imageSrc,
  alt,
  size,
  phoneNumber,
}) => {
  const formattedPhoneNumber = phoneNumber.substring(4, phoneNumber.length);
  return (
    <div className="flip-card flex justify-center h-32 w-60 relative cursor-pointer overflow-hidden md:h-40 rounded-lg shadow-xl">
      <div className="flip-card-inner">
        <div className="flip-card-front flex justify-center items-center px-5 bg-[#fff] rounded-xl">
          <Image src={imageSrc} width={size} height={size} alt={alt} />
        </div>

        <div className="flip-card-back bg-[#0BA5E9] flex flex-col items-center justify-center gap-2 md:gap-2 text-white  rounded-xl ">
          <Image src={imageSrc} width={size / 2} height={size / 2} alt={alt} />
          <div className="flex gap-1 p-2 rounded-lg transition duration-300 hover:scale-105 hover:bg-[#0877c0] md:gap-2.5  ">
            <Image
              src="/icons/bluePhone.svg"
              alt="phone"
              className="my-auto w-[18px] h-[18px] md:w-[24px] md:h-[24px] "
              width={24}
              height={24}
            />
            <a
              href={`tel:${phoneNumber}`}
              className="text-sm whitespace-nowrap"
            >
              {formattedPhoneNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
