import Image from "next/image";
import Card from "../components/Card";
import { fetchAPIRede } from "../lib/api";

export default function SecretariaTecnica({ coordenacao }) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      <h2 className="text-center text-3xl text-gray-700 font-bold mt-8 mb-2">
        Secretaria Técnica
      </h2>
      <hr />

      {coordenacao &&
        coordenacao
          .sort((a, b) => a.ordem - b.ordem)
          .map((coordenacao) => (
            <div key={coordenacao.id}>
              <Card
                src={coordenacao.imagem.url}
                alt={coordenacao.alt}
                cargo={coordenacao.cardo}
                nome={coordenacao.nome}
                email={coordenacao.email}
                description={coordenacao.biografia}
              />
            </div>
          ))}
    </div>
  );
}

export async function getStaticProps() {
  const [coordenacao] = await Promise.all([fetchAPIRede("/coordenacaos")]);

  return {
    props: { coordenacao },
    revalidate: 1,
  };
}
// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://cryptic-retreat-90035.herokuapp.com/conselho-internacionals"
//   );
//   const conselhoInternacional = await res.json();

//   return {
//     props: {
//       conselhoInternacional,
//     },
//   };
// }
