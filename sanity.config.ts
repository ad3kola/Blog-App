import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import article from '@/schemas/article'
import author from '@/schemas/author'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_PROJECT_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_PROJECT_API_VERSION!

const config = defineConfig({
  name: "default",
  title: "First Sanity Project",
  basePath: "/admin",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool(), visionTool()],
  schema: {types: [article, author],
},
});

export default config;