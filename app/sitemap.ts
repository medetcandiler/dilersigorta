import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = [
    "",
    "hakkmizda",
    "iletisim",
    "faydalilinkler",
    "kvkk-aydinlatma-metni",
    "kullanim-sartlari",
    "urunler/saglik",
    "urunler/arac",
    "urunler/konut",
    "urunler/isyeri",
    "urunler/muhendislik",
    "urunler/nakliyat",
  ];

  return slugs.map((slug) => {
    return {
      url: `https://www.dilersigorta.com/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    };
  });
}
