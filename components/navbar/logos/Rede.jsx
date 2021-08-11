import Link from "next/link";
import Image from "next/image";

export default function Rede() {
  return (
    <>
      <div className=" cursor-pointer">
        <Link href="/" passHref>
          <Image
            src="/Logos/lg-redesf-1280x427.png"
            alt="Rede Sem Fronteiras"
            width={256}
            height={85}
          />
        </Link>
      </div>
    </>
  );
}
