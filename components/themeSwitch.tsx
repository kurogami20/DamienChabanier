"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">Toggle theme</span>
      <Moon />
      <Switch
        defaultChecked
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />{" "}
      <Sun />
    </div>
  );
};

export default ThemeSwitch;
