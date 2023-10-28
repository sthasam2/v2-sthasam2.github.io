"use client";

import { Laptop2, LucideIcon, LucideProps, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/tailwind.utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Icon, IconNameOptions } from "../ui/icon";

type ThemeOption = {
  theme: string;
  icon: IconNameOptions;
  label: string;
};

const THEME_OPTIONS: ThemeOption[] = [
  { theme: "light", icon: "Sun", label: "Light" },
  { theme: "dark", icon: "MoonStar", label: "Dark" },
  { theme: "system", icon: "Laptop2", label: "System" },
];

export const ThemeSwitcher = () => {
  const { theme: currentTheme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 duration-500" />
          <MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-500" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {THEME_OPTIONS.map((themeOptions, index) => {
          const isActive = themeOptions.theme === currentTheme;
          return (
            <DropdownMenuItem
              key={index}
              onClick={() => setTheme(themeOptions.theme)}
              className={cn(isActive && "font-bold bg-accent/70", "space-x-3")}
            >
              <span>
                <Icon
                  name={themeOptions.icon}
                  strokeWidth={isActive ? 2 : 1}
                />
              </span>
              <span>{themeOptions.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
