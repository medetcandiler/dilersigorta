import React, { FC, ReactNode } from "react";
interface IDynamicProductPageProps {
  children: ReactNode;
}

const DynamicProductLayout: FC<IDynamicProductPageProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default DynamicProductLayout;
