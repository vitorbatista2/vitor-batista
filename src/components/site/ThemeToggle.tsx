import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const THEME_KEY = "vb-theme";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try { localStorage.setItem(THEME_KEY, next ? "dark" : "light"); } catch {}
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Desativar modo escuro" : "Ativar modo escuro"}
      onClick={toggle}
      className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-border bg-secondary p-0.5 transition-colors"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-card text-primary shadow-soft transition-transform duration-300 ${dark ? "translate-x-6" : "translate-x-0"}`}
      >
        {dark ? <Moon className="h-3.5 w-3.5" aria-hidden /> : <Sun className="h-3.5 w-3.5" aria-hidden />}
      </span>
    </button>
  );
}
