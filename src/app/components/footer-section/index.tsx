"use client";
import Image from "next/image";
import nardLogo from "public/logos/nard-logo-2b.svg";
import SocialLinkIcons from "../navbar/social-icons";
import { ExternalLink } from "lucide-react";
import { footerLinksData } from "./footerLinksData";
import nardLogoLarge from "public/logos/nard-logo-1.svg";
import { useContext } from "react";
// import { AppContext } from "../../store";
import nardLogoDark from "public/logos/nard-logo-1-darkmode.svg";
import { useAppContext } from "@/utils/hooks/useAppContext";

export const FooterLinks = () => {
  return (
    <div className="footer-links flex flex-wrap gap-8 gap-x-10 md:flex-nowrap md:gap-x-8">
      {footerLinksData.map((dataMain) => (
        <div key={dataMain.id}>
          <p className="mb-[6px] text-14px font-bold">{dataMain.header}</p>
          <ul className="flex flex-col gap-1">
            {dataMain["links"].map((data) => (
              <a
                href={data.link}
                key={data.id}
                className={`flex items-center hover:underline ${
                  data.special ? "text-accent" : ""
                }`}
              >
                {data.text}
                {data.externalink ? (
                  <ExternalLink size={12} className="ml-[3px]" />
                ) : (
                  ""
                )}
              </a>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const FooterHeader = () => {
  // const context = useContext(AppContext);
  // if (!context) {
  //   throw new Error("useContext must be used within an AppProvider");
  // }
  // const { theme } = context;

  return (
    <div>
      <div className="">
        <Image src={nardLogo} width={nardLogo} alt="Brand Logo" />
        <p className="mt-3">
          Crafting stunning and performant digital experiences, One Pixel at a
          time. Built by
          <span className="">
            <a href="#" className="pl-1 text-accent underline">
              nard
            </a>{" "}
            from
            <Image
              src="/gh-flag.png"
              width={13}
              height={13}
              alt="Ghana Flag"
              className="ml-1 inline"
            />
          </span>
        </p>
      </div>
    </div>
  );
};

export const FooterData = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} max-w-[300px]`}>
      <div className="mb-2">
        <p>&copy; 2024 - 2024. All rights reserved. </p>
      </div>
      <div className="mt-3">
        <SocialLinkIcons GitHub X />
      </div>
    </div>
  );
};

export const MobileFooter = () => {
  return (
    <div className="mt-3 pb-10 md:hidden">
      <FooterHeader />
      <FooterData className="mt-8" />

      <div className="footer-links mt-[50px]">
        <FooterLinks />
      </div>
    </div>
  );
};

export const DesktopFooter = () => {
  return (
    <div className="hidden gap-[55px] md:flex">
      <div className="flex flex-col justify-between">
        <div className="max-w-[355px]">
          <FooterHeader />
        </div>
        <div className="">
          <FooterData />
        </div>
      </div>
      <div className="footer-links pb-[50px]">
        <FooterLinks />
      </div>
    </div>
  );
};

// TODO: dark theme optimize
export default function Footer() {
  // const context = useContext(AppContext);

  // if (!context) {
  //   throw new Error("useContext must be used within an AppProvider");
  // }

  // const { theme } = context;

  const { theme } = useAppContext();

  return (
    <div className="wrapper border-t border-border bg-white dark:bg-zinc-900">
      <div className="container-4xl group relative mt-4 overflow-hidden p-5 pb-[120px] md:pb-[160px]">
        <div className="absolute bottom-[-70px] right-[5%] md:bottom-[-100px]">
          <Image
            src={theme === "light" ? nardLogoLarge : nardLogoDark}
            className="duration-400 w-[150px] grayscale transition group-hover:grayscale-0 md:w-[200px]"
            width={nardLogoLarge}
            alt="large nard brand logo"
          />
        </div>
        <MobileFooter />
        <DesktopFooter />
      </div>
    </div>
  );
}
