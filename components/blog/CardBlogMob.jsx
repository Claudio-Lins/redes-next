import Image from "next/image";
import Categoria from "./Categoria";
import DataPost from "./DataPost";
import TitlePost from "./TitlePost";


export default function CardBlogMob({ posts }) {
  return (
    <div className="w-full max-h-[108px] flex rounded-md shadow-md bg-gray-50 border overflow-hidden">
      <div className="min-w-[108px] h-[108px] relative">
        <Image src={posts.cover.url} layout="fill" objectFit="fill" alt={posts.title} />
      </div>
      <div className="p-4 flex flex-col gap-y-2 justify-center">
        <div className="flex justify-between">
          <Categoria name={posts.category.name} />
          <DataPost date={posts.date} />
        </div>
        <div className="">
          <TitlePost titlePost={posts.title.slice(0, 40) + ' ...'} />
        </div>
      </div>
    </div>
  );
}
