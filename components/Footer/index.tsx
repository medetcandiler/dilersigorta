import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-[#fff] text-neutral-500">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 py-20 px-5 text-sm font-semibold tracking-wide leading-6">
        {/* Section 1 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="flex flex-col">
            <div className="text-base font-bold tracking-normal leading-6 whitespace-nowrap text-black">
              Şirket Bilgisi
            </div>
            <div className="mt-5">Hakkımızda</div>
            <div className="mt-2.5">Sigorta Ürünleri</div>
            <div className="mt-2.5 whitespace-nowrap">Kariyer Fırsatları</div>
            <div className="mt-2.5">Blog</div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="flex flex-col">
            <div className="text-base font-bold tracking-normal leading-6 text-black">
              Hukuki
            </div>
            <div className="mt-5">Kullanım Şartları</div>
            <div className="mt-2.5">Gizlilik Politikası</div>
            <div className="mt-2.5 whitespace-nowrap">Telif Hakkı</div>
            <div className="mt-2.5">İletişim</div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="flex flex-col">
            <div className="text-base font-bold tracking-normal leading-6 text-black">
              Özellikler
            </div>
            <div className="mt-5 whitespace-nowrap max-md:mr-0.5">
              Kapsamlı Sigorta Çeşitleri
            </div>
            <div className="mt-2.5 max-md:mr-0.5">Hızlı İşlemler</div>
            <div className="mt-2.5 max-md:mr-0.5">Canlı Destek</div>
            <div className="mt-2.5 whitespace-nowrap max-md:mr-0.5">
              Sorunsuz Hizmet
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div className="flex flex-col">
            <div className="text-base font-bold tracking-normal leading-6 text-black">
              Kaynaklar
            </div>
            <div className="mt-5">Sigorta Uygulamaları</div>
            <div className="mt-2.5">Demo İzle</div>
            <div className="mt-2.5">Müşteri Yorumları</div>
            <div className="mt-2.5">API Kılavuzu</div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col">
            <div className="text-base font-bold tracking-normal leading-6 text-black">
              İletişim
            </div>
            <div className="flex gap-2.5 justify-between mt-5">
              <Image
                loading="lazy"
                src="/icons/phone.svg"
                alt="phone"
                className="my-auto w-6 aspect-square"
                width={24}
                height={24}
              />
              <div className="flex-auto">(0216) 353 48 92</div>
            </div>
            <div className="flex gap-2.5 justify-between mt-2.5">
              <Image
                loading="lazy"
                src="/icons/location.svg"
                alt="location"
                className="w-6 aspect-[0.8]"
                width={24}
                height={20}
              />
              <div className="flex-auto">
                Atalar, Diler Sigorta, Üsküdar Cd. NO:117, 34862 Kartal/İstanbul
              </div>
            </div>
            <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
              <Image
                loading="lazy"
                src="/icons/email.svg"
                alt="email"
                className="my-auto w-6 aspect-[0.93]"
                width={23}
                height={22}
              />
              <div className="flex-auto">hasandiler@dilersigorta.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
