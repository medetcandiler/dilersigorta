"use client";
import { products } from "@/data/products";
import ProductInnerCard from "@/components/ProductInnerCard";

const DynamicProductPage = ({ params }: { params: { title: string } }) => {
  const decodedTitle = decodeURIComponent(params.title);
  const selectedProduct = products.filter(
    (product) => product.title.toLocaleLowerCase() === decodedTitle
  )[0];

  return (
    <section className="bg-[#fff] pb-20">
      <div className="container mx-auto px-5 flex flex-col gap-10 lg:flex-row">
        {selectedProduct?.content.map((content) => (
          <ProductInnerCard
            key={content.id}
            title={content.title}
            description={content.description}
          />
        ))}
      </div>
    </section>
  );
};

export default DynamicProductPage;
