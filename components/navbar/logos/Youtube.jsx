import Link from "next/link";
import Image from "next/image";

export default function Youtube() { 
    return (
        <>
            <div className="flex cursor-pointer hover:animate-bounce">
              <Link href="/" passHref>
                <Image
                  src="/social-network/youtube-icon.svg"
                  alt="Youtube"
                  width={23}
                  height={23}
                />
              </Link>
            </div>
        </>
    )
}