import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--text-secondary) transition-all 
      duration-300 hover:-translate-y-0.5 hover:border-(--border-hover) hover:text-(--primary) hover:shadow-(--shadow) focus:outline-none focus:ring-2 focus:ring-(--primary)"
    >
      {isDark ? (
        <Sun size={18} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={18} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}

export default ThemeToggle;
