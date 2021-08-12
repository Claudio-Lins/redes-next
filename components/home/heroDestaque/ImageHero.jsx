import Image from "next/image";

export default function ImageHero() {
  return (
    <div className="w-full h-[260px] md:h-[630px] pt-12 xl:h-[850px] relative">
      <Image
        src="/home/img03.jpeg"
        alt="Imagem Rede sem fronteiras"
        layout="fill"
        objectFit='cover'
        loading='lazy'
        quality='high'
      />
    </div>
  );
}

// function getDa