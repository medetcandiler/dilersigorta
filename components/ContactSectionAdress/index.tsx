import Image from "next/image";
import { FC } from "react";
import { IContactSectionAdressProps } from "./interface";

const ContactSectionAdress: FC<IContactSectionAdressProps> = ({ address }) => {
  return (
    <div className="subTitleStyle text-neutral-500 pb-0">
      <p className="flex items-center relative pl-3 sm:pl-10">
        <Image
          className="absolute top-1 left-0 md:top-1/2 md:-translate-y-1/2"
          src="/icons/location.svg"
          height={16}
          width={16}
          alt="location logo"
        />
        {address}
      </p>
    </div>
  );
};

export default ContactSectionAdress;
