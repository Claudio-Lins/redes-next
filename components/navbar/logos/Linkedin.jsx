import Link from "next/link";
import Image from "next/image";

export default function Linkedin() {
  return (
    <>
      <div className="flex cursor-pointer hover:animate-bounce">
              <Link href="/" passHref>
                <Image
                  src="/social-network/linkedin-icon.svg"
                  alt="Linkedin"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
    </>
  );
}
