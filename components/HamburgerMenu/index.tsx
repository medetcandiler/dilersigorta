'use client'
import { FC } from "react";
import { useState } from "react";
import MobileNav from "../MobileNav";

const HamburgerMenu: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleHamNavClick = () => {
    setIsClicked(prev => !prev);
  }
  return (
    <>
      <div
        className={`inline-block cursor-pointer transition duration-300 group md:hidden ${isClicked ? 'change' : ''}`}
        onClick={handleHamNavClick}
      >
        <div className={`bar1 group-hover:bg-slate-600`}></div>
        <div className={`bar2 group-hover:bg-slate-600`}></div>
        <div className={`bar3 group-hover:bg-slate-600`}></div>
        <MobileNav isClicked={isClicked} />
      </div>
    </>
  );
};

export default HamburgerMenu;
