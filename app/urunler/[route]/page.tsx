import type { Metadata, ResolvingMetadata } from "next";
import { products } from "@/data/products";
import ProductInnerCard from "@/components/ProductInnerCard";

export async function generateStaticParams() {
  return products.map((product) => ({
    title: product.title,
  }));
}

export async function generateMetadata(
  { params }: { params: { route: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const capitilisedTitle =
    params.route[0].toLocaleUpperCase() + params.route.slice(1);
  return {
    title: `Diler Sigorta | ${capitilisedTitle}`,
  };
}

const DynamicProductPage = ({ params }: { params: { route: string } }) => {
  const selectedProduct = products.filter(
    (product) => product.route === params.route
  )[0];

  return (
    <section className="bg-[#fff] pb-20 pt-5">
      <div className="container mx-auto px-5 flex flex-col gap-5 lg:flex-row lg:justify-center lg:flex-wrap lg:gap-10">
        {selectedProduct?.content.map((content) => (
          <ProductInnerCard
            key={content.id}
            title={content.title}
            description={content.description}
            routePath={params.route}
          />
        ))}
      </div>
    </section>
  );
};

export default DynamicProductPage;
