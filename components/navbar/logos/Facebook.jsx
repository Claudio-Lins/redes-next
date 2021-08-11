import Link from "next/link";
import Image from "next/image";

export default function Facebook() {
  return (
    <>
      <div className="flex cursor-pointer hover:animate-bounce">
        <Link href="/" passHref>
          <Image
            src="/social-network/facebook-icon.svg"
            alt="Facebook"
            width={18}
            height={18}
          />
        </Link>
      </div>
    </>
  );
}
