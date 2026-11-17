"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  attribute?: string;
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  attribute = "class",
}: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    let initialTheme: Theme;

    if (storedTheme === "light" || storedTheme === "dark") {
      initialTheme = storedTheme;
    } else if (defaultTheme === "system" && enableSystem) {
      initialTheme = systemTheme;
    } else if (defaultTheme === "dark") {
      initialTheme = "dark";
    } else {
      initialTheme = "light";
    }

    setTheme(initialTheme);
  }, [defaultTheme, enableSystem]);

  useEffect(() => {
    const root = document.documentElement;
    if (attribute === "class") {
      root.classList.toggle("dark", theme === "dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [attribute, theme]);

  const value = React.useMemo(
    () => ({ theme, setTheme }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}