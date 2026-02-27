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
      <Link href="/" className=" text-3xl font-medium flex w-full  ">
        <Image
          src="/logoFolio.svg"
          alt="Logo"
          width={100}
          height={100}
          // className={`${isHome ? "hidden" : ""}`}
        />
      </Link>
      <nav className="w-full">
        <ul className="flex justify-end gap-8 text-lg font-medium">
          <li>
            <Link className="hover:underline " href="/projets">
              Projets
            </Link>
          </li>
          <li>
            <Link className="hover:underline " href="/competences">
              Compétences
            </Link>
          </li>
          <li>
            <Link className="hover:underline " href="/a-propos">
              À propos
            </Link>
          </li>
          <li>
            <Link className="hover:underline " href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
