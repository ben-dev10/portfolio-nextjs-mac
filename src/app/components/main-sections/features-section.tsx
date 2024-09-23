import { Text } from "@/ui/text/text";
import SectionHeading from "../section-heading";
import {
  AppWindowIcon,
  HardHat,
  Megaphone,
  Paintbrush,
  Sparkle,
} from "lucide-react";

export const FeatureCard = ({
  url,
  title,
  description,
  icon,
  x,
  badge,
}: {
  url: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  x?: boolean;
  badge?: boolean;
}) => {
  return (
    <div
      style={{
        backgroundImage: url,
        backgroundPosition: "center center",
      }}
      className="feature-card shadow-lg flex min-h-[200px] w-[160px] shrink-0 flex-col rounded-md p-5 text-13px text-white"
    >
      <div className="flex">
        <div className="icon grid size-[40px] place-items-center rounded-md bg-white">
          {icon}
        </div>
        <div className="ml-auto">
          {badge && (
            <div className="badge ml-auto flex h-[22px] w-[40px] justify-center rounded-[3px] border border-white/50 bg-[rgb(111,_229,_52)] text-white">
              New
            </div>
          )}
        </div>
      </div>
      <p className="text-shadow mt-auto text-12px font-[600] text-blue-100">
        <span className={`${x ? "text-shadow text-yellow-100" : ""}`}>
          {title}
        </span>
      </p>
      <p className="font-[600] leading-tight">
        <span className={`${x ? "text-white-100 text-shadow" : ""}`}>
          {description}
        </span>
      </p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <div
      className="features-section dark:![background-image:url('/bg-designs/dark_perspective-lines.png')] bg-white dark:bg-[#17171A]"
      style={{
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="wrapper container-4xl p-6 py-[70px]">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            hElement="h1"
            className="text-3xl"
            title="Looking for web and design services? Look no further."
            subheading=" I can help you get your website online in a flash, all you have to
            do is to brief me on what you want and leave the rest to me."
          />
        </div>
        <div className="mt-5">
          <p className="mx-auto mb-5 flex max-w-max justify-center gap-1 rounded-full bg-accent/10 p-1 px-3 text-center text-accent dark:bg-violet-700/20 dark:text-purple-300">
            <Sparkle
              size={16}
              className="text-purple-900 dark:text-purple-400"
            />
            What&apos;s Included
          </p>
          <div className="flex gap-5 overflow-x-scroll pb-8 md:justify-center">
            <FeatureCard
              url="url(bg-designs/bg-design-1.png)"
              title="Web Design"
              description="Custom designs"
              icon={
                <AppWindowIcon size={25} className="shrink-0 text-gray-500" />
              }
            />
            <FeatureCard
              url="url(bg-designs/bg-design-2.png)"
              title="Graphic Design"
              description="Flyers, banners, product designs..."
              icon={<Paintbrush size={25} className="shrink-0 text-teal-400" />}
              x={true}
            />
            <FeatureCard
              url="url(bg-designs/bg-design-3.png)"
              title="Engineering"
              description="CAD Modelling & Design"
              icon={<HardHat size={25} className="shrink-0 text-yellow-400" />}
              badge={true}
            />
            <div
              style={{
                backgroundImage: "url(bg-designs/bg-design-4.png)",
                backgroundPosition: "center center",
              }}
              className="feature-card flex min-h-[200px] w-[160px] shrink-0 flex-col rounded-md p-5 text-13px text-white shadow-lg"
            >
              <div className="badge flex justify-center rounded-md border border-gray-400 bg-black/80 p-1 px-2 text-white">
                Coming Soon
                <Megaphone size={17} className="text-slate-100" />
              </div>
              <p className="mt-auto text-12px font-[600] text-blue-100">
                Video Editing
              </p>
              <p className="font-[600] leading-tight">
                Editing, Motion design...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
