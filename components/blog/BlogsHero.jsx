import Link from "next/link";
import CardBlog from "./CardBlog";

export default function BlogsHero({ posts }) {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 w-full justify-center">
      {posts &&
        posts.slice(0, 3).map((posts) => (
          <div className='flex justify-center' key={posts.id}>
            <Link href={`/${posts.slug}`}>
              <a>
                <CardBlog posts={posts} />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}
