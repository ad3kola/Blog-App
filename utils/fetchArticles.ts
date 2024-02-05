import client from "@/sanity.cli";
import { Article } from "./typings";
type NextRevalidate = {
  revalidate: number;
};

export default async function fetchArticles(): Promise<
  Article[]
> {
  const fetchQuery = `*[_type == 'article']{
	_id,
	_createdAt,
	'slug': slug.current,
	'bannerimg': bannerimg.asset._ref,
	'coverImage': coverImage.asset._ref,
	'authorName': author->name,
'authorEmail': author->authorEmail,
'authorImage': author->authorImage.asset._ref,
	title,
	content,
	headline,
} | order(_createdAt asc)`;
	const res = await client.fetch(fetchQuery, {
		cache: "no-store",
		next: {revalidate: 10}
	} as any);
  return res;
}
