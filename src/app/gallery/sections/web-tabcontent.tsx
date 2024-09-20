import { Tags } from "lucide-react";
import Image from "next/image";
import React from "react";

function Pill({ text }: { text: string }) {
  return (
    <button className="rounded-sm bg-zinc-100 px-2 text-violet-400 dark:bg-zinc-700 dark:text-violet-300">
      #{text}
    </button>
  );
}

export const ImageCard = ({
  src,
  w,
  h,
  description,
}: {
  src: string;
  w: number;
  h: number;
  description: string | React.ReactNode;
}) => {
  return (
    <div className="relative mb-[25%] max-w-[300px]">
      <Image
        alt="gallery image"
        src={src}
        width={w}
        height={h}
        className="aspect-auto rounded-md rounded-bl-none rounded-br-none"
      />
      <div className="absolute bottom-0 left-0 w-full translate-y-[98%] rounded-bl-sm rounded-br-sm bg-zinc-100 p-2 text-[12px] dark:bg-zinc-800">
        {description}
      </div>
    </div>
  );
};

export default function WebTabContent() {
  return (
    <div className="web-tab-content">
      <div className="py-3">
        <h3 className="mb-2 text-[18px] font-[600]">Web Designs</h3>
        <div className="flex items-center gap-2">
          <Tags className="mr-1" />
          <Pill text="personal" />
          <Pill text="concept" />
        </div>
        <div className="image-gallery mt-4 [columns:180px] sm:columns-[230px] lg:columns-[250px]">
          <ImageCard
            src="/gallery/A logo for a software developer.png"
            w={512}
            h={512}
            description="A logo for a software developer"
          />
          <ImageCard
            src="/gallery/giveaway-items.jpg"
            w={512}
            h={512}
            description="A logo for a software developer"
          />
          <ImageCard
            src="/gallery/A logo for a software developer.png"
            w={512}
            h={512}
            description="A logo for a software developer"
          />
          <ImageCard
            src="/gallery/giveaway-items.jpg"
            w={512}
            h={512}
            description="A logo for a software developer"
          />
          <ImageCard
            src="/gallery/giveaway-items.jpg"
            w={512}
            h={512}
            description="A logo for a software developer"
          />
          <ImageCard
            src="/gallery/A logo for a software developer.png"
            w={512}
            h={512}
            description="A logo for a software developer"
          />
        </div>
      </div>
    </div>
  );
}
