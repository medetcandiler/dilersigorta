import { FC } from "react";
import { navLinks } from "../Header/data";
import { IMobileNav } from "./interface";
import MobileNavLink from "../MobileNavLink";
import OfferButton from "../OfferButton";

const MobileNav: FC<IMobileNav> = ({ isClicked }) => {
  return (
    <nav
      className={`absolute flex flex-col border-t w-full left-0 top-[70px] transition duration-500 ease-in-out ${
        isClicked ? "transform translate-x-0" : "transform translate-x-full"
      } md:hidden`}
    >
      {navLinks.map((link, index) => (
        <MobileNavLink
          key={index}
          label={link.label}
          hasChild={link.hasChild}
          child={link.child}
          href={link.href}
        />
      ))}
      <div className="flex justify-center bg-[#fff] items-center py-3">
        <OfferButton isOnMobile={true} />
      </div>
    </nav>
  );
};

export default MobileNav;
