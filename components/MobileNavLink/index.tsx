import { FC } from "react";
import { IMobileNavLink } from "./interface";
import Link from "next/link";
import MobileLinkWithChild from "../MobileLinkWithChild";

const MobileNavLink: FC<IMobileNavLink> = ({
  label,
  hasChild,
  child,
  href,
  onclick,
}) => {
  if (hasChild)
    return (
      <MobileLinkWithChild label={label} child={child} onclick={onclick} />
    );
  return (
    <Link href={href} className={`ham-nav-link links-hover group/edit`}>
      <span>{label}</span>
    </Link>
  );
};

export default MobileNavLink;
