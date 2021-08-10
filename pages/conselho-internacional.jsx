import Image from "next/image";
import Card from "../components/Card";

export default function conselhoInternacional( {conselhoInternacional} ) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      
      {conselhoInternacional && conselhoInternacional.sort((n1, n2) => n1 + n2).map((conselhoInternacional) => (
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