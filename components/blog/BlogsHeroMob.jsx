import Link from "next/link";
import CardBlogMob from "./CardBlogMob";

export default function BlogsHeroMob({ posts }) {
  return (
    <div>
      <h1 className="font-bold text-center text-3xl text-gray-800 mt-4 mb-2">
        Notícias mais recentes
      </h1>
      <hr />
      <div className="flex flex-col gap-y-4 justify-center mt-2 px-4">
        {posts &&
          posts.slice(0, 3).map((posts) => (
            <div className="" key={posts.id}>
              <Link href={`/${posts.slug}`}>
                <a>
                  <CardBlogMob posts={posts} />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
