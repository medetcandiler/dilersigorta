import React, { FC, ReactNode } from "react";
import { Metadata } from "next";

interface IDynamicProductPageProps {
  children: ReactNode;
}

const DynamicProductLayout: FC<IDynamicProductPageProps> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default DynamicProductLayout;
