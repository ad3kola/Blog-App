const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Article Title",
      type: "string",
	  },
	{
		name: "slug",
		title: "Slug",
		type: "slug",
		options: {source: "title"}
	},
	{
		name: 'coverImage',
		titile: 'Article Cover Image',
		type: 'image',
	},
	{
		name: "headline",
		title: "Article Headline",
		type: "string",
	  },
	  {
		  name: "author",
		  title: "Author",
		  type: "reference",
		  to: [{type: 'author'}]
	  },
	  {
		name: "content",
		  title: "Content",
		  type: "array",
		of: [{type: "block"}, {type: "image"}]
	  },
  ],
};
export default article;
