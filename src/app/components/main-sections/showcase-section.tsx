import { Text } from "@/ui/text/text";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

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
    <div className="showcase-card w-[400px] aspect-[4/3] bg-white border rounded-md shrink-0">
      <div className="img">
        <img src={imgUrl} alt="product-image" />
      </div>
      <div className="flex flex-col p-3">
        <h3 className="text-accent font-bold text-[16px]">{title}</h3>
        <p>{description}</p>
        <div className="flex mt-2">
          <div className="tech-stack flex gap-1">
            <p>TS</p>
            <p>React</p>
          </div>
          <div className="link ml-auto">
            <a href={url} className="flex items-center text-accent gap-1">
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
    <div className="showcase-section bg-gray-100 dark:bg-stone-600">
      <div className="wrapper container-4xl p-6 py-[40px]">
        <div className="mx-auto max-w-2xl text-center">
          <Text
            as="h1"
            size="h1"
            className="text-3xl text-foreground-secondary "
          >
            Showcase.
          </Text>
          <p className="">
            Get to see some of my works, crated over the years. Visit the
            gallery to view the full collection.
          </p>
        </div>
        <div className="mt-5 flex justify-center gap-5 overflow-x-auto">
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
      </div>
    </div>
  );
}
