import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-0 mb-3 w-28">
      <div
        className={`
        p-3
        py-3
        flex
        justify-between
        rounded-full
       bg-white
       dark:bg-black
       shadow-[0_0px_32px_1px_rgba(0,0,0,0.25)]
      `}
      >
        <ThemeSwitcher
          onClick={() => setTheme("dark")}
          active={theme === "dark"}
        >
          <MdOutlineDarkMode />
        </ThemeSwitcher>
        <ThemeSwitcher
          onClick={() => setTheme("light")}
          active={theme === "light"}
        >
          <MdOutlineLightMode />
        </ThemeSwitcher>
      </div>
    </div>
  );
}
