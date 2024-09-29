import Link from "next/link";
import { getArticleData } from "../blog/articles";
import { ArrowLeft } from "lucide-react";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center p-3  px-4 text-[12px]">
          <Link
            href={"/blog"}
            className="flex flex-row place-items-center items-center gap-1"
          >
            <ArrowLeft width={16} />
            <p className="">back to home</p>
          </Link>
          <p className="ml-auto">{articleData.date.toString()}</p>
        </div>
        <article
          className="article p-5 pb-8 text-[12px]"
          dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
        ></article>
      </div>
    </section>
  );
};

export default Article;
