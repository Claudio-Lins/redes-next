import Image from "next/image";

export default function AuthorPost(props) {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8 rounded-full  overflow-hidden">
        <Image
          src="/conselho-diretor/img-conselho-diretor01.jpeg"
          alt='img-conselho-diretor01'
          layout="fill"
        />
      </div>
      <div className=" text-xs tracking-wide font-semibold leading-tight antialiased text-gray-800">
        {props.authorName}
      </div>
    </div>
  );
}
