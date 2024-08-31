import { Text } from "@/ui/text/text";

export const FeatureCard = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        backgroundImage: url,
        backgroundPosition: "center center",
      }}
      className="feature-card flex flex-col min-h-[200px] w-[160px] p-5 rounded-md text-white shrink-0"
    >
      <p className="mt-auto text-12px text-blue-100">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <div className="features-section bg-white dark:bg-stone-600">
      <div className="wrapper container-4xl p-6 py-[40px]">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h1"
            size="h1"
            className="text-3xl text-foreground-secondary "
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
          <div className="flex gap-5 justify-center overflow-x-auto">
            <FeatureCard
              url="url(bg-designs/bg-design-1.png)"
              title="Web Design"
              description="Custom designs"
            />
            <FeatureCard
              url="url(bg-designs/bg-design-1.png)"
              title="Web Design"
              description="Custom designs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
