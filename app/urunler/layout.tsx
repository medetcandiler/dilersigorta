import React, { FC, ReactNode } from "react";
import { Metadata } from "next";
import ProductsSection from "@/components/ProductsSection";

interface IProductPageProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Ürünler",
  description:
    "Diler Sigorta'nın sunduğu geniş ürün yelpazesini keşfedin. Konut sigortası, araç sigortası, sağlık sigortası ve daha fazlası için doğru adres!",
};

const ProductLayout: FC<IProductPageProps> = ({ children }) => {
  return (
    <section>
      <ProductsSection isNav={true} />
      {children}
    </section>
  );
};

export default ProductLayout;
