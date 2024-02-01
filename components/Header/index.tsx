import { FC } from "react";
import Image from "next/image";
import HamburgerMenu from "../HamburgerMenu";
import DesktopNav from "../DesktopNav";
import Arrow from "../Arrow";

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 z-10 bg-white w-full">
      <section className="container mx-auto flex px-8 justify-between items-center h-[80px] text-[#020202] whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex items-center justify-between w-full my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="flex text-2xl font-bold tracking-normal leading-8 text-black">
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
                <Arrow
                  color="black"
                  type="right"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
