import Image from "next/image";
import { FC } from "react";
import { IContactSectionAdressProps } from "./interface";

const ContactSectionAdress: FC<IContactSectionAdressProps> = ({ address }) => {
  return (
    <div className="subTitleStyle text-neutral-500 pb-0 flex items-center justify-center">
      <p className="sm:flex sm:items-center sm:relative sm:pl-10 w-4/5 sm:w-full ">
        <Image
          className="hidden absolute top-1 left-0 md:top-1/2 md:-translate-y-1/2 sm:block"
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
