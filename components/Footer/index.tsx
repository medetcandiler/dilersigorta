import Image from "next/image";
import Link from "next/link";
import FooterSocialLinks from "../FooterSocialLinks";
import FooterSectionLinks from "../FooterSectionLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#fafafa] paddingForSections">
      <div className="flex flex-col items-center gap-4 text-slate-800 text-center text-md md:text-start md:text-lg">
        <div>
          <Image
            src="/images/dilerlogo.png"
            width={250}
            height={250}
            alt="diler sigorta logo"
            className="object-fill"
          />
        </div>
        <div className="flex gap-2.5 justify-between group">
          <Image
            src="/icons/phone.svg"
            alt="diler sigorta phone icon"
            className="my-auto w-[24px] h-[24px] transition duration-300 group-hover:scale-125 "
            width={24}
            height={24}
          />
          <Link href="tel:+905392343777" className="flex-auto links-hover ">
            (539) 234 37 77
          </Link>
        </div>
        <div className="flex gap-2.5 justify-between group">
          <Image
            src="/icons/location.svg"
            alt="diler sigorta location icon"
            className="w-[24px] h-[24px] transition duration-300 group-hover:scale-125"
            width={24}
            height={24}
          />
          <Link
            target="_blank"
            href="https://www.google.com/maps/dir//Atalar,+Diler+Sigorta,+%C3%9Csk%C3%BCdar+Cd.+NO:117,+34862+Kartal%2F%C4%B0stanbul/@40.9021467,29.083375,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14cac38ba3ac041d:0xba966ab998541c9!2m2!1d29.1658033!2d40.9021946?entry=ttu"
            className="flex-auto links-hover "
          >
            Atalar, Diler Sigorta, Üsküdar Cd. NO:117, 34862 Kartal/İstanbul
          </Link>
        </div>
        <div className="flex gap-2.5 justify-between group">
          <Image
            src="/icons/email.svg"
            alt="email"
            className="my-auto w-[24px] h-[24px] transition duration-300 group-hover:scale-125"
            width={24}
            height={24}
          />
          <Link
            href="mailto:hasan@dilersigorta.com"
            className="flex-auto links-hover"
          >
            info@dilersigorta.com
          </Link>
        </div>
        <FooterSectionLinks />
        <FooterSocialLinks />
        <p className="text-gray-600 text-sm">
          1995 - {currentYear} © Diler Sigorta. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
