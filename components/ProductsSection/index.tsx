import { FC } from "react";
import ProductCard from "../ProductCard";
import { products } from "@/data/products";
import { IProductsSection } from "./interface";

const ProductsSection: FC<IProductsSection> = ({ isNav }) => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.9), rgba(0, 123, 255, 1))",
  };
  return (
    <section
      className={
        isNav ? "pt-[70px]" : "bg-[#fff] py-10 px-10 xl:px-40 2xl:px-72"
      }
    >
      {isNav ? (
        <div className="bg-cover bg-center h-[25vh]" style={styling}>
          <div className="flex flex-col items-center justify-center pt-[70px] h-full">
            <h3 className="titleStyle text-[#fff] pb-1">Ürünlerimiz</h3>
            <p className="subTitleStyle text-[#fff]">
              Sigorta ihtiyaçlarınız için en güvenilir adres!
            </p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="titleStyle pb-8">
            Diler Sigorta, Güvenle Hayatınızı Sigortalıyor!
          </h1>
          <p className="subTitleStyle">Doğru Ürün. İyi Fiyat.</p>
        </>
      )}
      <div
        className={`container mx-auto flex flex-wrap  px-2 pb-10 md:justify-center ${
          isNav
            ? "overflow-y-auto flex-nowrap md:overflow-hidden gap-3 md:gap-5 pt-10"
            : "justify-center gap-3 md:gap-12"
        }`}
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            route={product.route}
            imageSrc={product.imageSrc}
            isNav={isNav}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
