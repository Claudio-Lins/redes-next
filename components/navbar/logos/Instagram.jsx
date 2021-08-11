import Link from "next/link";
import Image from "next/image";

export default function Instagram() {
  return (
    <>
      <div className="flex cursor-pointer hover:animate-bounce">
        <Link href="/" passHref>
          <Image
            src="/social-network/instagram-icon.svg"
            alt="Instagram"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </>
  );
}
