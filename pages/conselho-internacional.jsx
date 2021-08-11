import Image from "next/image";
import Card from "../components/Card";

export default function conselhoInternacional( {conselhoInternacional} ) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      <h2 className="text-center text-3xl text-gray-700 font-bold mt-8 mb-2">Conselho Interenacional</h2>
      <hr />
      
      {conselhoInternacional && conselhoInternacional.sort((a, b) => a.ordem - b.ordem).map((conselhoInternacional) => (
        <div key={conselhoInternacional.id}>
          <Card
          src={conselhoInternacional.picture.url}
          alt={conselhoInternacional.alt}
          cargo={conselhoInternacional.cargo}
          nome={conselhoInternacional.nome}
          email={conselhoInternacional.email}
          description={conselhoInternacional.description}
          />
        </div>))}
      
    </div>
  );
}


export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/conselho-internacionals"
  );
  const conselhoInternacional = await res.json();

  return {
    props: {
      conselhoInternacional,
    },
  };
}