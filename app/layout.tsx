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
    "Diler Sigorta, Türkiye'nin güvenilir sigorta çözüm ortağı. Araç, konut, sağlık ve daha fazlası için güvenilir sigorta çözümleri sunuyoruz.",
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
        {children}
        <GoToTopButton />
        <Footer />
      </body>
    </html>
  );
}
