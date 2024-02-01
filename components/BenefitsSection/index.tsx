import { FC } from "react";

const Benefits: FC = () => {
  return (
    <div className="container mx-auto self-stretch px-0.5 mt-32 mb-8 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
        <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-stretch px-10 py-9 w-full bg-white shadow-lg max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09613f0f81c0282f48d09f0e89bda8a36bb0f25a965f696df77098b2149a9d0c?"
              className="object-center w-12 aspect-[1.2]"
            />
            <div className="mt-2.5 text-2xl font-bold tracking-normal leading-8 text-slate-800">
              Kapsamlı Güvence
            </div>
            <div className="mt-2.5 text-sm font-medium tracking-wide leading-5 text-neutral-500">
              Ev hırsızlığından doğal afetlere kadar geniş kapsamlı sigorta
              hizmetleri.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-stretch px-10 py-9 w-full bg-white shadow-lg max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc842d697e57bb51406aab0fb9d7f2f4008fbe94f65da17d46089c6fc25987e?"
              className="object-center w-12 aspect-[1.2]"
            />
            <div className="mt-2.5 text-2xl font-bold tracking-normal leading-8 text-slate-800">
              Geleceği Garantileyin
            </div>
            <div className="mt-2.5 text-sm font-medium tracking-wide leading-5 text-neutral-500">
              Sigorta poliçelerimizle geleceğinizi güvence altına alın.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-stretch px-10 py-9 w-full text-white bg-sky-500 shadow-lg max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/40ae4384bcff05b56d921e783bff628f978a796aa01ee56d3f8633853379fa9a?"
              className="object-center w-12 aspect-[1.2]"
            />
            <div className="mt-2.5 text-2xl font-bold tracking-normal leading-8 whitespace-nowrap">
              %100 Müşteri Memnuniyeti
            </div>
            <div className="mt-2.5 text-sm font-medium tracking-wide leading-5">
              Müşteri memnuniyeti odaklı hizmetimizle her zaman yanınızdayız.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
