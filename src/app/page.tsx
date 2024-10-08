import AboutSection from "./components/main-sections/about-section";
import ContactSection from "./components/main-sections/contact-section";
import FeaturesSection from "./components/main-sections/features-section";
import HeroSection from "./components/main-sections/hero-section";
import ShowcaseSection from "./components/main-sections/showcase-section";

export default function Home() {
  return (
    <main>
      <div className="">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
