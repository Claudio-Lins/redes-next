import Card from "../Card";

export default function Secretarias(props) {
    return (
        <>
        <h2 className="text-center text-3xl text-gray-700 font-bold mt-8 mb-2">
        {props.title}
      </h2>
      <hr />
      {props.secretaria &&
        props.secretaria.sort((a, b) => a.ordem + b.ordem).map((props) => (
            <div key={props.id}>
              <Card
                src={props.imagem.url}
                alt={props.alt}
                cargo={props.cargo}
                nome={props.nome}
                email={props.email}
                description={props.biografia}
              />
            </div>
          ))}
        </>
    )
}