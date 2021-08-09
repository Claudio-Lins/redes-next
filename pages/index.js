import Head from 'next/head'
import React, { useState } from "react";
import Image from "next/image";
import SlideDestaque from "../components/home/heroDestaque/SlideDestaque"

export default function Home() {
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
        <div className="absolute">
          Texto destaque
        </div>
      </main>
      <section className='bg-purple-600 w-full h-[600px] flex justify-center items-center'>
        text
        </section>

      <footer className="flex relative bg-white bg-opacity-80 items-center justify-center w-full h-24 border-t">
        <p>@clinsDev</p>
      </footer>
    </div>
  )
}
