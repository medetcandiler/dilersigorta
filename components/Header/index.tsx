import { FC } from "react";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";
import DesktopNav from "../DesktopNav";
import Arrow from "../Arrow";

const Header: FC = () => {
  return (
    <header className="fixed w-full transition duration-300 z-50 ">
      <section className="relative px-4 flex bg-transparent justify-between items-center h-[70px] md:container md:mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <Image src="/logolong.png" alt="logo" width={150} height={150} />
          </div>

          <nav className="flex gap-3 md:gap-6">
            <HamburgerMenu />
            <DesktopNav />
          </nav>

          <div className="hidden gap-5 justify-between items-center text-sm font-bold tracking-wide leading-5 md:flex">
            <div className="flex flex-col flex-1 ">
              <div className="flex gap-4 justify-between items-center px-6 py-4 bg-sky-500 rounded-md">
                <div className="grow">Teklif Al</div>
                <Arrow color="black" type="right" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
