

export default function Blog({  }) {


  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      blog page
      {/* <div>
        {articles &&
          articles.map((articles) => (
            <div key={articles.id}>
                <div className="font-bold text-3xl">{articles.title}</div>
                <div className="font-semibold text-xl">{articles.description}</div>
              <div className="prose"
                dangerouslySetInnerHTML={{ __html: articles.content }}
              ></div>
              <div>
                  <Image 
                  src={articles.image.url}
                  alt={articles.image.name}
                  width={500}
                  height={500}
                  layout='intrinsic'
                  loading='lazy'
                  quality='high'
                  />
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
}

////////////////////////////////////////////////////////////////
// export async function getStaticProps() {
//   const [homepage, articles] = await Promise.all([
//     fetchAPIRede("/homepage"),
//     fetchAPIRede("/articles"),
//   ]);

//   return {
//     props: {
//       homepage,
//       articles,
//     },
//     revalidate: 1,
//   };
// }
////////////////////////////////////////////////////////////////
