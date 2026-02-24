import Link from "next/link";
import Image from "next/image";
import { AppSidebar } from "./appSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
// import ThemeSwitch from "./themeSwitch";

const Header = () => {
  return (
    <header className=" py-2 flex fixed w-full relative">
      <SidebarProvider className="min-h-fit max-w-fit flex items-center ">
        <SidebarTrigger className="cursor-pointer [&_svg:not([class*='size-'])]:size-6 self-end mb-5 " />
        <AppSidebar />
      </SidebarProvider>
      <Link href="/" className=" text-3xl font-medium ">
        <Image
          src="/logoFolio.svg"
          alt="Logo"
          width={200}
          height={200}
          className=""
        />
      </Link>
    </header>
  );
};

export default Header;
