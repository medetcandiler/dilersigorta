import { FC } from "react";
import ProductCard from "../ProductCard";
import { products } from "@/data/products";


const ProductsSection: FC = () => {
  return (
    <section className="bg-[#fafafa] px-10 py-20 md:px-5">
      <h3 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl pb-8">Güvenin Adresi, Sigortada İhtiyacınız Olan Her Şey!</h3>
      <p className="text-center text-lg pb-6 text-neutral-500">
        Doğru Ürün. İyi Fiyat.
      </p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
