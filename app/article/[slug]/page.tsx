import Article from "@/components/Article";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import client from "@/sanity.cli";
import { Article as ArticleTypes } from "@/utils/typings";


async function page({
  params,
}: {
  params: { slug: string };
}) {
  const fetchArticleQuery = `*[_type == 'article' && slug.current == $slug][0]{
    _id,
    _createdAt,
    'slug': slug.current,
    'coverImage': coverImage.asset._ref,
    'authorName': author->name,
    'authorEmail': author->authorEmail,
    'authorImage': author->authorImage.asset._ref,
    title,
    content,
    headline,
  }`;

  const article: ArticleTypes = await client.fetch(
    fetchArticleQuery,
    {
      slug: params.slug,
      next: {revalidate: 10} as any}
  );

  return (
    <>
       <Navbar/>
      <Article data={article} />
      <Footer />

    </>
  );
}

export default page;
