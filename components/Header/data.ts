import { products } from "@/data/products";

export const navLinks = [
  { label: "Anasayfa", hasChild: false, href: "/" },
  {
    label: "Ürünler",
    hasChild: true,
    child: products.map((product) => product.title),
    href: "/urunler",
  },
  { label: "Hakkımızda", hasChild: false, href: "/hakkimizda" },
  { label: "İletişim", hasChild: false, href: "/iletisim" },
  { label: "Faydalı Linkler", hasChild: false, href: "/faydalilinkler" },
];
