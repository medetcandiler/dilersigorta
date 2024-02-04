import { FC } from "react";
import ProductCard from "../ProductCard";
import { products } from "@/data/products";

const ProductsSection: FC = () => {
  return (
    <section className="bg-[#fafafa] px-5 py-20 lg:px-40">
      <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pb-8">
        Güvenin Adresi, Sigortada İhtiyacınız Olan Her Şey!
      </h3>
      <p className="text-center text-lg pb-6 text-neutral-500">
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
