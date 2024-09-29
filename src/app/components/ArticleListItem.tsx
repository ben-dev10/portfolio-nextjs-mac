import Link from "next/link";
import type { ArticleItem } from "@/types/index";
import Image from "next/image";

interface Props {
  category: string;
  articles: ArticleItem[];
}

export function ArticleCard({ title, url, date }: { title: string; url: string, date:string }) {
  return (
    <div className="rounded-lg border border-border bg-card text-zinc-500 shrink-0 min-w-[200px] max-w-[250px]">
      <Image
        src={url}
        alt={`${title}`}
        className="rounded-tl-lg rounded-tr-lg object-cover"
        width={250}
        height={270}
      />
      <div className="p-2 px-3">
        <h5 className="text-[13px] dark:text-zinc-200 font-[600]">{title}</h5>
        <small className="">{date}</small>
      </div>
    </div>
  );
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="">
      {/* <h2 className="font-[Garamond] text-xl">{category}</h2> */}
      {/* <div className="columns-[220px]"> */}
      {/* <div className="grid gap-5 max-w-[500px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center"> */}
      <div className="flex flex-wrap gap-5">
        {articles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="max-w-[250px] text-[12px] text-neutral-900 transition duration-150 hover:text-indigo-700"
          >
            <ArticleCard
              title={article.title}
              url={article.url}
              date={article.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
