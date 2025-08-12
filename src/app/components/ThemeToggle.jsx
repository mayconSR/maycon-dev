"use client";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const current = theme === "system" ? systemTheme : theme;
  return (
    <button
      type="button"
      aria-label="Alternar tema"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10"
    >
      {current === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
