import { FC } from "react";
import Link from "next/link";
import { IDesktopNavLinkChild } from "../DesktopNavLinkChild/interface";
import Arrow from "../Arrow";

const MobileNavLinkChild: FC<IDesktopNavLinkChild> = ({ desktopNavChild }) => {
  return (
    <div
      className={`hidden bg-[#fff] w-auto py-3 transition duration-300 whitespace-nowrap
     group-hover/edit:flex flex-col space-y-3 pl-4 `}
    >
      {desktopNavChild?.map((link) => (
        <Link
          key={link}
          href="/"
          className={`group/edit nav-link hover:text-gray-400 text-sm `}
        >
          <span>{link}</span>
          <Arrow color="black" type="right" height={14} width={12} />
        </Link>
      ))}
    </div>
  );
};

export default MobileNavLinkChild;
