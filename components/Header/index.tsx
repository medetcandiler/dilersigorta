import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import DesktopNav from "../DesktopNav";
import OfferButton from "../OfferButton";
import ContactButton from "../ContactButton";

const Header: FC = () => {
  return (
    <header className="fixed w-full transition duration-300 z-50 bg-[#fff]">
      <section className="relative px-4   flex bg-transparent justify-between items-center h-[80px] md:container md:mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="cursor-pointer -ml-3">
            <Image
              src="/images/dilerlogo.png"
              alt="logo"
              width={225}
              height={225}
              priority
            />
          </Link>

          <nav className="flex gap-3 md:gap-6">
            <DesktopNav />
            <HamburgerMenu />
          </nav>

          <div className="hidden items-center justify-center gap-4 md:flex">
            <div className="hidden lg:flex">
              <ContactButton />
            </div>
            <OfferButton isOnMobile={false} />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
