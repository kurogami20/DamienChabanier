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
      <SidebarHeader className="flex flex-col " />

      <SidebarContent className="mx-2">
        <SidebarMenu className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton className="cursor-pointer font-medium [&_svg:not([class*='size-'])]:size-5 flex items-center gap-3">
                {" "}
                <Link
                  href={item.name.toLowerCase()}
                  className=" font-medium [&_svg:not([class*='size-'])]:size-5 flex items-center gap-3 text-base"
                >
                  {item.icon} {item.name}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
