import Link from "next/link";
import Image from "next/image";
import Categoria from "./Categoria";
import DataPost from "./DataPost";
import TitlePost from "./TitlePost";
import ContentPost from "./ContentPost";
import ReadMore from "./ReadMore";
import AuthorPost from "./AuthorPost";
import CardBlog from "./CardBlog";

export default function BlogsHero({ posts }) {
  return (
    <div className="flex space-x-4 w-full justify-center">
      {posts &&
        posts.slice(0, 3).map((posts) => (
          <div>
            <Link href={`/${posts.slug}`} key={posts.id}>
              <a>
                <CardBlog posts={posts} />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}
