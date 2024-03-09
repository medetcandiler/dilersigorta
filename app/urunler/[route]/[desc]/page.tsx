import type { Metadata, ResolvingMetadata } from "next";
import { products } from "@/data/products";
import OfferButton from "@/components/OfferButton";

export async function generateMetadata(
  { params }: { params: { desc: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const decodedPath = decodeURI(params.desc);
  const capitilisedTitle = decodedPath.split(" ").slice(1).join(" ");
  return {
    title: `Diler Sigorta | ${capitilisedTitle}`,
  };
}

const NestedDescPage = ({ params }: { params: { desc: string } }) => {
  const decodedPath = decodeURI(params.desc);
  const matchedPath = decodedPath.split(" ")[0];

  const matchedProduct = products.filter(
    (product) => product.route === matchedPath
  );

  const productContent = matchedProduct.map((product) => product.content)[0];

  const matchedTitle = productContent.filter(
    (desc) => desc.title.toLocaleLowerCase() === decodedPath.toLocaleLowerCase()
  )[0];

  return (
    <section>
      <div className="container mx-auto flex justify-center items-center pb-10 pt-5 md:pt-10 md:px-5 lg:px-20">
        <div className="md:border-black px-10 md:py-10 lg:px-20 lg:py-16 md:rounded-lg md:shadow-black md:shadow-lg md:overflow-y-auto">
          <div className="flex justify-center items-center pb-5">
            <h3 className="text-center font-bold text-3xl md:text-4xl text-slate-800">
              {matchedTitle.title.split(" ").slice(1).join(" ")}
            </h3>
          </div>
          {Object.entries(matchedTitle.subDescription).map(([key, value]) => (
            <div key={key}>
              <h4 className="font-bold contentHeader text-lg mb-2">{key}</h4>
              {Array.isArray(value) ? (
                <ul className="list-disc pl-6">
                  {value.map((item, index) => (
                    <li key={index} className="listItem contentText">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="contentText mb-6">{value}</p>
              )}
            </div>
          ))}

          <div className="grid place-content-center pt-4">
            <OfferButton isOnMobile={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NestedDescPage;
