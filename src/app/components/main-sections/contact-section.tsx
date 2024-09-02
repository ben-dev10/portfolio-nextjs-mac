import { Text } from "@/ui/text/text";
import { CalendarCheckIcon, MailCheckIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export const ContactMedium = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <a href="#" className="flex max-w-[100px] flex-col items-center gap-1">
      {icon}
      <p className="text-center">{text}</p>
    </a>
  );
};

export default function ContactSection() {
  return (
    <div
      className="about-section bg-gray-100 py-10 dark:bg-transparent"
      style={{
        backgroundImage: "url(doodle.png)",
        backgroundSize: "150px",
      }}
    >
      <div className="bg-black">
        <div className="wrapper container-4xl my-10 p-6 py-[70px] text-gray-100/90">
          <div className="mx-auto max-w-2xl text-center">
            <Text as="h1" size="h1" className="text-3xl text-gray-50">
              Love to work with me? Let&apos;s talk.
            </Text>
            <p className="">
              You can choose to reach me by filling the forms in this section or
              any preferred medium below
            </p>
          </div>
          <div className="mt-5 flex justify-center gap-4">
            <ContactMedium
              text="WhatsApp Call or Chat"
              icon={<FaWhatsapp className="size-[32px] text-green-400" />}
            />
            <ContactMedium
              text="Email"
              icon={<MailCheckIcon className="size-[32px] text-blue-400" />}
            />
            <ContactMedium
              text="Calender: Book an appointment"
              icon={
                <CalendarCheckIcon className="size-[32px] text-amber-400" />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
