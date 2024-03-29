import { FC } from "react";
import { IArrowProps } from "./interface";

const Arrow: FC<IArrowProps> = ({
  color,
  type,
  width,
  height,
  isChildArrow,
}) => {
  let style = "";
  if (type === "down") {
    style = "group-hover/:fill-[#0E7AB3]";
  } else if (type === "left") {
    style = "rotate-90";
  } else if (type === "right") {
    style = "-rotate-90";
  }

  return (
    <svg
      className={`child transition duration-300 group-hover/second:fill-[#0E7AB3] ${style} ${
        isChildArrow ? "" : "group-hover/edit:fill-[#0E7AB3]"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 448 512"
      fill={color}
    >
      <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  );
};

export default Arrow;
