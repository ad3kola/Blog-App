import { urlFor } from "@/sanity.cli";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-5">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-7">{children}</ol>,
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-5xl/[65px] pt-5 pb-9 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-3xl py-7 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl py-7 font-semibold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-5 font-semibold">{children}</h4>;
    },
    blockQuote: ({ children }: any) => {
      return (
        <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5">
          {children}
        </blockquote>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
