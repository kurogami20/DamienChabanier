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
      <SidebarTrigger
        // isOpen={true}
        className={`cursor-pointer [&_svg:not([class*='size-'])]:size-6 self-end  my-8 mx-8`}
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
