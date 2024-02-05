import { FC } from "react";
import { navLinks } from "../Header/data";
import DesktopNavLink from "../DesktopNavLink";

const DesktopNav: FC = () => {
  return (
    <div className="hidden space-x-4 md:flex">
      {navLinks.map((link) => (
        <DesktopNavLink
          key={link.label}
          label={link.label}
          hasChild={link.hasChild}
          child={link.child}
          href={link.href}
        />
      ))}
  </div>
  );
};

export default DesktopNav;
