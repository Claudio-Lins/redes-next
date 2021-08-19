import SlideDestaque from "./SlideDestaque";
import Image from "next/image";
import SlideDestaqueTopicos from "./SlideDestaqueTopicos";
import Topicos from "./Topicos";

export default function HeroDestaque() {
  return (
    <>
      <div className=" relative shadow-md flex flex-col w-full min-h-full justify-center items-center">
        <div className="w-full ">
          <SlideDestaque />
        </div>
        <div className="absolute py-4 px-8 z-10 lg:px-96 text-white bg-black w-full min-h-full bg-opacity-40 flex flex-col justify-center items-center">
          <div className="border border-white p-4 -mt-20 md:m-4">
            <div className="relative bg-white text-gray-900 p-4">
              <h1 className="text-3xl font-bold text-center mb-2 text-blue-900 antialiased">
                A Rede Sem Fronteiras
              </h1>
              <p className="text-xs text-center md:p-4 leading-relaxed antialiased">
                Somos uma <strong>rede</strong> de organizações da sociedade
                civil, associações de imigrantes, instituições acadêmicas e
                ativistas com atuação na <strong>defesa</strong> e na{" "}
                <strong>promoção</strong> dos direitos das pessoas migrantes e
                refugiadas e na <strong>articulação</strong> da diáspora latino
                americana.
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-evenly space-x-4 mt-2 text-sm">
            <Topicos
              content={
                "Defesa e promoção dos direitos das pesoas migrantes e refugiada"
              }
              style={
                "bg-blue-900 text-center mx-auto flex justify-center items-center font-light p-8 rounded-full w-48 h-48 shadow-lg"
              }
            />
            <Topicos
              content={
                "Atuação conjunta na construção de políticas alternativas de governança migratória"
              }
              style={
                "bg-yellow-50 mx-auto text-blue-900 border-4 border-blue-900 text-center flex justify-center items-center font-light p-8 rounded-full w-48 h-48 shadow-lg"
              }
            />
            <Topicos
              content={"Advocacy e incidência e espaços decisórios"}
              style={
                "bg-yellow-700 mx-auto text-white text-center leading-snug flex justify-center items-center font-light p-8 rounded-full w-48 h-48 shadow-lg"
              }
            />
          </div>
          <div className="w-full flex flex-col justify-center mt-4 md:hidden">
            <SlideDestaqueTopicos />
          </div>
          <div className="bg-white px-3 py-1 text-blue-900 border-4 text-center w-36 rounded-lg mt-12 hover:border-4 hover:border-blue-800 hover:bg-transparent hover:text-white transition-all">
            <button>Leia mais</button>
          </div>
        </div>
      </div>
    </>
  );
}
