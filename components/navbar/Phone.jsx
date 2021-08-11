import Link from "next/link";
import Image from "next/image";

export default function Phone() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex space-x-2">
          <Link href="/" passHref>
            <Image
              src="/social-network/phone-call.svg"
              alt="Phone Call"
              width={18}
              height={18}
            />
          </Link>
          <h3 className="text-gray-50 text-sm tracking-wide">
            +351 123 456 789
          </h3>
        </div>
      </div>
    </>
  );
}
