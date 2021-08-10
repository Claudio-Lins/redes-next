import Link from "next/link";
import Image from "next/image";

export default function LgMembers(props) {
  return (
    <div className=" p-8">
      <Link href={props.link || "#"}>
        <a>
          <Image
            src={"/quem-somos/Logos/" + props.src}
            alt={props.alt}
            layout='intrinsic'
            width={props.width}
            height={props.height}
          />
        </a>
      </Link>
    </div>
  );
}
