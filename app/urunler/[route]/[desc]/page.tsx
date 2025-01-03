import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { products } from "@/data/products";
import OfferButton from "@/components/OfferButton";
import Image from "next/image";

export async function generateMetadata(
  { params }: { params: { desc: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const decodedPath = decodeURI(params.desc);
  const capitilisedTitle = decodedPath.split(" ").slice(1).join(" ");
  return {
    title: `Diler Sigorta | ${capitilisedTitle}`,
    description: `Bu sayfada ${capitilisedTitle} hakkında detaylı bilgileri bulabilirsiniz. Diler Sigorta'nın sunduğu ${capitilisedTitle} hizmetlerini inceleyebilir ve ihtiyaçlarınıza uygun sigorta çözümleri hakkında bilgi edinebilirsiniz.`,
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

  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <section>
      <div className="container mx-auto flex justify-center items-center pb-20 pt-10 md:pt-10 md:px-5 lg:px-20 ">
        <div className="flex flex-col gap-5 md:border-black px-10 lg:px-20  md:py-10 lg:py-16 md:rounded-lg md:shadow md:shadow-black md:overflow-y-auto">
          <div className="flex justify-center items-center pb-5">
            <h3 className="text-center font-bold text-3xl md:text-4xl text-slate-800">
              {matchedTitle.title.split(" ").slice(1).join(" ")}
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
            <div className="md:w-2/3">
              {Object.entries(matchedTitle.subDescription).map(
                ([key, value]) => (
                  <div key={key}>
                    <h4 className="font-bold contentHeader text-lg mb-2">
                      {key}
                    </h4>
                    {Array.isArray(value) ? (
                      <ul className="list-disc pl-6 pb-5">
                        {value.map((item, index) => (
                          <li key={index} className="listItem contentText">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="contentText mb-6">
                        {renderTextWithLineBreaks(value)}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
            <div className="flex justify-center md:w-1/3">
              <Image
                src={`${matchedTitle.imageSrc}`}
                width={300}
                height={300}
                alt={`${matchedTitle.title}`}
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="grid place-content-center pt-4">
            <OfferButton isOnMobile={true} wp={matchedTitle.wp} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NestedDescPage;
