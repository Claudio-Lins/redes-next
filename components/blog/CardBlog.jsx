import Image from "next/image";
import Categoria from "./Categoria";
import DataPost from "./DataPost";
import TitlePost from "./TitlePost";
import ContentPost from "./ContentPost";
import ReadMore from "./ReadMore";
import AuthorPost from "./AuthorPost";

export default function CardBlog({ posts }) {
  return (
    <div className="max-w-[370px] rounded-md shadow-md bg-gray-50 border overflow-hidden">
      <div className="w-full h-[168px] lg:h-[250px] relative">
        <Image src={posts.cover.url} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full p-6">
        <div className="flex justify-between mb-2">
          <Categoria name={posts.category.name} />
          <DataPost date={posts.date} />
        </div>
        <div className="mt-2">
          <TitlePost titlePost={posts.title} />
        </div>
        <div className="mt-2">
          <ContentPost contentPost={posts.content} />
        </div>
        <div className="flex justify-between items-center mt-4">
          <AuthorPost authorName={posts.authors.name} />
          <ReadMore read='Leia mais...'/>
        </div>
      </div>
    </div>
  );
}
