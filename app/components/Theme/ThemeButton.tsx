import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div>
      <ThemeSwitcher onClick={() => setTheme("dark")}>Dark</ThemeSwitcher>
      <ThemeSwitcher onClick={() => setTheme("light")}>Light</ThemeSwitcher>
    </div>
  );
}
