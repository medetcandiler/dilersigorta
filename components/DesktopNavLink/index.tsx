import React, { FC } from "react";
import Link from "next/link";
import { IDesktopNavLink } from "./interface";
import Arrow from "../Arrow";

const DesktopNavLink: FC<IDesktopNavLink> = ({ label, hasChild }) => {
  if (hasChild)
  return (
    <div className="relative group nav-link cursor-pointer">
      <span className="group/edit transition duration-300 group-hover:opacity-80 group-hover:translate-y-[-3px]">{label}</span>
      <Arrow
        // color={
        //   isBgChanged === EStoreHeaderBgColors.TRANSPARENT ? "white" : "black"
        // }
        color="black"
        type="down"
        height={20}
        width={18}
      />
    </div>
  );
return (
  <Link className="nav-link" href="/">
    <span className="links-hover">{label}</span>
  </Link>
);
};

export default DesktopNavLink;
