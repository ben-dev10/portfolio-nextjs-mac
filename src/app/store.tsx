"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AppState {
  count: number;
  theme: string;
  setTheme: (arg0: string) => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppState | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<string>("light"); // Set a default theme

  useEffect(() => {
    // Check if there is a saved theme preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme preferences whenever it changes
    localStorage.setItem("portfolio-theme", theme);
    // Apply theme
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <AppContext.Provider value={{ theme, setTheme, count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
