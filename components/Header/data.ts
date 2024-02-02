import { products } from "@/data/products";

export const navLinks = [
  { label: "Anasayfa", hasChild: false },
  {
    label: "Ürünler",
    hasChild: true,
    child: products.map(product => product.title),
  },
  { label: "Hakkımızda", hasChild: false },
  { label: "Iletişim", hasChild: false },
];
