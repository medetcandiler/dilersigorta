"use client";
import { FC } from "react";
import { useState } from "react";
import MobileNav from "../MobileNav";

const HamburgerMenu: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleHamNavClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <>
      <div
        className={`inline-block cursor-pointer transition duration-300 md:hidden ${
          isClicked ? "change" : ""
        }`}
        onClick={() => handleHamNavClick()}
      >
        <div className={`bar1`}></div>
        <div className={`bar2`}></div>
        <div className={`bar3`}></div>
        <MobileNav isClicked={isClicked} onclick={handleHamNavClick} />
      </div>
    </>
  );
};

export default HamburgerMenu;
