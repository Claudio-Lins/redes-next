import Link from "next/link";
import CardBlog from "./CardBlog";

export default function BlogsHero({ posts }) {
  return (
    <div className="">
      <h1 className="font-bold text-center text-3xl text-gray-800 mt-4 mb-2">Notícias mais recentes</h1>
      <hr />
      <div className="flex flex-col sm:flex-row sm:space-x-4 w-full justify-center mt-4">
        {posts &&
          posts.slice(0, 3).map((posts) => (
            <div className="flex justify-center" key={posts.id}>
              <Link href={`/${posts.slug}`}>
                <a>
                  <CardBlog posts={posts} />
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
