import { FC } from "react";
import { IMobileNavLink } from "./interface";
import Link from "next/link";
import Arrow from "../Arrow";
import MobileLinkWithChild from "../MobileLinkWithChild";

const MobileNavLink: FC<IMobileNavLink> = ({
  label,
  hasChild,
  child,
  href,
}) => {
  if (hasChild) return <MobileLinkWithChild label={label} child={child} />;
  return (
    <Link href={href} className={`ham-nav-link links-hover group/edit`}>
      <span>{label}</span>
      <Arrow
        color="black"
        type="right"
        height={20}
        width={18}
        isChildArrow={false}
      />
    </Link>
  );
};

export default MobileNavLink;
