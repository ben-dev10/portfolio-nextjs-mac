import Image from "next/image";
import hero1 from "public/hero-images/hero-1.png";
import hero2 from "public/hero-images/hero-2.png";
import hero3 from "public/hero-images/hero-3.png";
import HeroCtaButton from "@/ui/hero-cta-btn";
import SectionHeading from "../section-heading";
import { gradientText } from "@/utils/ui-helpers";

export default function HeroSection() {
  return (
    <div className="hero-section wrapper container-4xl relative overflow-hidden p-5 pb-0 pt-[60px]">
      <Image
        src="bg-grid-main.svg"
        alt="grid background image"
        width={488}
        height={366.01}
        className="bg-grid absolute left-[50%] -z-10 -translate-x-1/2 -translate-y-[16%] opacity-70 dark:opacity-[.15]"
      />
      <div className="gradient-blob absolute -z-20 left-[50%] h-[400px] w-[540px] -translate-x-1/2 dark:opacity-40" />
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <SectionHeading
          hElement="h1"
          className="text-3xl"
          subheading="My name is Ben, and I love to design and build stunning, performant
          and secure UIs for various platforms, but primarily for websites."
          title={
            <span>
              Crafting stunning and performant UIs, One{" "}
              <span
                className={`font-pixelify !font-[500] dark:![background-image:linear-gradient(to_bottom_right,#DEBBF3,#8DB4FF)]`}
                style={gradientText(
                  "linear-gradient(to bottom right, #8DB4FF, #BA64EE)",
                )}
              >
                pixel
              </span>{" "}
              at a time.
            </span>
          }
        />
        <div className="ctas my-8 mt-5">
          <HeroCtaButton />
        </div>
      </div>
      <div className="hero-images relative mx-auto mt-5 w-[300px]">
        <div className="min-h-[300px]">
          <Image
            src={hero2}
            width={406}
            alt="hero-image-2"
            className="back md:w-506 absolute shadow-xl shadow-gray-400"
          />
          <Image
            src={hero1}
            width={318}
            alt="hero-image-1"
            className="middle md:w-418 absolute left-[-70px] top-10 mx-auto shadow-xl shadow-pink-200"
          />
          <Image
            src={hero3}
            width={321}
            alt="hero-image-3"
            className="front md:w-421 absolute left-[70px] top-20 shadow-xl shadow-blue-200"
          />
        </div>
      </div>
    </div>
  );
}
