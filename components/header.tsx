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
      className={` flex  top-0 w-full py-8 ${isHome ? " fixed px-8 " : "sticky bg-background px-5"}  items-center   `}
    >
      <SidebarProvider className="min-h-fit max-w-fit flex items-center ">
        <SidebarTrigger
          className={`cursor-pointer [&_svg:not([class*='size-'])]:size-6 self-end  ${isHome ? "color_main hover:bg-transparent" : ""}`}
        />
        <AppSidebar />
      </SidebarProvider>
      <Link
        href="/"
        className=" text-3xl font-medium flex w-full justify-center "
      >
        <Image
          src="/logoFolio.svg"
          alt="Logo"
          width={200}
          height={200}
          className={`${isHome ? "hidden" : ""}`}
        />
      </Link>
    </header>
  );
};

export default Header;
