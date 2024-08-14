import { FC } from "react";
import Image from "next/image";

const KVKKSection: FC = () => {
  const styling = {
    background:
      "radial-gradient(rgba(0, 128, 128, 0.2), rgba(0, 123, 255, 0.2))",
  };

  return (
    <section className="pt-[70px]">
      <div className="relative h-[50vh]" style={styling}>
        <Image
          src="/images/guard.jpg"
          fill={true}
          alt="Diler sigorta kvkk section background"
          className="object-cover -z-10"
          priority
        />
        <div className="flex justify-center items-center h-full">
          <h3 className="titleStyle text-[#fff]">KVKK Aydınlatma Metni</h3>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center py-20 md:px-5 lg:px-20 md:py-[100px] ">
        <div className="md:border-black px-10 md:py-10 lg:px-20 lg:py-16 md:rounded-lg md:shadow-black md:shadow md:overflow-y-auto">
          <h4 className="font-bold contentHeader text-lg mb-2">1. GİRİŞ</h4>
          <p className="contentText mb-6">
            İşbu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması
            Kanunu’nun 10. maddesi uyarınca, T.C. KÜLTÜR VE TURİZM BAKANLIĞI
            tüzel kişiliği, ilgili müdürlük ve birimleri ve hizmet merkezlerinde
            toplanan kişisel verilerin işlenmesine ilişkin ilgili kişilerin
            aydınlatılması amacı ile hazırlanmıştır. VERİ SORUMLUSU, kişisel
            verilerin işlenmesi, korunması ve güvenliği hususuna azami
            hassasiyet ve gayret göstermektedir. Kişisel veriler VERİ SORUMLUSU
            tarafından her türlü işitsel, yazılı, görsel ya da elektronik
            yöntemlerle toplanabilecektir. Bu kapsamda ve Kanun gereğince ilgili
            kişilerin kişisel verileri VERİ SORUMLUSU tarafından Kanunda sayılan
            genel ilkeler doğrultusunda gerçekleştirilmesi gereken iş ve
            işlemler için Veri Sorumlusu sıfatıyla işlenebilecektir.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">
            2. KİŞİSEL VERİLERİN İŞLENME AMACI
          </h4>
          <p className="contentText mb-6">
            Kişisel veriler, Kanun’un 5. ve 6. maddelerinde belirtilen kişisel
            veri işleme şartları ile Kanun’da belirtilen amaçlar çerçevesinde ve
            sınırlı olmamak kaydıyla aşağıda belirtilen amaçlarla işlenmektedir.
            Buna göre kişisel verilerin işlenme amacı; VERİ SORUMLUSU ‘un ilgili
            mevzuatlar çerçevesinde yükümlü olduğu iş ve işlemleri
            yürütebilmesi, vazife ve sorumlulukları çerçevesinde kamu hizmetini
            ifa etmesi, VERİ SORUMLUSU tarafından sunulan hizmetlerden maksimum
            faydanın sağlanması için gerekli çalışmaların yapılması, VERİ
            SORUMLUSU ‘un ve paydaşların hukuki yükümlülüklerinin ve hizmet
            güvenliğinin sağlanması, VERİ SORUMLUSU ’un hizmetlerinin ve
            stratejilerinin sürdürülmesi, VERİ SORUMLUSU’na haklar, vazifeler,
            iş ve işlemler yükleyen kanunlar ve ilgili mevzuatlar uyarınca
            sorumluluklarını ifa etme, VERİ SORUMLUSU’nun insan kaynakları ve
            istihdam politikalarının yönetilmesi Kültür Varlıklarının korunması
            işlemlerinin yürütülmesi Kütüphanecilik faaliyetlerinin yürütülmesi
            Destek, hibe, teşvik vb. işlemlerin gerçekleştirilmesi Müzelere
            ilişkin işlemlerin gerçekleştirilmesi Avrupa ve dış ilişkilerin
            yönetilmesi Basın ve yayın faaliyetlerinin yürütülmesi Sanatsal
            etkinlik, faaliyet vb. hususlarda çalışmaların yapılması Hizmet ve
            yönetim kalitesinin arttırılması ve bu kapsamda çalışmaların
            yapılması VERİ SORUMLUSU, kişisel verilerin hukuka aykırı olarak
            işlenmesinin ve verilere hukuka aykırı olarak erişilmesinin
            önlenmesi ve kişisel verilerin güvenli bir şekilde muhafaza edilmesi
            amacıyla gerekli hukuki, teknik ve idari tedbirleri en üst seviyede,
            kanunda belirtilen ilkeler doğrultusunda işlemeye gayret
            göstermektedir.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">
            3. KİŞİSEL VERİLEN PAYLAŞILMASI VE AKTARILMASI
          </h4>
          <p className="contentText mb-6">
            Çalışanlar, çalışan adayları, stajyer, habere konu kişi, potansiyel
            ürün veya hizmet alıcısı, ürün veya hizmet alıcısı, tedarikçi
            çalışanı, tedarikçi yetkilisi, veli/vasi/temsilci, ziyaretçi ve
            diğer vatandaşlardan toplanan kişisel veriler, Kanun’un 8. ve 9.
            maddelerinde belirtilen şartlar çerçevesinde VERİ SORUMLUSU’nun
            tedarikçileri, hizmet sağlayıcıları, veri işleyenleri ve yasal
            olarak yetkili kurum ve kuruluşlar ile, ilgili mevzuatlar
            çerçevesinde, kişisel veri işleme şartları ve amaçları doğrultusunda
            paylaşılabilecektir. VERİ SORUMLUSU, kişisel verilerin paylaşılması
            halinde gerekli idari ve teknik tedbirleri, tüm güvenlik önlemlerini
            almaya özen göstermektedir. Ayrıca VERİ SORUMLUSU ISO 27001 Bilgi
            Güvenliği Yönetim Sistemi ve diğer bilgi ve veri güvenliğine ilişkin
            çalışmalar gerçekleştirmektedir. VERİ SORUMLUSU verilerinizin
            aktarılması ve paylaşılması hususunda dikkat ve özen yükümlülüğüne
            uymakta, verilerinize ve güvenliğine değer vermektedir.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">
            4. KİŞİSEL VERİ TOPLAMA YÖNTEMİ VE HUKUKİ SEBEBİ
          </h4>
          <p className="contentText mb-6">
            VERİ SORUMLUSU kişisel verileri, her türlü işitsel, yazılı, görsel
            ve elektronik ortamda ve işbu aydınlatma metninde belirtilen amaçlar
            çerçevesinde, VERİ SORUMLUSU’nun sunmuş olduğu hizmetlerin yasalara
            ve ilgili mevzuata uygun olarak sunulabilmesi ve yine VERİ
            SORUMLUSU’nun sözleşme ve yasalardan doğan yükümlülüklerini eksiksiz
            olarak yerine getirebilmesi, iş faaliyetlerinin yürütülmesi gibi
            birçok hukuki sebebe dayalı olarak toplamakta, Kanun’da belirtilen
            şartlara uygun olarak işlemektedir. Hukuki sebepler şu şekildedir;
            İlgili kişinin açık rızasının varlığı, Kanunlarda açıkça
            öngörülmesi, Fiili imkânsızlık nedeniyle rızasını açıklayamayacak
            durumda bulunan veya rızasına hukuki geçerlilik tanınmayan kişinin
            kendisinin ya da bir başkasının hayatı veya beden bütünlüğünün
            korunması için zorunlu olması, Bir sözleşmenin kurulması veya
            ifasıyla doğudan doğruya ilgili olması kaydıyla sözleşmenin
            taraflarına ait kişisel verilerin işlenmesinin gerekli olması, Veri
            sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu
            olması, İlgili kişinin kendisi tarafından alenileştirilmiş olması,
            Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin
            zorunlu olması, İlgili kişinin temek hak ve özgürlüklerine zarar
            vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri
            işlenmesinin zorunlu olması.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">
            5. KİŞİSEL VERİ SAHİPLERİNİN HAKLARI VE HAKLARIN KORUNMASI
          </h4>
          <p className="contentText mb-6">
            Kişisel veri sahipleri Kanun’un 11. maddesi uyarınca; Kişisel veri
            işlenip işlenmediğini öğrenme, Kişisel verileri işlenmişse buna
            ilişkin bilgi talep etme, Kişisel verilerin işlenme amacını ve
            bunların amacına uygun kullanılıp kullanılmadığını öğrenme, Yurt
            içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
            kişileri bilme, Kişisel verilerin eksik veya yanlış işlenmiş olması
            hâlinde bunların düzeltilmesini isteme, Kanun’un 7. maddesinde
            öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya
            yok edilmesini isteme, 5. ve 6. maddeler uyarınca yapılan
            işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere
            bildirilmesini isteme, İşlenen verilerin münhasıran otomatik
            sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi
            aleyhine bir sonucun ortaya çıkmasına itiraz etme, Kişisel verilerin
            kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde
            zararın giderilmesini talep etme, haklarına sahiptir. Söz konusu
            hakların kullanılması için, kişisel veri sahipleri tarafından VERİ
            SORUMLUSU’na, yazılı olarak veya Kişisel Verileri Koruma Kurulu
            tarafından belirlenecek diğer yöntemlerle başvurulması halinde,
            başvurular talebin niteliğine göre en kısa zamanda ancak her
            halükârda en geç 30 gün içerisinde sonuçlandırılır. VERİ
            SORUMLUSU’na başvuru için adres ve iletişim bilgileri aşağıda
            belirtilmiştir.
          </p>

          <h4 className="font-bold contentHeader text-lg mb-2">6. İLETİŞİM</h4>
          <p className="contentText mb-6">
            İşbu aydınlatma metni kapsamında yer alan hususlara ilişkin detaylı
            bilgilere T.C. KÜLTÜR VE TURİZM BAKANLIĞI Kişisel Verilerin
            Korunması ve İşlenmesi Politikasından ulaşılabilmektedir. Kanun’dan
            doğan haklarınızı kullanmak için, kimlik bilgilerinizi, kullanmak
            istediğiniz hakkı ve talebinizin konusunu anlatan detaylı
            açıklamanızı aşağıdaki linkteki formu doldurarak imzalı şekilde
            İSMET İNÖNÜ BULVARI NO:32 06100 EMEK ANKARA/TÜRKİYE adresine başvuru
            formunda belirtilen yollardan birini kullanarak gönderebilirsiniz.
            Ayrıntılı bilgiye başvuru formu ve +90 (312) 470 8000 iletişim hattı
            ile ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KVKKSection;
