import Image from "next/image";
import Link from "next/link";
import FooterSocialLinks from "../FooterSocialLinks";
import FooterSectionLinks from "../FooterSectionLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#fafafa] py-10 px-5 md:py-15">
      <div className="flex flex-col items-center gap-4 text-slate-800 text-center text-md md:text-start md:text-lg">
        <div>
          <Image
            src="/images/dilerlogo.png"
            width={250}
            height={250}
            alt="diler sigorta logo"
          />
        </div>
        <div className="flex gap-2.5 justify-between ">
          <Image
            src="/icons/phone.svg"
            alt="diler sigorta phone icon"
            className="my-auto w-[24px] h-[24px] "
            width={24}
            height={24}
          />
          <Link href="tel:+902163534892" className="flex-auto links-hover">
            (216) 353 48 92
          </Link>
        </div>
        <div className="flex gap-2.5 justify-between">
          <Image
            src="/icons/location.svg"
            alt="diler sigorta location icon"
            className="w-[24px] h-[24px] "
            width={24}
            height={24}
          />
          <div className="flex-auto">
            Atalar, Diler Sigorta, Üsküdar Cd. NO:117, 34862 Kartal/İstanbul
          </div>
        </div>
        <div className="flex gap-2.5 justify-between">
          <Image
            src="/icons/email.svg"
            alt="email"
            className="my-auto w-[24px] h-[24px] "
            width={24}
            height={24}
          />
          <Link
            href="mailto:hasan@dilersigorta.com"
            className="flex-auto links-hover"
          >
            hasan@dilersigorta.com
          </Link>
        </div>
        <FooterSectionLinks />
        <p className="text-gray-600 text-sm">
          1995 - {currentYear} © Diler Sigorta. Tüm hakları saklıdır.
        </p>
        <FooterSocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
