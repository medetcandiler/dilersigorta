import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const ContactButton: FC = () => {
  return (
    <section className="flex flex-col">
      <div>
        <span className="text-md text-gray-700 md:text-xs">
          Destek için hazırız
        </span>
      </div>
      <Link className="flex items-center links-hover group " href="tel:+905304175231">
        <Image src="/icons/phone.svg" width={20} height={20} alt="phone icon" className="transition duration-300 group-hover:scale-110" />
        <span className="ml-2 ">(530) 417 52 31</span>
      </Link>
    </section>
  );
};

export default ContactButton;
