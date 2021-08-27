import Image from "next/image";

export default function Arquivos() {
  return (
    <div className="container mt-4">
      <div className=" max-w-[340px] h-[110px] mx-auto rounded-2xl border shadow-md flex justify-between bg-white overflow-hidden sm:flex-col sm:items-center sm:w-[160px] sm:h-[250px]">
        <div></div>
        <div className="relative w-[110px] h-full] sm:h-[120px] sm:w-[85px] mx-auto sm:my-2">
          <Image
            src="/arquivos/Informes-rsf/direitos-do-cidadao-estrangeiro-em-portugal–covid-19-ed01-2020.png"
            alt="direitos-do-cidadao-estrangeiro-em-portugal–covid-19-ed01-2020.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" max-w-[230px] sm:h-[120px] sm:max-w-[160px] bg-white p-2 text-center font-semibold text-xs flex items-center ">
          <p>
            Guia de Apoio Psicossocial para migrantes: direitos e acesso à saúde
            no enfrentamento ao coronavírus
          </p>
        </div>
      </div>
    </div>
  );
}
