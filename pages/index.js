import Head from "next/head";
import React, { useState } from "react";
import { fetchAPIRede } from "../lib/api";
import SlideDestaque from "../components/home/heroDestaque/SlideDestaque";
import BlogsHero from "../components/blog/BlogsHero";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="">
          <SlideDestaque />
        </div>
        <div className="absolute">Texto destaque</div>
      </main>
      <section className="container h-[500px]">
        <BlogsHero posts={posts} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const [posts] = await Promise.all([fetchAPIRede("/posts")]);

  return {
    props: { posts },
    revalidate: 1,
  };
}
