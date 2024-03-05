import { FC } from "react";

const TermsOfUseSection: FC = () => {
  const styling = {
    backgroundImage:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.1)), url(/images/termsofuse.jpg)",
  };
  return (
    <section className="pt-[70px]">
      <div className="bg-cover bg-center h-[50vh]" style={styling}>
        <div className="flex justify-center items-center h-full">
          <h3 className="titleStyle text-[#fff]">Kullanım Şartları</h3>
        </div>
      </div>
      <div className="flex justify-center items-center md:py-12 ">
        <div className="md:border-black p-14 md:rounded-lg md:shadow-black md:shadow-lg md:w-[calc(200vw/3)]  md:overflow-y-auto">
          <h4 className="font-bold contentHeader text-lg mb-2">1. GENEL</h4>
          <p className="contentText mb-6">
            İşbu kullanım şartları metni, Diler Sigorta Aracilik Hizmetleri
            (&quot;Şirket&quot;) tarafından işletilen www.dilersigorta.com web
            sitesinin (&quot;Web Sitesi&quot;) kullanımı ile ilgili koşulları
            belirlemektedir. Web Sitesi&rsquo;ni kullanarak, bu kullanım
            şartlarına tamamen ve koşulsuz olarak bağlı olduğunuzu kabul
            etmektesiniz. Eğer bu kullanım şartlarına katılmıyorsanız, Web
            Sitesi&rsquo;ni kullanmayınız.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">
            2. KULLANIM HAKKI
          </h4>
          <div className="contentText mb-6">
            Şirket, kullanıcılara, bu Web Sitesi&rsquo;nde sunulan bilgileri ve
            hizmetleri kullanma hakkı vermektedir. Ancak, bu hak, Web Sitesi&rsquo;ni
            kullanımınızın aşağıdaki faaliyetlerde bulunmanızı içermediğini
            kabul ve beyan etmektesiniz:
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