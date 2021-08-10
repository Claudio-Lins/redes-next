export default function BlocoTxt(props) {
  return (
    <div className="mb-10">
      <div className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-left border-b">
        <h1>{props.title}</h1>
      </div>
      <div className="mx-auto text-justify font-light text-gray-600 body-font leading-relaxed">
        {props.content}
      </div>
    </div>
  );
}
