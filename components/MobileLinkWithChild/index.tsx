"use client";
import { FC, useState } from "react";
import Arrow from "../Arrow";
import MobileNavLinkChild from "../MobileNavLinkChild";
import { IMobileLinkWithChild } from "./interface";

const MobileLinkWithChild: FC<IMobileLinkWithChild> = ({ label, child }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const isChildLink = (e.target as HTMLElement).classList.contains("child");
    if (isChildLink) {
      e.preventDefault();
      return;
    }
    setIsClicked((prev) => !prev);
  };
  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`flex flex-col bg-[#fff] transition duration-300 group/edit px-10 text-xl border-b py-3 cursor-pointer`}
    >
      <div className="flex items-center justify-between">
        <span className="text-slate-800 group-hover/edit:text-[#0E7AB3]">{label}</span>
        <Arrow
          color="black"
          type="right"
          height={20}
          width={18}
          isChildArrow={false}
        />
      </div>
      <MobileNavLinkChild isClicked={isClicked} desktopNavChild={child} />
    </div>
  );
};

export default MobileLinkWithChild;
