import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import DesktopNav from "../DesktopNav";
import OfferButton from "../OfferButton";

const Header: FC = () => {
  return (
    <header className="fixed w-full transition duration-300 z-50 bg-[#fff]">
      <section className="relative px-4 flex bg-transparent justify-between items-center h-[70px] md:container md:mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/images/dilerlogo.png"
              alt="logo"
              width={200 }
              height={200 }
              priority
            />
          </Link>

          <nav className="flex gap-3 md:gap-6">
            <HamburgerMenu />
            <DesktopNav />
          </nav>

          <OfferButton isOnMobile={false} />
        </div>
      </section>
    </header>
  );
};

export default Header;
