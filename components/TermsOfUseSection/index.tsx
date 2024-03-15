import { FC } from "react";
import Image from "next/image";

const TermsOfUseSection: FC = () => {
  const styling = {
    background:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.2))",
  };
  return (
    <section className="pt-[70px]">
      <div className="relative h-[50vh]" style={styling}>
        <Image
          src="/images/termsofuse.jpg"
          fill={true}
          alt="Diler sigorta termsofuse section background"
          className="object-cover -z-10"
          priority
        />
        <div className="flex justify-center items-center h-full">
          <h3 className="titleStyle text-[#fff]">Kullanım Şartları</h3>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center py-20 md:px-5 lg:px-20 ">
        <div className="md:border-black px-10 md:py-10 lg:px-20 lg:py-16 md:rounded-lg md:shadow-black md:shadow-lg md:overflow-y-auto">
          <h4 className="font-bold contentHeader text-lg mb-2">1. GENEL</h4>
          <p className="contentText mb-6">
            İşbu kullanım şartları metni, Diler Sigorta Aracilik Hizmetleri
            tarafından işletilen www.dilersigorta.com web sitesinin kullanımı
            ile ilgili koşulları belirlemektedir. Web Sitesi&rsquo;ni
            kullanarak, bu kullanım şartlarına tamamen ve koşulsuz olarak bağlı
            olduğunuzu kabul etmektesiniz. Eğer bu kullanım şartlarına
            katılmıyorsanız, Web Sitesi&rsquo;ni kullanmayınız.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">
            2. KULLANIM HAKKI
          </h4>
          <div className="contentText mb-6">
            Şirket, kullanıcılara, bu Web Sitesi&rsquo;nde sunulan bilgileri ve
            hizmetleri kullanma hakkı vermektedir. Ancak, bu hak, Web
            Sitesi&rsquo;ni kullanımınızın aşağıdaki faaliyetlerde bulunmanızı
            içermediğini kabul ve beyan etmektesiniz:
            <ul className="list-disc pl-6">
              <li>Web Sitesi&rsquo;ne zarar vermek veya erişimi engellemek</li>
              <li>
                Fraud, phishing veya diğer kötü niyetli amaçlarla kullanmak
              </li>
              <li>Üçüncü tarafların haklarını ihlal etmek</li>
            </ul>
          </div>

          <h4 className="font-bold contentHeader text-lg mb-2">
            3. SORUMLULUK REDDİ
          </h4>
          <p className="contentText mb-6">
            Web Sitesi, mevcut durumu ile sunulmaktadır ve &apos;olduğu
            gibi&apos; esasına göre kullanıcılara sunulmaktadır. Şirket, Web
            Sitesi&lsquo;nde yer alan bilgilerin doğruluğu, güncelliği veya
            kullanılabilirliği konusunda herhangi bir garanti vermez. Web
            Sitesi&lsquo;ni kullanımınız sonucu oluşabilecek herhangi bir kayıp
            veya zarardan dolayı Şirket sorumlu tutulamaz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUseSection;
