import Card from "../components/Card";

export default function conselhoDiretor( {conselhoDiretor} ) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      
      {conselhoDiretor && conselhoDiretor.map((conselhoDiretor) => (
        <div key={conselhoDiretor.ordem}>
          <Card
          src={conselhoDiretor.picture.url}
          alt={conselhoDiretor.alt}
          cargo={conselhoDiretor.cargo}
          nome={conselhoDiretor.nome}
          email={conselhoDiretor.email}
          description={conselhoDiretor.description}
          />
          {conselhoDiretor.ordem}
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