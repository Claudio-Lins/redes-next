import Card from "../components/Card";


export default function conselhoDiretor( {conselhoDiretor} ) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      <h2 className="text-center text-3xl text-gray-700 font-bold mt-8 mb-2">Conselho Diretor</h2>
      <hr />
      {conselhoDiretor && conselhoDiretor.sort((a, b) => a.ordem - b.ordem).map((conselhoDiretor) => (
        <div key={conselhoDiretor.ordem}>
          <Card
          src={conselhoDiretor.picture.url}
          alt={conselhoDiretor.alt}
          cargo={conselhoDiretor.cargo}
          nome={conselhoDiretor.nome}
          email={conselhoDiretor.email}
          description={conselhoDiretor.description}
          />
        </div>))}
      
    </div>
  );
}


export async function getServerSideProps() {
  const res = await fetch(
    "https://cryptic-retreat-90035.herokuapp.com/conselho-diretors"
  );
  const conselhoDiretor = await res.json();

  return {
    props: {
      conselhoDiretor,
    },
  };
}