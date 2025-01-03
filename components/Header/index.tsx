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
          <Link href="/" className="cursor-pointer ml-0 md:-ml-5 xl:ml-0">
            <Image
              src="/images/dilerlogo.png"
              alt="diler sigorta logo"
              width={200}
              height={200}
              priority
            />
          </Link>
          <h1 className="hidden">Atalar Sigorta</h1>
          <h1 className="hidden">Kartal Sigorta</h1>
          <nav className="flex gap-3 md:gap-6">
            <DesktopNav />
            <HamburgerMenu />
          </nav>

          <div className="hidden items-center justify-center gap-4 md:flex">
            <div className="hidden lg:flex">
              <ContactButton />
            </div>
            <OfferButton
              isOnMobile={false}
              wp={"Merhaba, sigorta teklifleri hakkında bilgi almak istiyorum."}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
