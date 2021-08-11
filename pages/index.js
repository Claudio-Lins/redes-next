import Head from "next/head";
import React, { useState } from "react";
import { fetchAPIRede } from "../lib/api";
import SlideDestaque from "../components/home/heroDestaque/SlideDestaque";
import BlogsHero from "../components/blog/BlogsHero";
import BlogsHeroMob from "../components/blog/BlogsHeroMob";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center pt-12">
      <Head>
        <title>Rede Sem Fronteiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SlideDestaque /> */}

      <section className="hidden sm:flex container w-full sm:h-[500px] mx-auto">
        <BlogsHero posts={posts} />
      </section>
      <section className="container w-full mx-auto sm:hidden">
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
