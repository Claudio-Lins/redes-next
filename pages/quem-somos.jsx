import Image from "next/image";
import Head from "next/head";
import LgMembers from "../components/quem/lgMembers";
import ObjetivosTxt from "../components/quem/ObjetivosTxt";
import BlocoTxt from "../components/quem/BlocoTxt";

export default function About({ aboutPage }) {
  return (
    <div className="min-h-screen bg-white mt-16 mb-20">
      <Head>
        <title>{aboutPage.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto py-4">
        <Image
          src={aboutPage.singleCover01.url}
          alt="Rede Sem Fronteiras"
          layout="responsive"
          width={1280}
          height={320}
        />
      </div>

      <section>
        <div className="container px-5 py-12 mx-auto">
          <BlocoTxt
            title={aboutPage.subTitle01}
            content={aboutPage.content01}
          />
          <BlocoTxt
            title={aboutPage.subTitle02}
            content={aboutPage.content02}
          />
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto">
          <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-left border-b">
            <h2>{aboutPage.subTitle03}</h2>
          </div>
          <div className="flex flex-wrap -m-4">
            <ObjetivosTxt number={1} text={aboutPage.textObjetivo01} />
            <ObjetivosTxt number={2} text={aboutPage.textObjetivo02} />
            <ObjetivosTxt number={3} text={aboutPage.textObjetivo03} />
            <ObjetivosTxt number={4} text={aboutPage.textObjetivo04} />
            <ObjetivosTxt number={5} text={aboutPage.textObjetivo05} />
            <ObjetivosTxt number={6} text={aboutPage.textObjetivo06} />
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-10">
        <h2 className="sm:text-3xl text-2xl font-medium text-center text-gray-900 mb-6">
          {aboutPage.subTitle04}
        </h2>
          <div className="my-10">
          <Image
            src={aboutPage.singleCover02.url}
            alt="Rede Sem Fronteiras"
            layout="responsive"
            objectFit='contain'
            width={1920}
            height={480}
          />
          </div>


        <div className="flex flex-wrap justify-center items-center">
          <LgMembers
            list={"#"}
            src={"organizacao-filhos-do-mundo_lg.png"}
            alt={"Organização Filhos do Mundo"}
            width={90}
            height={90}
          />
          <LgMembers
            list={"#"}
            src={"cdh-lg-200x142.png"}
            alt={"CDH"}
            width={100}
            height={71}
          />
          <LgMembers
            list={"#"}
            src={"casa-do-brasil-de-lisboa-lg.png"}
            alt={"Casa do Brasil de Lisboa"}
            width={90}
            height={90}
          />
          <LgMembers
            list={"#"}
            src={"cdhic-color-horizontal-espacio-sin-fronteras-esf-100x50.png"}
            alt={"CDHIC"}
            width={100}
            height={50}
          />
          <LgMembers
            list={"#"}
            src={"proandes-lg-100x100.jpg"}
            alt={"Proandes"}
            width={100}
            height={100}
          />
          <LgMembers
            list={"#"}
            src={"unifesp-lindomar-albuquerque-lg-166x100.png"}
            alt={"Unifesp"}
            width={133}
            height={80}
          />
          <LgMembers
            list={"#"}
            src={"cedal-lg-100x100.png"}
            alt={"Cedal"}
            width={90}
            height={90}
          />
          <LgMembers
            list={"#"}
            src={"fec-lg-100x100.jpg"}
            alt={"FEC"}
            width={80}
            height={80}
          />
          <LgMembers
            list={"#"}
            src={"del-agora-lg.jpg"}
            alt={"Del"}
            width={166}
            height={100}
          />
          <LgMembers
            list={"#"}
            src={"codhes-lg-144x50.png"}
            alt={"Codhes"}
            width={144}
            height={50}
          />
          <LgMembers
            list={"#"}
            src={"coapy-lg-113x80.jpg"}
            alt={"Coapy"}
            width={135}
            height={96}
          />
          <LgMembers
            list={"#"}
            src={"re-lg-159x70.jpg"}
            alt={"re"}
            width={159}
            height={70}
          />
          <LgMembers
            list={"#"}
            src={"pal-oriana-Jara-lg-113x80.png"}
            alt={"Pal Oriana Jara"}
            width={113}
            height={80}
          />
          <LgMembers
            list={"#"}
            src={
              "coordenacao-direitos-sociais-Saude-e-seguridade-lg-120x85.jpg"
            }
            alt={"Coordenação Direitos Sociais Saude e Seguridade"}
            width={120}
            height={85}
          />
          <LgMembers
            list={"#"}
            src={"alampyme-br-360x70.gif"}
            alt={"alampyme"}
            width={288}
            height={56}
          />
          <LgMembers
            list={"#"}
            src={"casa-da-gente-lg-80x120.png"}
            alt={"Casa da Gente"}
            width={80}
            height={120}
          />
          <LgMembers
            list={"#"}
            src={"umsa-lg-74x150.png"}
            alt={"umsa"}
            width={80}
            height={120}
          />
          <LgMembers
            list={"#"}
            src={"Instituto-edesio-passos-lg-113x80.png"}
            alt={"Instituto edesio passos"}
            width={141}
            height={100}
          />
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/about-page"
  );
  const aboutPage = await res.json();

  return {
    props: {
      aboutPage,
    },
  };
}
