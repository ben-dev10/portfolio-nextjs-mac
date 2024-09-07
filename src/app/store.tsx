"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { useContext } from "react";
interface AppState {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<AppState | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};

/* context for count */
export const useCount = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useTheme must be used within an AppProvider");
  }

  return {
    theme: context.count,
    setTheme: context.count,
  };
};

export { AppContext, AppProvider };
