import { FC } from "react";

const Benefits: FC = () => {
  return (
    <div className="container mx-auto px-5 py-20 ">
      <div className="flex flex-col justify-center items-center gap-5 md:flex-row">
        <div className="flex flex-col w-1/3">
          <div className="flex flex-col px-10 py-12 w-full bg-white shadow-2xl flex-grow">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09613f0f81c0282f48d09f0e89bda8a36bb0f25a965f696df77098b2149a9d0c?"
              className="object-center w-12 aspect-[1.2]"
            />
            <div className="mt-2.5 text-2xl font-bold tracking-normal text-slate-800">
              Kapsamlı Güvence
            </div>
            <div className="mt-2.5 text-sm font-medium tracking-wide text-neutral-500">
              Ev hırsızlığından doğal afetlere kadar geniş kapsamlı sigorta
              hizmetleri.
            </div>
          </div>
        </div>
        
        <div className="flex flex-col w-1/3">
          <div className="flex flex-col px-10 py-12 w-full bg-white shadow-2xl flex-grow">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09613f0f81c0282f48d09f0e89bda8a36bb0f25a965f696df77098b2149a9d0c?"
              className="object-center w-12 aspect-[1.2]"
            />
            <div className="mt-2.5 text-2xl font-bold tracking-normal text-slate-800">
              Kapsamlı Güvence
            </div>
            <div className="mt-2.5 text-sm font-medium tracking-wide text-neutral-500">
              Ev hırsızlığından doğal afetlere kadar geniş kapsamlı sigorta
              hizmetleri.
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="flex flex-col px-10 py-12 w-full bg-white shadow-2xl flex-grow">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09613f0f81c0282f48d09f0e89bda8a36bb0f25a965f696df77098b2149a9d0c?"
              className="object-center w-12 aspect-[1.2]"
            />
            <div className="mt-2.5 text-2xl font-bold tracking-normal text-slate-800">
              Kapsamlı Güvence
            </div>
            <div className="mt-2.5 text-sm font-medium tracking-wide text-neutral-500">
              Ev hırsızlığından doğal afetlere kadar geniş kapsamlı sigorta
              hizmetleri.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
