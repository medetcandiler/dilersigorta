import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoToTopButton from "@/components/GoToTopButton";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diler Sigorta | Anasayfa",
  description:
    "Diler Sigorta, güvenilir ve kapsamlı sigorta çözümleri sunan lider bir sigorta şirketidir. Araç, konut, sağlık ve daha fazlası için en iyi sigorta seçenekleri!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <GoToTopButton />
        <Footer />
      </body>
    </html>
  );
}
