"use client";
import { FC, MouseEvent, useState, useEffect } from "react";
import Image from "next/image";

const GoToTopButton: FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > window.innerHeight) {
      setIsOpened(true);
    } else if (scrolled <= 600) {
      setIsOpened(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisible);
    }

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Image
      onClick={handleClick}
      className={`fixed  px-3 py-2 rounded-full transition duration-500 ease-out z-50 bottom-6 right-1 md:right-4 cursor-pointer hover:-translate-y-[3px] hover:opacity-85 ${
        isOpened ? "translate-y-0 opacity-1" : "-translate-y-[100vh] opacity-0"
      } `}
      src="/icons/arrowUp.svg"
      width={65}
      height={65}
      alt="diler sigorta go to top button"
    ></Image>
  );
};

export default GoToTopButton;
