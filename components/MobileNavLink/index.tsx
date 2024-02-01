import { FC } from "react";
import { IMobileNavLink } from "./interface";
import Link from "next/link";
import Arrow from "../Arrow";
import MobileNavLinkChild from "../MobileNavLinkChild";

const MobileNavLink: FC<IMobileNavLink> = ({ label, hasChild, child }) => {
  if (hasChild)
    return (
      <div
        className={`flex flex-col bg-[#fff] transition duration-300 group/edit px-10 text-xl border-b py-3 cursor-pointer`}
      >
        <div className="flex items-center justify-between">
          <span className="group-hover/edit:opacity-80">{label}</span>
          <Arrow color="black" type="right" height={20} width={18} />
        </div>
        <MobileNavLinkChild desktopNavChild={child} />
      </div>
    );
  return (
    <Link
      href="/"
      className={`ham-nav-link transition duration-300 group/edit`}
    >
      <span className="group-hover/edit:opacity-80">{label}</span>
      <Arrow color="black" type="right" height={20} width={18} />
    </Link>
  );
};

export default MobileNavLink;
