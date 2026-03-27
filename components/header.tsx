"use client";
import Link from "next/link";
import Image from "next/image";
import { AppSidebar } from "./appSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { HomeAtom } from "@/store/atoms";

import { useAtomValue, useSetAtom } from "jotai";
// import ThemeSwitch from "./themeSwitch";

const Header = () => {
  const isHome = useAtomValue(HomeAtom);
  console.log(`home, ${isHome}`);
  return (
    <header
      className={` flex  top-0 w-full py-5 ${isHome ? " fixed px-8 " : "sticky bg-background px-5"}     items-center justify-between z-50 `}
    >
      <div className="absolute bg-[#fff5de] opacity-20 w-full h-full top-0 left-0 z-[-1]  " />
      <Link href="#accueil" className=" text-3xl font-medium flex w-full  ">
        <Image
          src="/logoFolio.svg"
          alt="Logo"
          width={100}
          height={100}
          // className={`${isHome ? "hidden" : ""}`}
        />
      </Link>
      <nav className="w-full">
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
    </header>
  );
};

export default Header;
