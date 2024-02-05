import { FC } from "react";
import ProductCard from "../ProductCard";
import { products } from "@/data/products";

const ProductsSection: FC = () => {
  return (
    <section className="bg-[#fff] px-5 py-20 xl:px-40 2xl:px-72">
      <h3 className="titleStyle pb-8">
        Güvenin Adresi, Sigortada İhtiyacınız Olan Her Şey!
      </h3>
      <p className="subTitleStyle">
        Doğru Ürün. İyi Fiyat.
      </p>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
