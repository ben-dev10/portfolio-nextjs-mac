"use client"
import React from "react";
import "../navbar.css";
import { useTheme } from "next-themes";

export const Nard1LogoDark = () => {
  let { theme } = useTheme();
  return (
    <div className={`dark-svg absolute size-[27px]`}>
      <svg
        viewBox="0 0 27 27"
        className={`${theme === "light" ? "hidden" : ""}`}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="12.09"
            y1="11.81"
            x2="11.41"
            y2="35.64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#333" stopOpacity="0.8" />
            <stop offset="0.14" stopColor="#222" stopOpacity="0.87" />
            <stop offset="0.36" stopColor="#0f0f0f" stopOpacity="0.94" />
            <stop offset="0.63" stopColor="#040404" stopOpacity="0.99" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="3.74"
            y1="8.98"
            x2="27"
            y2="8.98"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#ba9bc9" />
            <stop offset="1" stopColor="#29abe2" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1a"
              d="M23.85,22.16A13.5,13.5,0,0,1,.65,9.37a10.53,10.53,0,0,1,.46-1.22C2,8.54,2.94,9,3.85,9.38c-.13.29-.24.59-.35.91a10.5,10.5,0,0,0,18.06,9.94C22.34,20.87,23.11,21.52,23.85,22.16Z"
            />
            <path
              className="cls-2a"
              d="M26.35,17.63a3.21,3.21,0,0,1-.12.33c-.83-.69-1.68-1.36-2.53-2a10.48,10.48,0,0,0-17-10.42c-1-.46-1.94-.91-2.94-1.33A13.49,13.49,0,0,1,26.35,17.63Z"
            />
            <path
              fill="#eefffb"
              d="M8.49,19c0-1,.07-3.26.07-4.62V13.11c0-1.21,0-1.67-.07-2.55l-1.34-.2V9.49L11.49,8l.37.24.21,2.44v3.67c0,1.36,0,3.63.06,4.62Zm4.64-1v1H7.34V18l2-.44h1.68Zm5.56-6.16v2.56c0,1.41,0,3.63.07,4.62H15.12c0-1,.06-3.21.06-4.62V12.07c0-1.41-.35-1.91-1.23-1.91a4,4,0,0,0-2.71,1.61h-.75V10.35H12l-.84.62C12.68,8.74,13.94,8,15.52,8,17.42,8,18.69,9.28,18.69,11.82Zm-1,5.72,2.15.44v1H14V18l2-.44Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
export const Nard1LogoLight = () => {
  let { theme } = useTheme();
  return (
    <div
      className={`light-svg absolute size-[27px]`}
    >
      <svg
        viewBox="0 0 27 27"
        className={`${theme === "dark" ? "hidden" : ""}`}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="12.09"
            y1="11.81"
            x2="11.41"
            y2="35.64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#333" stopOpacity="0.8" />
            <stop offset="0.14" stopColor="#222" stopOpacity="0.87" />
            <stop offset="0.36" stopColor="#0f0f0f" stopOpacity="0.94" />
            <stop offset="0.63" stopColor="#040404" stopOpacity="0.99" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="3.74"
            y1="8.98"
            x2="27"
            y2="8.98"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#ba9bc9" />
            <stop offset="1" stopColor="#29abe2" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="cls-1b"
              d="M23.85,22.16A13.5,13.5,0,0,1,.65,9.37a10.53,10.53,0,0,1,.46-1.22C2,8.54,2.94,9,3.85,9.38c-.13.29-.24.59-.35.91a10.5,10.5,0,0,0,18.06,9.94C22.34,20.87,23.11,21.52,23.85,22.16Z"
            />
            <path
              className="cls-2b"
              d="M26.35,17.63a3.21,3.21,0,0,1-.12.33c-.83-.69-1.68-1.36-2.53-2a10.48,10.48,0,0,0-17-10.42c-1-.46-1.94-.91-2.94-1.33A13.49,13.49,0,0,1,26.35,17.63Z"
            />
            <path d="M8.49,19c0-1,.07-3.26.07-4.62V13.11c0-1.21,0-1.67-.07-2.55l-1.34-.2V9.49L11.49,8l.37.24.21,2.44v3.67c0,1.36,0,3.63.06,4.62Zm4.64-1v1H7.34V18l2-.44h1.68Zm5.56-6.16v2.56c0,1.41,0,3.63.07,4.62H15.12c0-1,.06-3.21.06-4.62V12.07c0-1.41-.35-1.91-1.23-1.91a4,4,0,0,0-2.71,1.61h-.75V10.35H12l-.84.62C12.68,8.74,13.94,8,15.52,8,17.42,8,18.69,9.28,18.69,11.82Zm-1,5.72,2.15.44v1H14V18l2-.44Z" />
          </g>
        </g>
      </svg>
    </div>
  );
};
