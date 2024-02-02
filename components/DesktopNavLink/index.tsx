import React, { FC } from "react";
import Link from "next/link";
import { IDesktopNavLink } from "./interface";
import Arrow from "../Arrow";
import DesktopNavLinkChild from "../DesktopNavLinkChild";

const DesktopNavLink: FC<IDesktopNavLink> = ({ label, hasChild, child }) => {
  if (hasChild)
  return (
    <div className="relative group nav-link cursor-pointer">
      <span className="group/edit transition duration-300 group-hover/:text-[#0E7AB3]">{label}</span>
      <Arrow
        isChildArrow={false}
        color="black"
        type="down"
        height={20}
        width={18}
      />
      <DesktopNavLinkChild desktopNavChild={child} />
    </div>
  );
return (
  <Link className="nav-link" href="/">
    <span className="links-hover">{label}</span>
  </Link>
);
};

export default DesktopNavLink;
