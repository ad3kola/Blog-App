import { urlFor } from "@/sanity.cli";
import fetchArticles from "@/utils/fetchArticles";
import Image from "next/image";
import { ArrowDownLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

async function ArticlesSection() {
  const articles = await fetchArticles();
  return (
    <section>
      <h2 className="text-gray-700 px-7 sm:px-5 md:px-10 uppercase text-lg font-semibold mt-4 text-center">
        Trending on our magazine
      </h2>
      <div className="mt-7 px-3 sm:px-10 md:px-5 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8 lg:gap-x-10">
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/article/${article.slug}`}
          >
            <div className="flex flex-col group cursor-pointer overflow-hidden">
              <div className="relative w-full min-h-64">
                <Image
                  src={urlFor(article.coverImage!).url()}
                  alt={article.slug}
                  fill
                  className="object-contain sm:object-center md:object-contain lg:object-cover rounded-md group-hover:scale-105 duration-200 transition-transform ease-in-out"
                />
              </div>
              <div className="sm:-mt-2 md:mt-2 mt-2 py-1">
                <div className="space-x-2 mt-1 flex items-center">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full relative">
                    <Image
                      alt="Author Image"
                      src={urlFor(
                        article.authorImage
                      ).url()}
                      fill
                      className="flex-shrink-0 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start font-bold text-xs tracking-wide ">
                    <h3 className="capitalize">
                      {article.authorName}
                    </h3>
                    <h4>{article.authorEmail}</h4>
                  </div>
                </div>
                <h2 className="mt-2 text-lg tracking-wider font-bold underline">
                  {article.title}
                </h2>
                <h3 className="mt-1 tracking-wider text-sm font-normal">
                  {article.headline}
                </h3>
                <div className="mt-1 text-neutral-800 text-sm flex items-center flex-row-reverse justify-between font-semibold">
                  <p className="tracking-wider">
                    {new Date(
                      article._createdAt
                    ).toLocaleString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="flex items-center cursor-pointer group-hover:underline">
                    Read Post{" "}
                    <ArrowDownLeftIcon className="w-4 h-4 text-neutral-950 ml-2" />{" "}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ArticlesSection;
