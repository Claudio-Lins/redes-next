import Image from "next/image";
import { fetchAPIRede } from "../lib/api";
import Logo from "../components/quem/Logos";

export default function Logos({ logos, about }) {
  return (
    <div className="mx-auto py-10 ">
      <h2 className="sm:text-3xl text-2xl font-medium text-center text-gray-900 mb-6">
        <p>{about.Membros[0].title}</p>
        <p>{about.Membros[0].logos[2].alt}</p>
      </h2>
      {/* <div className="relative w-full mx-auto h-[180px] sm:h-[240px] md:h-[320px] xl:h-[450px] 2xl:h-[550px] mb-4">
        <Image
          src={logos[0].image.url}
          alt="Rede Sem Fronteiras"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div> */}
      {/* <Logo logos={logos} /> */}

      {about &&
        about.Membros[0].logos.map((membros) => (
          <div key={membros.id}>
            <p>{membros.alt}</p>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const [logos, about] = await Promise.all([
    fetchAPIRede("/logos"),
    fetchAPIRede("/about"),
  ]);

  return {
    props: { logos, about },
    revalidate: 1,
  };
}
