import Image from "next/image";

export default function TextDestaque() {
  return (
    <>
      <div className="flex justify-center">
        <Image src="/home/destaque/frame.svg" width={822} height={213} alt='' />
      </div>
      <div className="tracking-wide text-center md:w-1/3 text-black top-0">
        <h1 className=" font-bold font-Lobster tracking-widest text-5xl ">Agro Bahia Atacadista</h1>
        <p className="text-sm ">
          Nossa missão é oferecer produtos de extrema qualidade, visando atender
          a demanda nacional e internacional e contribuir cada vez mais com a
          história do cacau e crescimento da região.
        </p>
      </div>
    </>
  );
}
