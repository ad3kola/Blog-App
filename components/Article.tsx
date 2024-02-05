'use client'

import { urlFor } from "@/sanity.cli";
import { Article } from "@/utils/typings";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Main from "./Main";
import { RichTextComponent } from "./RichTextComponent";

function Articles({ data }: { data: Article }) {
  const createdAt = new Date(
    data._createdAt
  ).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <section className="pt-5 pb-10 px-6 md:px-3 max-w-[1000px] mx-auto">
        <div className="flex border-b-2 border-[#F7AB0A]  items-start justify-between flex-col md:flex-row md:space-x-5 my-3 p-3 md:py-5 mg:md:px-0">
          <div className="flex-grow w-full md:w-[70%] space-y-5 md:pr-10 flex-col">
            <h2 className="text-4xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-yellow-600 via-neutral-900 to-yellow-700 uppercase max-w-content">
              Adekola's Blog App
            </h2>
            <p className="text-gray-800 text-sm leading-6 font-medium tracking-wide">
            Welcome to Adekola's Blog App, your gateway to insightful content and engaging discussions. Discover a world where meaningful narratives meet thought-provoking insights, curated just for you. Immerse yourself in an ecosystem designed to elevate your browsing experience. From compelling narratives to in-depth analyses, we offer a rich tapestry of content that transcends the ordinary.
            </p>
            <div className="flex py-2 items-center space-x-3">
              <button className="cursor-pointer duration-100 transition hover:scale-105 max-w-fit bg-neutral-900 text-yellow-400 px-5 py-3 text-sm font-semibold rounded-full">
                Sign up to our Newsletter
              </button>
              <button className="cursor-pointer duration-100 transition hover:scale-105 mt-1 max-w-fit bg-neutral-900 text-yellow-400 px-5 py-3 text-sm font-semibold rounded-full">
                View all blog contents
              </button>
            </div>
          </div>
          <p className="mt-2 w-full md:w-[30%] text-gray-800 text-sm leading-6 font-medium tracking-wide">
          Embark on a journey through diverse topics at Adekola's Blog App, where captivating articles and insightful analyses await. Join us in a quest for enlightenment, where ideas flourish, and discovery knows no bounds. Our platform is more than content; it's a vibrant community celebrating diversity, knowledge, and the art of narrative.
          </p>
        </div>
        <div className="sticky z-20 top-[76px] left-0 right-0 mt-3 md:px-2 py-5 w-full bg-white/60 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between text-xs md:text-sm space-x-2 border-b-2 border-yellow-500/80">
          <div className ='w-full flex items-center space-x-2'> <div className="flex-shrink-0 w-10 h-10 rounded-full relative">
            <Image
              alt="Author Image"
              src={urlFor(data.authorImage).url()}
              fill
              className="flex-shrink-0 rounded-full object-cover"
            />
          </div>
            <div className ='w-full flex-1 flex flex-col md:flex-row items-start md:items-center justify-between px-2'>
              
          <h4 className="text-neutral-950 tracking-wide">
            Published by{" "}
            <span className="font-bold">
              {data.authorName}
            </span>{" "}
            
            <span className="font-bold block md:inline">on {createdAt}</span>
              </h4>
          <p className =' font-semibold space-x-1'>Send him a message at <span className ='text-yellow-500 underline cursor-pointer'>{data.authorEmail}</span></p>
            </div>
          </div>
        </div>
        <Image src = {urlFor(data.coverImage).url()} width = {350} height ={350} className ='object-cover mx-auto rounded-lg mt-20' alt = 'Cover Image' />
        <PortableText
          value={data.content}
          components={RichTextComponent}
        />
      </section>
    </>
  );
}

export default Articles;
