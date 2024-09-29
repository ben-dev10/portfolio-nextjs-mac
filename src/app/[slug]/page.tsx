import Link from "next/link";
import { getArticleData } from "../blog/articles";
import { ArrowLeft } from "lucide-react";
import "./blog-page.css";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section className="blog-details-page">
      <div className="relative mx-auto max-w-4xl">
        <div className="blog-details-page-gradient absolute " />
        <div className="flex items-center p-3 px-4 pt-8 text-[12px]">
          <Link
            href={"/blog"}
            className="flex group flex-row place-items-center items-center gap-1"
          >
            <ArrowLeft width={16} className="group-hover:-translate-x-[2px] group-hover:text-blue-400
             duration-400" />
            <p className="group-hover:text-blue-400">back</p>
          </Link>
          <p className="ml-auto">{articleData.date.toString()}</p>
        </div>
        <article
          className="article p-5 pb-8 mb-[80px] text-[12px]"
          dangerouslySetInnerHTML={{ __html: articleData.contentHTML }}
        ></article>
      </div>
    </section>
  );
};

export default Article;
