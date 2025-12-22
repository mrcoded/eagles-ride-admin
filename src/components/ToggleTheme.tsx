import { useState } from "react";
import { LucideMoon, LucideSun } from "lucide-react";

import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";

export function ToggleTheme() {
  const { setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Button
      variant="link"
      onClick={toggleTheme}
      className="flex items-center py-2 px-3 text-slate-50 lg:text-slate-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:font-semibold hover:text-primary rounded-md transition-colors cursor-pointer"
    >
      {isDarkMode ? (
        <LucideMoon className="size-3.5" />
      ) : (
        <LucideSun className="size-3.5" />
      )}
      <span className="ml-3 font-medium text-sm">
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </Button>
  );
}
