import type { Metadata, ResolvingMetadata } from "next";
import { products } from "@/data/products";
import ProductInnerCard from "@/components/ProductInnerCard";

export async function generateStaticParams() {
  return products.map((product) => ({
    title: product.title,
  }));
}

export async function generateMetadata(
  { params }: { params: { title: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const title = decodeURIComponent(params.title);
  const capitilisedTitle = title[0].toUpperCase() + title.slice(1);

  return {
    title: `Diler Sigorta | ${capitilisedTitle}`,
  };
}

const DynamicProductPage = ({ params }: { params: { title: string } }) => {
  const decodedTitle = decodeURIComponent(params.title);
  const selectedProduct = products.filter(
    (product) => product.title.toLocaleLowerCase() === decodedTitle
  )[0];
  return (
    <section className="bg-[#fff] pb-20">
      <div className="container mx-auto px-5 flex flex-col gap-5 lg:flex-row">
        {selectedProduct?.content.map((content) => (
          <ProductInnerCard
            key={content.id}
            title={content.title}
            description={content.description}
            routePath={decodedTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default DynamicProductPage;
