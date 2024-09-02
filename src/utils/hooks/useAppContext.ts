"use client";
import { useContext } from "react";
import { AppContext } from "@/app/store";

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used with an AppProvider");
  }
  return context;
};
