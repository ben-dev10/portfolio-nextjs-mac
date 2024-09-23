"use client";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/ui/button";
import { SheetUI } from "./sheetui";
import { usePathname } from "next/navigation";
import "./navbar.css";
import ThemeToggle from "./themeToggle";
import SocialLinkIcons from "./social-icons";
import { useTheme } from "next-themes";
import { NardLogo1, NardLogo2 } from "./ui/nardlogos";
import TooltipUI from "../TooltipUI";

function Logo() {
  const { theme } = useTheme();
  return (
    <div className="relative mx-auto size-[27px] md:ml-2">
      <Link href={"/"}>
        <NardLogo1 />
      </Link>
    </div>
  );
}

function Links() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  const NavLinks = [
    { id: 1, name: "Gallery", path: "/gallery" },
    { id: 2, name: "Work", path: "/work" },
    { id: 3, name: "Resources", path: "/resources" },
  ];

  return (
    <div className="hidden space-x-3 dark:text-slate-50 md:block">
      <ul className="flex list-none gap-2 text-foreground">
        {NavLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.path}
              id="navLink"
              className={`relative hover:text-accent dark:hover:text-violet-200 ${
                isActive(link.path) ? "active font-[600] text-violet-400" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="md:hidden">
      <SheetUI />
    </div>
  );
}

type work = { status: "away" | "available"; className?: string };

function Availability({ className, status }: work) {
  return (
    <div className={`available-for-work flex items-center gap-1 ${className}`}>
      <div
        className={`size-[8px] rounded-[100%] ${
          status == "available" ? "bg-green-500" : "bg-red-500"
        } `}
      >
        <p
          className={`indicator size-[8px] rounded-[100%] ${
            status == "available" ? "bg-green-500" : "bg-red-500"
          } animate-ping`}
        ></p>
      </div>
      {status == "available" ? <p>Available for work</p> : <p>Away</p>}
    </div>
  );
}

function CV() {
  return (
    <div>
      <a href="resume-v1.pdf">
        <Button
          variant="pill"
          size="pill"
          className="flex border-0 bg-accent px-2 py-[2px] text-accent text-white hover:ring-[4px] hover:ring-accent/30"
        >
          CV
          <Download size={14} className="ml-1" />
        </Button>
      </a>
    </div>
  );
}

// TODO: experimental expandable navbar
export default function NavBar() {
  return (
    <div className="header-wrapper font-normal border-b border-border bg-gray-50 dark:bg-gradient-to-bl dark:from-stone-950 dark:to-neutral-950">
      <div className="container-4xl h-[60px] w-full">
        <div className="primary-nav flex items-center gap-x-3 p-2 px-4 pl-[7px] pt-3 md:pt-4">
          <MenuIcon />
          <Logo />
          <Availability status="available" className="mr-2 hidden md:flex" />
          <CV />
          <Links />
          <div className="ml-2 hidden md:block">
            <TooltipUI
              trigger={<SocialLinkIcons GitHub />}
              content="github.io/ben-dev10"
              sideOffset={20}
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
      <div className="secondary-nav bg-slate-300/[.15] dark:bg-slate-700/[.15] md:hidden">
        <div className="wrapper container-4xl p-2 px-4">
          <Availability status="available" />
        </div>
      </div>
    </div>
  );
}
