import { Text } from "@/ui/text/text";
import { FaWhatsapp } from "react-icons/fa6";
import { gradientText } from "@/utils/ui-helpers";
import Image from "next/image";

export const ContactMedium = ({
  text,
  icon,
  url,
}: {
  text: string;
  icon: React.ReactNode;
  url?: string;
}) => {
  return (
    <a
      href={`${url}`}
      className="flex max-w-[100px] flex-col items-center gap-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <p className="text-center text-13px">{text}</p>
    </a>
  );
};

export default function ContactSection() {
  return (
    <div className="about-section relative bg-gray-100 py-10 dark:bg-transparent">
      <div className="doodle-bg" />
      <div className="relative z-[2] bg-black">
        <div className="wrapper container-4xl my-10 p-6 py-[70px] text-gray-100/80">
          <div className="mx-auto max-w-2xl text-center">
            <Text
              as="h1"
              size="h1"
              className="font-gilroy text-3xl font-[700]"
              style={gradientText(
                "linear-gradient(to bottom, #E5E7EB 20%, #FAFAFA, #E5E7EB 80%)",
              )}
            >
              What are you waiting for? Let&apos;s talk.
            </Text>
            <p className="">
              You can choose to reach me through any preferred medium below,
              click on them to redirect to related applications.
            </p>
          </div>
          <div className="mt-5 flex justify-center gap-6">
            <ContactMedium
              text="WhatsApp Call or Chat"
              icon={<FaWhatsapp className="size-[32px] text-green-400" />}
              url="https://wa.me/0541467464"
            />
            <ContactMedium
              text="Email"
              icon={
                <Image
                  src="/assets/gmail.png"
                  alt="gmail-icon"
                  width={32}
                  height={32}
                  className="shadow-md"
                />
              }
              url="mailto:calvinklien025@gmail.con"
            />
            <ContactMedium
              text="Calender: Book an appointment"
              icon={
                <Image
                  src="/assets/calendar.png"
                  alt="calendar-icon"
                  width={31}
                  height={31}
                  className="shadow-md"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
