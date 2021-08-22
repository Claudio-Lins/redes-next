import Image from "next/image";
import { fetchAPIRede } from "../lib/api";
import Logo from "../components/quem/Logos";

export default function Logos({ logos }) {
  return (
    <div className="mx-auto py-10">
      <h2 className="sm:text-3xl text-2xl font-medium text-center text-gray-900 mb-6">
        Membros
      </h2>
      <div className="relative h-[160px] md:h-[320px] xl:h-[450px] mb-4">
        <Image
          src={logos[0].image.url}
          alt="Rede Sem Fronteiras"
          layout="fill"
          objectFit="contain"
          loading="lazy"
        />
      </div>
      <Logo logos={logos} />
    </div>
  );
}

export async function getStaticProps() {
  const [logos] = await Promise.all([fetchAPIRede("/logos")]);

  return {
    props: { logos },
    revalidate: 1,
  };
}
