import { FC } from "react";
import { IMobileNavLink } from "./interface";
import Link from "next/link";
import Arrow from "../Arrow";

const MobileNavLink: FC<IMobileNavLink> = ({ label }) => {
  return (
    <Link
      href="/"
      className={`ham-nav-link transition duration-300 group/edit px-10`}
    >
      <span className="group-hover/edit:opacity-80">{label}</span>
      <Arrow
        color='black'
        type="right"
        height={20}
        width={18}
      />
    </Link>
  );
};

export default MobileNavLink;
