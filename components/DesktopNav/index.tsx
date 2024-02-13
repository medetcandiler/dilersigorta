import { FC } from "react";
import { navLinks } from "../Header/data";
import DesktopNavLink from "../DesktopNavLink";

const DesktopNav: FC = () => {
  return (
    <div className="hidden space-x-4 md:space-x-2 lg:space-x-4 md:flex">
      {navLinks.map((link) => (
        <DesktopNavLink
          key={link.label}
          label={link.label}
          hasChild={link.hasChild}
          child={link.child}
          href={link.href}
          isVisibleOnMd={link.isVisibleOnMd}
        />
      ))}
  </div>
  );
};

export default DesktopNav;
