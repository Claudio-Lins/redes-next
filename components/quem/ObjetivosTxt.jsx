export default function ObjetivosTxt(props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border flex items-center border-gray-200 p-6 rounded-lg">
        <div className="w-10 h-10 p-6 flex items-center justify-center ">
          <h3 className="font-bold text-5xl text-yellow-600">{props.number}</h3>
        </div>
        <p className="leading-relaxed text-base">{props.text}</p>
      </div>
    </div>
  );
}
