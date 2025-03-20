"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) return null;

  return (
    <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className=" cursor-pointer  p-2 text-2xl transition-transform duration-300 hover:scale-110"
  >
    {theme === "dark" ? "☀️" : "🌙"}
  </button>
  );
}
