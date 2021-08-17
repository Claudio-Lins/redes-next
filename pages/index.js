import Head from "next/head";
import React, { useState } from "react";
import { fetchAPIRedeDois } from "../lib/api";
import SlideDestaque from "../components/home/heroDestaque/SlideDestaque";
import BlogsHero from "../components/blog/BlogsHero";
import BlogsHeroMob from "../components/blog/BlogsHeroMob";
import ImageHero from "../components/home/heroDestaque/ImageHero";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <title>Rede Sem Fronteiras</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SlideDestaque /> */}
      <ImageHero />
      <section className="hidden sm:flex container w-full sm:h-[500px] mx-auto mt-12">
        <BlogsHero posts={posts} />
      </section>
      <section className="container w-full mx-auto sm:hidden mt-12">
        <BlogsHeroMob posts={posts} />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const [posts] = await Promise.all([
    fetchAPIRedeDois("/posts")
  ]);

  return {
    props: { posts },
    revalidate: 1,
  };
}
