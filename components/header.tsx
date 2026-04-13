"use client";
import Link from "next/link";
import Image from "next/image";
import { AppSidebar } from "./appSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { HomeAtom } from "@/store/atoms";

import { useAtomValue, useSetAtom } from "jotai";
import { use, useEffect, useState } from "react";
import { Button } from "./ui/button";
// import ThemeSwitch from "./themeSwitch";

const Header = () => {
  const isHome = useAtomValue(HomeAtom);
  const [hasScrolled, setHasScrolled] = useState(false);
  console.log(`home, ${isHome}`);
  const lastScrollY = window.scrollY;
  function detectScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    });
  }

  function activateWiggle() {
    const button = document.querySelector("#contact-button");

    if (button) {
      button.classList.add("animate-wiggle");
      setTimeout(() => {
        button.classList.remove("animate-wiggle");
      }, 1000); // Durée de l'animation en millisecondes
    }
  }

  useEffect(() => {
    detectScroll();
  }, []);

  useEffect(() => {
    activateWiggle();
  }, [activateWiggle()]);

  return (
    <header
      className={`w-full fixed top-0 z-50 flex items-center justify-between px-8 py-4 ${hasScrolled ? "transition-all duration-300 bg-background" : "transition-all duration-300 bg-transparent"} transition-all duration-300`}
    >
      <Link
        href="#accueil"
        className={` text-3xl font-medium flex w-fit  transform ${hasScrolled ? "transition-all duration-300 translate-y-0  " : "transition-all duration-300 -translate-y-50"}   `}
      >
        <Image
          src="/logoFolio.svg"
          alt="Logo"
          width={70}
          height={70}
          // className={`${isHome ? "hidden" : ""}`}
        />
      </Link>
      <nav className="w-full hidden">
        <ul className="flex justify-end gap-8 text-lg sm:text-xl font-medium">
          <li>
            <Link
              className="hover:underline text-lg sm:text-xl  "
              href="#projets"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline text-lg sm:text-xl "
              href="#expertises"
            >
              Expertises
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline text-lg sm:text-xl "
              href="#a-propos"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline text-lg sm:text-xl hover:bg-black hover:text-white transition-all duration-500  border-2 border-black p-4 rounded-full"
              href="#contact"
            >
              Me contacter
            </Link>
          </li>
        </ul>
      </nav>
      <Button variant="main" id="contact-button" className="sm:hidden">
        On discute ?
      </Button>
    </header>
  );
};

export default Header;
