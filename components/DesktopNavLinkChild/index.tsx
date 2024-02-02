import { FC } from "react";
import { IDesktopNavLinkChild } from "./interface";
import Link from "next/link";
import Arrow from "../Arrow";

const DesktopNavLinkChild: FC<IDesktopNavLinkChild> = ({ desktopNavChild }) => {
  return (
    <div
      className={`absolute hidden bg-[#fff] top-6 px-6 pt-7 pb-3 right-1/2 w-auto translate-x-1/2 transition duration-300 whitespace-nowrap
       group-hover:flex flex-col space-y-4 `}
    >
      {desktopNavChild?.map((link) => (
        <Link
          key={link}
          href="/"
          className={`group/edit nav-link hover:text-[#0E7AB3] text-sm `}
        >
          <span>{link}</span>
          <Arrow color="black" type="right" height={14} width={12} />
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavLinkChild;
