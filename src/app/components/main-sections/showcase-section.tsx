import { Text } from "@/ui/text/text";
import { ArrowUpRight, ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../section-heading";

export const ShowcaseCard = ({
  title,
  description,
  url,
  imgUrl,
  typescript,
  framerMotion,
}: {
  title: string;
  description: string;
  url: string;
  imgUrl: string;
  typescript?: boolean;
  framerMotion?: boolean;
}) => {
  return (
    <div className="showcase-card aspect-[4/3] w-[400px] shrink-0 rounded-md border bg-card shadow-sm dark:bg-[#13151A]">
      <div className="img">
        <Image
          src={imgUrl}
          alt="product-image"
          width={397.1}
          height={238.84}
          className="rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="flex flex-col p-3">
        <h3 className="text-[16px] font-[600] text-accent dark:text-violet-400">
          {title}
        </h3>
        <p>{description}</p>
        <div className="mt-2 flex">
          <div className="tech-stack flex items-center gap-1">
            <div className="icon-sprite react-icon h-[27px] w-[27px] scale-[.75] [background-position:0px_0px]" />
            <div className="icon-sprite tw-css-icon h-[27px] w-[27px] scale-[.9] [background-position:-108px_2px]" />
            {typescript ? (
              <div className="icon-sprite ts-icon h-[27px] w-[27px] scale-[.75] [background-position:-38px_0px]" />
            ) : (
              ""
            )}
            {framerMotion ? (
              <div className="icon-sprite framer-motion-icon h-[27px] w-[27px] scale-[] [background-position:-70px_3px]" />
            ) : (
              ""
            )}
          </div>
          <div className="link ml-auto">
            <a
              href={url}
              className="flex items-center gap-1 text-accent hover:text-accent/90 dark:text-violet-300"
            >
              Visit Live Site
              <ArrowUpRightFromSquareIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ShowcaseSection() {
  return (
    <div className="showcase-section bg-gray-100 dark:bg-transparent">
      <div className="wrapper container-4xl p-6 py-[70px] pt-[60px]">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            hElement="h1"
            className="text-3xl"
            title=" Showcase."
            subheading="Get to see some of my works, crated over the years. Visit the
            gallery to view the full collection."
          />
        </div>
        <div className="mt-5 flex gap-5 overflow-x-auto py-6 md:justify-center">
          <ShowcaseCard
            title="Velvet"
            description="An e-commerce site for skincare products"
            url="velvet/ben-dev10.github.io"
            imgUrl="/velvet-cover.png"
            framerMotion
          />
          <ShowcaseCard
            title="CPS"
            description="A simple clone of WPS Office"
            url="velvet/ben-dev10.github.io"
            imgUrl="/velvet-cover.png"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href={"/gallery"}
            className="flex items-center gap-1 text-blue-500 hover:underline dark:text-blue-300"
          >
            Go to gallery{" "}
            <ArrowUpRight
              size={16}
              className="text-blue-500/70 dark:text-blue-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
