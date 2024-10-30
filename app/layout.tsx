import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoToTopButton from "@/components/GoToTopButton";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diler Sigorta | Güvenilir Sigorta Çözümleri",
  description:
    "Diler Sigorta, İstanbul’un Kartal ilçesinde uzman sigorta hizmetleri sunar. Araç, sağlık, konut ve işyeri sigortalarında güvenilir çözümlerle ihtiyaçlarınızı güvence altına alıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={outfit.className}>
        <Header />
        <h1 className="hidden">Atalar Sigorta</h1>
        <h1 className="hidden">Kartal Sigorta</h1>
        {children}
        <GoToTopButton />
        <Footer />
      </body>
    </html>
  );
}
