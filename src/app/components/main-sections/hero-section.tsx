import { Text } from "@/ui/text/text";
import Image from "next/image";
import hero1 from "public/hero-images/hero-1.png";
import hero2 from "public/hero-images/hero-2.png";
import hero3 from "public/hero-images/hero-3.png";
import HeroCtaButton from "@/ui/hero-cta-btn";

export default function HeroSection() {
  return (
    <div className="hero-section wrapper container-4xl relative overflow-hidden p-5 pb-0 pt-[60px]">
      <img
        src="bg-grid-main.svg"
        className="bg-grid absolute left-[50%] -z-10 -translate-x-1/2 -translate-y-[16%] dark:opacity-[.15]"
      />
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <Text as="h1" size="h1" className="text-3xl text-foreground-secondary">
          Crafting stunning and performant UIs, One{" "}
          <span className="[font-family:Pixelify_Sans]">pixel</span> at a time.
        </Text>
        <p className="">
          My name is Ben, and I love to design and build stunning, performant
          and secure UIs for various platforms, but primarily for websites.
        </p>
        <div className="ctas my-8 flex justify-center">
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
