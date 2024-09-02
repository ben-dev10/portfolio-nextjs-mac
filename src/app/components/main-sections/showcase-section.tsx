import { Text } from "@/ui/text/text";
import { ArrowUpRight, ArrowUpRightFromSquareIcon } from "lucide-react";
import Link from "next/link";

export const ShowcaseCard = ({
  title,
  description,
  url,
  imgUrl,
}: {
  title: string;
  description: string;
  url: string;
  imgUrl: string;
}) => {
  return (
    <div className="showcase-card aspect-[4/3] w-[400px] shrink-0 rounded-md border bg-white shadow-sm dark:border-neutral-500/50 dark:bg-neutral-800">
      <div className="img">
        <img
          src={imgUrl}
          alt="product-image"
          className="rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="flex flex-col p-3">
        <h3 className="text-[16px] font-bold text-accent dark:text-violet-400">
          {title}
        </h3>
        <p>{description}</p>
        <div className="mt-2 flex">
          <div className="tech-stack flex gap-1">
            <p>TS</p>
            <p>React</p>
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
      <div className="wrapper container-4xl p-6 py-[70px] pb-[90px]">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h1"
            size="h1"
            className="text-3xl text-foreground-secondary"
          >
            Showcase.
          </Text>
          <p className="">
            Get to see some of my works, crated over the years. Visit the
            gallery to view the full collection.
          </p>
        </div>
        <div className="mt-5 flex gap-5 overflow-x-auto py-6 md:justify-center">
          <ShowcaseCard
            title="Velvet"
            description="An e-commerce site for skincare products"
            url="velvet/ben-dev10.github.io"
            imgUrl="velvet-cover.png"
          />
          <ShowcaseCard
            title="Velvet"
            description="An e-commerce site for skincare products"
            url="velvet/ben-dev10.github.io"
            imgUrl="velvet-cover.png"
          />
        </div>
        <div className="flex justify-center">
          <Link
            href={"/gallery"}
            className="flex items-center gap-1 text-blue-500 hover:underline"
          >
            Got to gallery{" "}
            <ArrowUpRight size={16} className="text-blue-500/70" />
          </Link>
        </div>
      </div>
    </div>
  );
}
