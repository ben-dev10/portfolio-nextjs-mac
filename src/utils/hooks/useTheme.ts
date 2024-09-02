// "use client";
// import { useEffect } from "react";

// /* call this hook from your root component */
// const useTheme = () => {
//   useEffect(() => {
//     /* Updates theme */
//     if (typeof window !== "undefined") {
//       const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
//       // remove any "dark" or "light" class before applying new theme
//       document.documentElement.classList.remove("dark", "light");
//       document.documentElement.classList.add(savedTheme);
//     }
//   }, []);
// };
// export default useTheme;

// "use client";
// import { useEffect, useContext } from "react";
// import { AppContext } from "../../app/store"; // Adjust the import path as needed

// const useTheme = () => {
//   const context = useContext(AppContext);

//   useEffect(() => {
//     if (typeof window !== "undefined" && context) {
//       // Remove any "dark" or "light" class before applying new theme
//       document.documentElement.classList.remove("dark", "light");
//       document.documentElement.classList.add(context.theme);
//     }
//   }, [context?.theme]);

//   return context?.theme;
// };

// export default useTheme;

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
