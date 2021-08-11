import Head from "next/head";
import React, { useState } from "react";
import { fetchAPIRede } from "../lib/api";
import SlideDestaque from "../components/home/heroDestaque/SlideDestaque";
import BlogsHero from "../components/blog/BlogsHero";
import BlogsHeroMob from "../components/blog/BlogsHeroMob";


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
      <section className="hidden sm:flex container w-full sm:h-[500px] mx-auto mt-10">
        <BlogsHero posts={posts} />
      </section>
      <section className="container w-full sm:h-[500px] mx-auto mt-10 sm:hidden">
        <BlogsHeroMob posts={posts} />
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
