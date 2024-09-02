"use client";
import { useEffect, useContext } from "react";
import { AppContext } from "../../app/store";

const useTheme = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useTheme must be used within an AppProvider");
  }

  return {
    theme: context.theme,
    setTheme: context.setTheme,
  };
};

export default useTheme;
