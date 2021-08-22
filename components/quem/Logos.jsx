import Image from "next/image";
import Link from "next/link";
import LgMembers from "./lgMembers";

export default function Logos(props) {
  return (
    <div className=" container flex flex-wrap justify-evenly w-full mt-8 lg:px-52">
      {props.logos &&
        props.logos
          .slice(1)
          .sort((a, b) => a.ordem - b.ordem)
          .map((props) => (
            <div key={props.id} className="my-4 mx-8">
              <Image
                src={props.image.url}
                alt={props.image.alternativeText}
                width={props.width}
                height={props.height}
                layout="intrinsic"
                objectFit="contain"
              />
            </div>
          ))}
    </div>
  );
}
