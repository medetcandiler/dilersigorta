import { FC } from "react";
import ProductCard from "../ProductCard";
import { products } from "@/data/products";
import { IProductsSection } from "./interface";

const ProductsSection: FC<IProductsSection> = ({ isNav }) => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url('/images/productbg.jpg')",
  };
  return (
    <section className={isNav ? "pt-[70px]" : "bg-[#fff] py-10 px-10 xl:px-40 2xl:px-72"}>
      {isNav ? (
        <div className="bg-cover bg-center h-[20vh]" style={styling}>
          <div className="flex justify-center items-center h-full">
            <h3 className="titleStyle text-[#fff]">Ürünlerimiz
</h3>
          </div>
        </div>
      ) : (
        <>
          <h3 className="titleStyle pb-8">
            Güvenin Adresi, Sigortada İhtiyacınız Olan Her Şey!
          </h3>
          <p className="subTitleStyle">Doğru Ürün. İyi Fiyat.</p>
        </>
      )}
      <div
        className={`container mx-auto flex  flex-nowrap px-2 pb-10 overflow-y-auto md:flex-wrap md:overflow-hidden md:justify-center ${
          isNav
            ? "gap-3 md:gap-5 pt-10"
            : "gap-10 md:gap-12"
        }`}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            isNav={isNav}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
