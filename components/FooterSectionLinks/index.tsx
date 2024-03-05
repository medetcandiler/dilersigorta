"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const FooterSectionLinks = () => {
  const [activeLink, setActiveLink] = useState("kvkk");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveLink(activeLink === "kvkk" ? "terms" : "kvkk");
    }, 3500);

    return () => clearTimeout(timeout);
  }, [activeLink]);

  return (
    <>
      {activeLink === "kvkk" ? (
        <Link
          className="text-[#16A5E9] links-hover"
          href="/kvkk-aydinlatma-metni"
        >
          KVKK Aydınlatma Metni
        </Link>
      ) : (
        <Link className="text-[#16A5E9] links-hover" href="/kullanim-sartlari">
          Kullanım Şartları
        </Link>
      )}
    </>
  );
};

export default FooterSectionLinks;
