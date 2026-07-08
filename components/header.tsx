"use client";
import { useEffect, useState } from "react";

import { myTitleFont } from "@/app/font";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-16 flex items-center  px-20 py-2 fixed top-0 z-50 transition-colors duration-300 hidden  ${
        isScrolled ? "bg-(--main-color)" : "bg-transparent"
      } selection:bg-(--sec-color) selection:text-(--main-color)!  `}
    >
      <nav className="flex  gap-6 items-center w-full justify-between">
        <a href="/">
          <h1
            className={`${myTitleFont.className} md:text-3xl text-(--sec-color) ${isScrolled ? "block" : "hidden"} font-normal`}
          >
            Damien Chabanier
          </h1>
        </a>
        <span className="flex gap-6 items-center max-w-full  font-semibold">
          <a href="/" className=" text-lg! xl:text-xl text-(--sec-color) ">
            Qui suis-je ?
          </a>
          <a href="/about" className="text-lg! xl:text-xl text-(--sec-color)">
            Jusqu'à maintenant
          </a>
          <button
            className="border-solid border-2 border-(--sec-color) ml-6 rounded-md px-6 py-1 cursor-pointer"
            type="button"
          >
            <a
              href="/projects"
              className="text-lg! xl:text-xl text-(--sec-color)  "
            >
              On discute ?
            </a>
          </button>
        </span>
      </nav>
    </header>
  );
};

export default Header;
