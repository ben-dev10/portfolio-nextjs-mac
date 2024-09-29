import { getCategorisedArticles } from "./articles";
import ArticleItemList from "@/app/components/ArticleListItem";

export default function Blog() {
  const articles = getCategorisedArticles();

  return (
    <main>
      <div className="blog-page--header relative overflow-hidden bg-gray-100 dark:bg-transparent">
        <div className="blog-page--header-grid opacity-20 dark:opacity-10 dark:[background-image:url(/bg-designs/grid-box--dark.svg)]" />
        <div className="wrapper container-4xl relative z-[5] p-5">
          <div className="header-gradient-2 -z-1 z-1 absolute -top-[80%] left-[25%] h-[400px] w-[540px] -translate-x-1/2 opacity-40 dark:opacity-40 md:left-[20%]" />
          <div className="py-[50px]">
            <h3 className="font-gilroy text-[22px] font-[700] text-zinc-800 dark:text-zinc-200">
              Blog
            </h3>
            <p>News and Updates.</p>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#17171A]">
        <div className="wrapper blog-page-content container-4xl p-5 pt-[25px] pb-[50px]">
          <section className="blog-section mx-auto">
            {articles !== null &&
              Object.keys(articles).map((article) => (
                <ArticleItemList
                  category={article}
                  articles={articles[article]}
                  key={article}
                />
              ))}
          </section>
        </div>
      </div>
    </main>
  );
}
