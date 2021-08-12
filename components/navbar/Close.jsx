import Image from "next/image";

export default function Close() {
  return (
    <div className="md:hidden inline-flex justify-center items-center cursor-pointer drop-shadow-md hover:drop-shadow-none">
      <Image src="/navbar/close.svg" alt="Menu close" width={25} height={25} />
    </div>
  );
}
