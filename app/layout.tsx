import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adekola's Blog App",
  description: "A Professional Blog App created with Next Js and implemented using Sanity CMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1100px] flex-grow w-full mx-auto`}>
       {children}</body>
    </html>
  );
}
