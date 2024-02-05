import imageUrlBuilder  from '@sanity/image-url';
import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_PROJECT_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION!;

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: string) =>  builder.image(source)
export default client;