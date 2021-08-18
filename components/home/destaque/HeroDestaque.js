import SlideDestaque from "./SlideDestaque";
import Image from "next/image";

export default function HeroDestaque() {
  return (
    <>
      <div className=" relative shadow-md flex flex-col w-full min-h-full justify-center items-center">
        <div className="w-full ">
          <SlideDestaque />
        </div>
        <div className="absolute p-4 z-10 lg:px-56 text-white bg-black w-full min-h-full bg-opacity-40 flex flex-col justify-center">
          <div className="border border-white p-4 -mt-20 md:m-4">
            <div className="bg-white bg-opacity-70 text-gray-900 p-4">
              <h1 className="text-3xl font-bold text-center mb-2 text-blue-900 antialiased">A Rede Sem Fronteiras</h1>
              <p className="text-xs text-center md:p-4 leading-relaxed antialiased">
              Somos uma <strong>rede</strong> de organizações da sociedade civil, associações de imigrantes, instituições acadêmicas e ativistas com atuação na <strong>defesa</strong> e na <strong>promoção</strong> dos direitos das pessoas migrantes e refugiadas e na <strong>articulação</strong> da diáspora latino americana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
