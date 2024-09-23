import { Text } from "@/ui/text/text";
import { gradientText } from "@/utils/ui-helpers";

export default function SectionHeading({
  title,
  subheading,
  hElement,
  className,
  align = "center",
}: {
  title: string | React.ReactNode;
  subheading: string;
  hElement: "h1" | "h2" | "h3" | "h4";
  className?: string;
  align?: "left" | "center" | "right";
}) {
  return (
    <div>
      <Text
        as={hElement}
        size={hElement}
        className={` ${className} font-gilroy dark:![background-image:linear-gradient(to_bottom,#E5E7EB_20%,#FAFAFA,#E5E7EB_80%)]`}
        style={gradientText(
          "linear-gradient(to bottom, #666666 10%, #000000, #666666 90%)",
        )}
        align={align}
      >
        {title}
      </Text>
      <p className="">{subheading}</p>
    </div>
  );
}
