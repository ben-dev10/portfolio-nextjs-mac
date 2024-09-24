import { Button } from "@/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "@/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { BadgeEuroIcon, BookCopy, BookCopyIcon, Building2, GalleryVertical, Home } from "lucide-react";
import "./navbar.css";
import SocialLinkIcons from "./social-icons";
import { usePathname } from "next/navigation";
import { NardLogo2 } from "./ui/nardlogos";
import MenuIcon from "../menu-icon";

export function SheetUI() {
  const SheetNavLinks = [
    { id: 1, name: "Home", path: "/", icon: <Home size={16} /> },
    {
      id: 2,
      name: "Gallery",
      path: "/gallery",
      icon: <GalleryVertical size={16} />,
    },
    { id: 3, name: "Work", path: "/work", icon: <Building2 size={16} /> },
    {
      id: 4,
      name: "Resources",
      path: "/resources",
      icon: <BookCopyIcon size={16} />,
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
      icon: <BookCopy size={16} />,
    },
    {
      id: 6,
      name: "Pricing",
      path: "/pricing",
      icon: <BadgeEuroIcon size={16} />,
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <div className="">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="bg-transparent px-2 py-[6px] shadow-none hover:bg-gray-100 dark:hover:bg-neutral-500/10">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="fixed bottom-0 left-[0px] top-[0px] z-[9999] flex h-screen w-full flex-col bg-white/[.88] p-5 pl-3 pt-3 backdrop-blur-[20px] dark:bg-black/[.84] md:hidden md:max-w-full"
        >
          <div className="links mx-auto mb-auto flex w-[90%] max-w-[450px] flex-col gap-3 text-[13px]">
            <div className="icons flex justify-end pb-2">
              <div className="absolute right-[25px]">
                <SocialLinkIcons GitHub X />
              </div>
            </div>
            <div className="line-wrapper absolute left-0 mt-8 h-1 w-full">
              <div className="line mx-auto w-[100%] border-b border-border" />
            </div>
            <div onClick={handleClick} className="mt-8 space-y-3">
              {SheetNavLinks.map((link) => (
                <li key={link.id} className="list-none">
                  <Link
                    href={link.path}
                    id="navLink"
                    className={`sheet-link hover:bg-accent hover:text-white dark:hover:text-violet-200 ${
                      isActive(link.path)
                        ? "active bg-violet-500 font-[600] text-white"
                        : ""
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </div>
            <div className="mt-[30%] border-t p-3">
              <NardLogo2 className="w-[100px]" />
              <p className="mt-1">2024 - present</p>
            </div>
          </div>

          <SheetFooter className="relative">
            <div className="w-full bg-gradient-to-r from-teal-300 via-green-400 to-blue-400"></div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
