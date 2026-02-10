import { AppSidebar } from "./appSidebar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
      </SidebarProvider>
      <h1>Damien Chabanier Portfolio</h1>
    </header>
  );
};

export default Header;
