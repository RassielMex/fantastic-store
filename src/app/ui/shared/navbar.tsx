"use client";
import { List, SunDim, Moon } from "@phosphor-icons/react/dist/ssr";
import { useTheme } from "next-themes";

export default function Navbar() {
  const theme = useTheme();
  const isDarkTheme = theme.theme;

  return (
    <div className="w-screen fixed top-0 left-0 z-10 hover:bg-background">
      <div className="container mx-auto p-6 flex justify-between">
        <List size={24} />
        <h1 className="font-semibold text-lg">FANTASTIC STORE</h1>

        {isDarkTheme === "dark" ? (
          <SunDim
            size={24}
            onClick={() => {
              theme.setTheme("light");
            }}
          />
        ) : (
          <Moon
            size={24}
            onClick={() => {
              theme.setTheme("dark");
            }}
          />
        )}
      </div>
    </div>
  );
}
