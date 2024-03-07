import { products } from "@/data/products";

export const navLinks = [
  { label: "Anasayfa", hasChild: false, href: "/", isVisibleOnMd: false },
  {
    label: "Ürünler",
    hasChild: true,
    child: products.map((product) => product.route),
    href: "/urunler",
    isVisibleOnMd: true,
  },
  {
    label: "Hakkımızda",
    hasChild: false,
    href: "/hakkimizda",
    isVisibleOnMd: true,
  },
  {
    label: "İletişim",
    hasChild: false,
    href: "/iletisim",
    isVisibleOnMd: true,
  },
  {
    label: "Faydalı Linkler",
    hasChild: false,
    href: "/faydalilinkler",
    isVisibleOnMd: true,
  },
];
