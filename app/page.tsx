import { Metadata } from "next";
import { Hero } from "@/components/Hero";

import { Articles } from "@/components/Articles";
import { getArticles } from "./actions/articles";


export const metadata: Metadata = {
  title: "WW2 Military Machines Blog",
  description:
    "Explore the fascinating world of World War II military machines - tanks, planes, ships, and more.",
  keywords: [
    "WW2",
    "World War II",
    "military machines",
    "tanks",
    "planes",
    "ships",
    "history",
  ],
  authors: [{ name: "WW2 Machines Team" }],
  openGraph: {
    title: "WW2 Military Machines Blog",
    description:
      "Dive into the history of WW2 machines — tanks, planes, ships, and more.",
    url: "https://ww2machines.com",
    siteName: "WW2 Machines",
    images: [
      {
        url: "https://ww2machines.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WW2 Military Machines",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WW2 Military Machines Blog",
    description:
      "Explore the fascinating world of World War II military machines.",
    images: ["https://ww2machines.com/twitter-image.jpg"],
  },
};

export default async function Home() {
  const articles = await getArticles();
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <Articles articles={articles} />
      {/* <Suspense fallback={<LoadingArticlesGrid />}>
        <ArticlesContent articles={articles} />
      </Suspense> */}
    </main>
  );
}
