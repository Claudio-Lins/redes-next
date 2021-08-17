import Head from "next/head";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import BtnQuem from "../components/quem/BtnQuem";
import { fetchAPIRede } from "../lib/api";
import BlocoTxt from "../components/quem/BlocoTxt";
import ObjetivosTxt from "../components/quem/ObjetivosTxt";

export default function About({ about }) {
  const [btns, setBtns] = useState(true);

  function showBtns() {
    if (window.innerWidth < 480) {
      setBtns(true);
    } else {
      setBtns(false);
    }
  }

  useEffect(() => {
    showBtns();
  });

  return (
    <div className="min-h-screen bg-white mt-2 mb-20">
      <Head>
        <title>About page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto py-4 relative w-full h-[120px] md:h-[320px] xl:h-[480px] my-2">
        <Image
          src={about.section[0].imagem.url}
          alt="Rede Sem Fronteiras"
          layout="fill"
          quality="medium"
          loading="lazy"
        />
      </div>
      {btns && (
        <section className="">
          <hr />
          <div className="flex flex-wrap justify-evenly my-2">
            <BtnQuem label="Carta de Princípios" href="/carta-de-principios" />
            <BtnQuem
              label="Conselho Internacional"
              href="/conselho-internacional"
            />
            <BtnQuem label="Conselho Diretor" href="/conselho-diretor" />
            <BtnQuem label="Secretaria Técnica" href="/" />
          </div>
          <hr />
        </section>
      )}
      <section>
        <div className="container px-5 py-6 mx-auto sm:mt-8">
          <BlocoTxt
            title={about.section[0].title}
            content={about.section[0].content}
          />
          <BlocoTxt
            title={about.section[1].title}
            content={about.section[1].content}
          />
        </div>
      </section>
      <section className="container px-5 py-6 mx-auto text-gray-600">
        <div className="container px-5 py-2 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-left border-b">
            <h2>{about.section[3].objetivo[0].title}</h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <ObjetivosTxt
              number={about.section[3].objetivo[0].subTitle}
              text={about.section[3].objetivo[0].content}
            />
            <ObjetivosTxt
              number={about.section[3].objetivo[1].subTitle}
              text={about.section[3].objetivo[1].content}
            />
            <ObjetivosTxt
              number={about.section[3].objetivo[2].subTitle}
              text={about.section[3].objetivo[2].content}
            />
            <ObjetivosTxt
              number={about.section[3].objetivo[3].subTitle}
              text={about.section[3].objetivo[3].content}
            />
            <ObjetivosTxt
              number={about.section[3].objetivo[4].subTitle}
              text={about.section[3].objetivo[4].content}
            />
            <ObjetivosTxt
              number={about.section[3].objetivo[5].subTitle}
              text={about.section[3].objetivo[5].content}
            />
          </div>
        </div>
      </section>
      <section className="">
          {about.section[4].membros.map((membros) => (
              <div className="" key={membros.id}>
              
              {console.log(membros.name)}
              </div>
              ))}
         
      </section>

      {/* {console.log(about.section)} */}
      {/* {console.log(about.section)} */}
      {/* {console.log(about.section[4].logos[1].imagem.name)} */}
    </div>
  );
}

export async function getStaticProps() {
  const [about] = await Promise.all([fetchAPIRede("/quem-somos")]);

  return {
    props: { about },
    revalidate: 1,
  };
}

//
// {about.section[3].objetivo.map((objetivos, index) => (
//     <div className="flex flex-wrap -m-4" key={index}>
//   <ObjetivosTxt number={objetivos.subTitle} text={objetivos.content} />
// </div>))}