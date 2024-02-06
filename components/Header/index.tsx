import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import DesktopNav from "../DesktopNav";
import Arrow from "../Arrow";

const Header: FC = () => {
  return (
    <header className="fixed w-full transition duration-300 z-50 bg-[#fff]">
      <section className="relative px-4 flex bg-transparent justify-between items-center h-[70px] md:container md:mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/dilerlogo.png"
              alt="logo"
              width={150}
              height={150}
              priority
            />
          </Link>

          <nav className="flex gap-3 md:gap-6">
            <HamburgerMenu />
            <DesktopNav />
          </nav>

          <button className="hidden gap-3 justify-between items-center px-4 py-3 bg-sky-500 text-[#fff] rounded-md hover:rounded-full md:flex">
            <span className="font-semibold">Teklif Al</span>
            <Arrow
              color="white"
              type="right"
              width={20}
              height={20}
              isChildArrow={false}
            />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
