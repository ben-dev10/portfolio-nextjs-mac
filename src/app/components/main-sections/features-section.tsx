import { Text } from "@/ui/text/text";
import { AppWindowIcon, HardHat, Megaphone, Paintbrush } from "lucide-react";

export const NewUI = () => {
  return (
    <div className="badge ml-auto flex h-[20px] w-[40px] justify-center rounded-[3px] bg-green-400 text-white">
      New
    </div>
  );
};

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
      className="feature-card flex min-h-[200px] w-[160px] shrink-0 flex-col rounded-md p-5 text-white"
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
      <p className="mt-auto text-12px font-bold text-blue-100">
        <span className={`${x ? "text-shadow text-yellow-100" : ""}`}>
          {title}
        </span>
      </p>
      <p className="font-bold">
        <span className={`${x ? "text-black/80" : ""}`}>{description}</span>
      </p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <div className="features-section bg-white dark:bg-stone-600">
      <div className="wrapper container-4xl p-6 py-[70px]">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h1"
            size="h1"
            className="text-3xl text-foreground-secondary"
          >
            If you are looking for a quick, and performant website, then you've
            come to the right place.
          </Text>
          <p className="">
            I can help you get your website online in a flash, all you have to
            do is to brief me on what you want and leave the rest to me.
          </p>
        </div>
        <div className="mt-5">
          <p className="mb-5 text-center">What's Included</p>
          <div className="flex gap-5 overflow-x-scroll md:justify-center">
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
              className="feature-card flex min-h-[200px] w-[160px] shrink-0 flex-col rounded-md p-5 text-white"
            >
              <div className="badge flex justify-center rounded-md border border-gray-400 bg-black/80 p-1 px-2 text-white">
                Coming Soon
                <Megaphone size={17} className="text-slate-100" />
              </div>
              <p className="mt-auto text-12px font-bold text-blue-100">
                <p>Video Editing</p>
              </p>
              <p className="font-bold">
                <p>Editing, grading...</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
