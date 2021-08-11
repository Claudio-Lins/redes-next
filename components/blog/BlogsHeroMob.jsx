import Link from "next/link";
import CardBlog from "./CardBlog";
import CardBlogMob from "./CardBlogMob";


export default function BlogsHeroMob({ posts }) {
  return (
    <div className="flex flex-col gap-y-4 justify-center px-4">
      {posts &&
        posts.slice(0, 3).map((posts) => (
          <div className='' key={posts.id}>
            <Link href={`/${posts.slug}`}>
              <a>
              <CardBlogMob posts={posts} />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}
