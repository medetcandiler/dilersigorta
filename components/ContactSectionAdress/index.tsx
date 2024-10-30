import Image from "next/image";
import { FC } from "react";
import { IContactSectionAdressProps } from "./interface";
import Link from "next/link";

const ContactSectionAdress: FC<IContactSectionAdressProps> = ({
  address,
  linkToMap,
}) => {
  return (
    <Link
      target="_blank"
      href={`https://${linkToMap}`}
      className=" links-hover pb-0 flex items-center justify-center group"
    >
      <p className="flex links-hover font-medium tracking-wide text-neutral-500 text-md text-center items-center relative pl-5 w-full md:pl-8 ">
        <Image
          className=" absolute top-1 left-0 md:top-1/2 md:-translate-y-1/2 sm:block transition duration-300 group-hover:scale-125 "
          src="/icons/location.svg"
          height={16}
          width={16}
          alt="location logo"
        />
        {address}
      </p>
    </Link>
  );
};

export default ContactSectionAdress;
