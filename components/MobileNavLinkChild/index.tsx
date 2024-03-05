import { FC } from "react";
import Link from "next/link";
import { IMobileNavLinkChild } from "./interface";

const MobileNavLinkChild: FC<IMobileNavLinkChild> = ({
  desktopNavChild,
  isClicked,
  onclick,
  setIsClicked,
}) => {
  const handleClose = () => {
    onclick();
    setIsClicked((prev) => !prev);
  };
  return (
    <div
      className={` bg-[#fff] w-auto py-3 transition duration-300 whitespace-nowrap
     ${isClicked ? "flex" : "hidden"} flex-col space-y-3 pl-4 `}
    >
      {desktopNavChild?.map((link) => (
        <Link
          key={link}
          href={`/urunler/${link.toLocaleLowerCase()}`}
          onClick={() => handleClose()}
          className={`child py-1 group/second nav-link hover:text-[#0E7AB3] text-sm `}
        >
          <span className="child">{link}</span>
        </Link>
      ))}
    </div>
  );
};

export default MobileNavLinkChild;
