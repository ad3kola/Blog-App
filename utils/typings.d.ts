import { PortableTextBlock } from "sanity";

export interface Article {
	_id: string;
	_createdAt: string;
	title: string;
	headline: string;
	coverImage: string;
	slug: string;
	authorName: string;
	authorEmail: string;
	authorImage: string;
	content: PortableTextBlock[];
}