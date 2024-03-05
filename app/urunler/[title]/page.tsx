import { products } from "@/data/products";

const DynamicProductPage = ({ params }: { params: { title: string } }) => {
  const decodedTitle = decodeURIComponent(params.title)
  const selectedProduct = products.filter(
    (product) =>
      product.title.toLocaleLowerCase() === decodedTitle
  );

  return <div>{JSON.stringify(selectedProduct)}</div>;
};

export default DynamicProductPage;
