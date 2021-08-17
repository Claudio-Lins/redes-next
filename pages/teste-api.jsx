import Card from "../components/Card";
import ReactMarkdown from "react-markdown";

export default function conselhoDiretor({ membros }) {
  return (
    <div className="container mx-auto flex flex-col px-4 lg:px-10">
      <h2 className="text-center text-3xl text-gray-700 font-bold mt-8 mb-2">
        Conselho Diretor
      </h2>
      <hr />
      {/* <ReactMarkdown>{quemSomos.header.title}</ReactMarkdown> */}
      <ReactMarkdown></ReactMarkdown>
      {membros && membros.map((membros) => (
        <div key={membros.id}>
         
          <Card
          src='/conselho-internacional/img-conselho-diretor01.jpeg'
          alt={membros.alt}
          nome={membros.Nome}
          cargo={membros.cargo}
          email={membros.email}
          description={membros.biografia}
          />
        </div>))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/equipe-voluntaria-em-2021-s");
  const membros = await res.json();

  return {
    props: {
      membros
    },
  };
}
