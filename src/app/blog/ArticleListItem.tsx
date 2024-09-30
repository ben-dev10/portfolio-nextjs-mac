import Link from "next/link";
import type { ArticleItem } from "./articles";

interface Props {
  category: string;
  articles: ArticleItem[];
}

export function ArticleCard({
  title,
  subtitle,
  url,
  date,
}: {
  title: string;
  subtitle: string;
  url: string;
  date: string;
}) {
  return (
    <div className="article-card w-full rounded-lg border border-border bg-card text-[0.923rem] text-zinc-500 sm:min-w-[200px]">
      <img
        src={url}
        alt={`${title}`}
        className="w-full rounded-tl-lg rounded-tr-lg object-cover"
      />
      <div className="card-body flex flex-col p-2 px-3 sm:h-[150px]">
        <h5 className="mt-1 text-[17px] font-[600] text-zinc-600 dark:text-zinc-200">
          {title}
        </h5>
        <p className="truncate-2 mb-6 mt-[2px] text-zinc-400 dark:text-zinc-400">
          {subtitle}
        </p>
        <small className="mt-auto">{date}</small>
      </div>
    </div>
  );
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <div className="">
      {/* <h2 className="font-[Garamond] text-xl">{category}</h2> */}
      <div className="mx-auto grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((article, id) => (
          <Link
            href={`/${article.id}`}
            key={id}
            className="text-neutral-900 transition duration-150 hover:text-indigo-700"
          >
            <ArticleCard
              title={article.title}
              url={article.url}
              date={article.date}
              subtitle={article.subtitle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
