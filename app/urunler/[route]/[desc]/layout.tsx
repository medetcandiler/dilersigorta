import { FC, ReactNode } from "react";
interface INestedDescLayout {
  children: ReactNode;
}

const NestedDescLayout: FC<INestedDescLayout> = ({ children }) => {
  return <section>{children}</section>;
};

export default NestedDescLayout;
