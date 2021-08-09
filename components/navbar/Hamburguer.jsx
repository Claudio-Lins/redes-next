import Image from "next/image";

export default function Hamburguer() {
  return (
    <div className="md:hidden inline-flex justify-center items-center cursor-pointer drop-shadow-md hover:drop-shadow-none">
      <Image
        src="/navbar/hamburguer.svg"
        alt="Menu hamburguer"
        width={25}
        height={25}
      />
    </div>
  );
}
