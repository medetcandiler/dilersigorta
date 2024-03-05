import { FC } from "react";
import Link from "next/link";
import { IDesktopNavLinkChild } from "../DesktopNavLinkChild/interface";
import Arrow from "../Arrow";

const MobileNavLinkChild: FC<IDesktopNavLinkChild> = ({ desktopNavChild, isClicked }) => {
  return (
    <div
      className={` bg-[#fff] w-auto py-3 transition duration-300 whitespace-nowrap
     ${isClicked ? 'flex' : 'hidden'} flex-col space-y-3 pl-4 `}
    >
      {desktopNavChild?.map((link) => (
        <Link
          key={link}
          href={`/urunler/${link.toLocaleLowerCase()}`}
          className={`child py-1 group/second nav-link hover:text-[#0E7AB3] text-sm `}
        >
          <span className="child">{link}</span>
          <Arrow color="black" type="right" height={15} width={12} isChildArrow={true} />
        </Link>
      ))}
    </div>
  );
};

export default MobileNavLinkChild;
