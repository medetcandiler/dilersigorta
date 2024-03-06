import { products } from "@/data/products";

const NestedDescPage = ({ params }: { params: { desc: string } }) => {
  const decodedPath = decodeURI(params.desc);
  const arrayDecodedPath = decodedPath.split(" ");
  const title = arrayDecodedPath.includes("i̇ş")
    ? decodedPath.split(" ")[0] + " " + decodedPath.split(" ")[1]
    : decodedPath.split(" ")[0];

  const matchedProduct = products.filter(
    (product) => product.title.toLocaleLowerCase() === title
  );

  const productContent = matchedProduct.map((product) => product.content)[0];

  const matchedTitle = productContent.filter(
    (desc) => desc.title.toLocaleLowerCase() === decodedPath
  )[0];

  return (
    <section>
      <div className="flex justify-center items-center">
        {/* <h3 className="titleStyle">{matchedTitle.subDescription}</h3> */}
      </div>
      <div className="flex justify-center items-center md:py-12">
        <div className="md:border-black p-14 md:rounded-lg md:shadow-black md:shadow-lg md:w-[calc(200vw/3)] md:overflow-y-auto">
          {Object.entries(matchedTitle.subDescription).map(([key, value]) => (
            <div key={key}>
              <h4 className="font-bold contentHeader text-lg mb-2">{key}</h4>
              {Array.isArray(value) ? (
                <ul className="list-disc pl-6">
                  {value.map((item, index) => (
                    <li key={index} className="listItem">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="contentText mb-6">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NestedDescPage;
