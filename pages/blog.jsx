import { fetchAPIRede } from "../lib/api";
import Image from 'next/image';
// import MarkdownIt from "markdown-it";
// import Marked from "marked";

export default function Blog({ homepage, articles }) {
  //   const content = Marked(articles.content);
  // const title = Marked(title);

  //   const md = new MarkdownIt();
  //   const htmlContnet = md.render(articles.content);

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <div>
        {articles &&
          articles.map((articles) => (
            <div key={articles.id}>
                <div className="font-bold text-3xl">{articles.title}</div>
                <div className="font-semibold text-xl">{articles.description}</div>
              {/* <div className="prose"
                dangerouslySetInnerHTML={{ __html: articles.content }}
              ></div> */}
              {/* <div>
                  <Image 
                  src={articles.image.url}
                  alt={articles.image.name}
                  width={500}
                  height={500}
                  layout='intrinsic'
                  loading='lazy'
                  quality='high'
                  />
              </div> */}
            </div>
          ))}
      </div>
    </div>
  );
}

////////////////////////////////////////////////////////////////
export async function getStaticProps() {
  const [homepage, articles] = await Promise.all([
    fetchAPIRede("/homepage"),
    fetchAPIRede("/articles"),
  ]);

  return {
    props: {
      homepage,
      articles,
    },
    revalidate: 1,
  };
}
////////////////////////////////////////////////////////////////
