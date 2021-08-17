import Image from "next/image";
import ReactMarkdown from "react-markdown";



export default function Card(props) {
  return (
    <div className="bg-white mx-auto p-4 lg:w-5/6 2xl:w-[1200px] mt-8 rounded-md shadow-md leading-tight border-gray-100 border">
      <div className="flex flex-col md:flex-row divide-y items-center md:divide-x md:divide-y-0">
        <div className=" sm:min-w-[192px] flex flex-col items-center -ml-3 ">
          <div className="relative w-32 h-32 shadow-md rounded-full overflow-hidden">
            <Image
              src={props.src || '/assets/user.svg'}
              alt={props.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col text-center text-gray-600 mt-2 w-full px-2">
            <h3 className="font-bold text-[10px]">{props.cargo}</h3>
            <p className="font-light text-xs">{props.nome}</p>
            <a className="text-xs sm:text-[10px] ml-2 text-blue-400"
              href="mailto:{props.email}"
            >
              {props.email}
            </a>
          </div>
        </div>
        <div className="mx-auto mt-2 ">
          <p className=" font-light text-sm text-gray-600 text-justify py-2 px-2 antialiased prose max-w-none">
            {/* dangerouslySetInnerHTML={{ __html: props.description }}> */}
            <ReactMarkdown>{props.description}</ReactMarkdown>
          </p>
        </div>
      </div>
    </div>
  );
}
