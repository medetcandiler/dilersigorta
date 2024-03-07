import { FC, ReactNode } from "react";
import { Metadata } from "next";

interface INestedDescLayout {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Diler Sigorta | Ürünler",
};

const NestedDescLayout: FC<INestedDescLayout> = ({ children }) => {
  return <section>{children}</section>;
};

export default NestedDescLayout;
