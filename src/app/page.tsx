import { Text } from "@/ui/text/text";
import Image from "next/image";
import hero1 from "public/hero-images/hero-1.png";
import hero2 from "public/hero-images/hero-2.png";
import hero3 from "public/hero-images/hero-3.png";
import HeroCtaButton from "./ui/hero-cta-btn";

export const HeroSection = () => {
  return (
    <div className="hero wrapper p-5 overflow-hidden pb-0 container-4xl">
      <div className="max-w-[660px] mx-auto mb-10">
        <Text as="h1" size="h1" className="text-3xl text-foreground-secondary ">
          Crafting stunning and performant UIs, One{" "}
          <span className="[font-family:Pixelify_Sans]">pixel</span> at a time.
        </Text>
        <p className="">
          My name is Ben, and I love to design and build stunning, performant
          and secure UIs for various platforms, but primarily for websites.
        </p>
        <div className="ctas my-8">
          <HeroCtaButton />
        </div>
      </div>
      <div className="hero-images relative w-[300px] mx-auto mt-5">
        <div className=" min-h-[300px] ">
          <Image
            src={hero2}
            width={406}
            alt="hero-image-2"
            className="absolute back md:w-506 shadow-xl shadow-gray-400"
          />
          <Image
            src={hero1}
            width={318}
            alt="hero-image-1"
            className="absolute top-10 mx-auto middle left-[-70px] md:w-418 shadow-xl shadow-pink-200"
          />
          <Image
            src={hero3}
            width={321}
            alt="hero-image-3"
            className="absolute front left-[70px] top-20 md:w-421 shadow-xl shadow-blue-200"
          />
        </div>
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <div className="about-section bg-gray-100 dark:bg-stone-600">
      <div className="wrapper container-4xl h-[200px] p-6">About</div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
