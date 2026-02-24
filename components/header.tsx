import Link from "next/link";
import Image from "next/image";
import { AppSidebar } from "./appSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import type { PrimitiveAtom } from "jotai";
// import ThemeSwitch from "./themeSwitch";

interface HeaderProps {
  isHome: boolean;
}

const Header = ({ isHome }: HeaderProps) => {
  console.log(`home, ${isHome}`);
  return (
    <header className={` flex fixed w-full ${isHome ? "py-8 px-8" : "py-2"}`}>
      <SidebarProvider className="min-h-fit max-w-fit flex items-center ">
        <SidebarTrigger
          className={`cursor-pointer [&_svg:not([class*='size-'])]:size-6 self-end mb-5 ${isHome ? "color_main hover:bg-transparent" : ""}`}
        />
        <AppSidebar />
      </SidebarProvider>
      <Link href="/" className=" text-3xl font-medium ">
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
