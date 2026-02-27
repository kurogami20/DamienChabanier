import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AtSign, Blocks, FolderCode, UserRoundSearch } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  const menuItems = [
    { name: "Projets", icon: <FolderCode /> },
    { name: "Compétences", icon: <Blocks /> },
    { name: "À propos", icon: <UserRoundSearch /> },
    { name: "Contact", icon: <AtSign /> },
  ];

  return (
    <Sidebar className="border-r-[#880036]">
      <svg
        width="100"
        height="50"
        viewBox="0 0 559 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Logo and link to return home</title>
        <path
          d="M224.989 0C233.274 0 239.989 6.71573 239.989 15V252C239.989 260.284 233.274 267 224.989 267H15C6.71573 267 0 260.284 0 252V216.803C0 208.518 6.71573 201.803 15 201.803H159.792C168.076 201.803 174.792 195.087 174.792 186.803V80.1973C174.792 71.913 168.076 65.1973 159.792 65.1973H15C6.71572 65.1973 0 58.4815 0 50.1973V15C0 6.71573 6.71573 0 15 0H224.989Z"
          fill="#FFFFFF"
        />
        <path
          d="M333.537 0C325.253 0 318.537 6.71573 318.537 15V252C318.537 260.284 325.253 267 333.537 267H543.526C551.811 267 558.526 260.284 558.526 252V216.803C558.526 208.518 551.811 201.803 543.526 201.803H398.735C390.451 201.803 383.735 195.087 383.735 186.803V80.1973C383.735 71.913 390.451 65.1973 398.735 65.1973H543.526C551.811 65.1973 558.526 58.4815 558.526 50.1973V15C558.526 6.71573 551.811 0 543.526 0H333.537Z"
          fill="#FFFFFF"
        />
        <ellipse cx="279.5" cy="127" rx="32.5" ry="33" fill="#FFFFFF" />
        <rect x="55" y="101" width="65" height="65" rx="15" fill="#FFFFFF" />
      </svg>
      <SidebarTrigger
        // isOpen={true}
        className={`cursor-pointer [&_svg:not([class*='size-'])]:size-6 self-end  my-8 mx-8 rotate-180`}
      />
      <SidebarHeader className="flex flex-col " />

      <SidebarContent className="mx-2">
        <SidebarMenu className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <Link href={item.name.toLowerCase()} className="  ">
                <SidebarMenuButton className="font-medium [&_svg:not([class*='size-'])]:size-5 flex items-center gap-3 text-base cursor-pointer">
                  {" "}
                  {item.icon} {item.name}
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
