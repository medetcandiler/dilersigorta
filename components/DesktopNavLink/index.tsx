import React, { FC } from "react";
import Link from "next/link";
import { IDesktopNavLink } from "./interface";
import Arrow from "../Arrow";
import DesktopNavLinkChild from "../DesktopNavLinkChild";

const DesktopNavLink: FC<IDesktopNavLink> = ({
  label,
  hasChild,
  child,
  href,
  isVisibleOnMd,
}) => {
  if (hasChild)
    return (
      <div className="relative group nav-link cursor-pointer">
        <span className=" group/edit -mr-0.5 transition duration-300 group-hover/:text-[#0E7AB3]">
          {label}
        </span>
        <Arrow
          isChildArrow={false}
          color="#1E293B"
          type="down"
          height={15}
          width={12}
        />
        <DesktopNavLinkChild desktopNavChild={child} />
      </div>
    );
  return (
    <Link
      className={`nav-link ${isVisibleOnMd ? "md:block" : "md:hidden"} lg:block`}
      href={href}
    >
      <span className="links-hover whitespace-nowrap">{label}</span>
    </Link>
  );
};

export default DesktopNavLink;
