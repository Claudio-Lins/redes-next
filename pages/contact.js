import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen relative justify-center pb-10 items-center">
      <div className="flex justify-center p-4">
        <Image
          className="rounded-full object-cover"
          src="/contacto/world.svg"
          alt="World"
          width={900}
          height={385}
        />
      </div>
      <div className="container mx-auto items-center p-4">
        <section className="px-1">
          <div className="">
            <h1 className="text-3xl text-gray-800 text-center">
              Entre em contato conosco
            </h1>
            <p className="sm:px-32 py-2 text-sm text-center  text-gray-800">
              Para representação internacional, a Rede Sem Fronteiras possui
              escritórios sediados na América do Sul, no Brasil, e na Europa, em
              Portugal. Entre em contato conosco!
            </p>
          </div>
        </section>
        <div className="flex w-full justify-evenly my-8 space-x-2 mx-auto sm:max-w-3xl">
          <div className="rounded-md shadow-sm border bg-gray-50 p-4 w-full text-center">
            <h3 className="font-semibold text-gray-800 text-xl mb-2">
              América Latina
            </h3>
            <p className="text-sm font-thin">
              Sede em São Paulo, Brasil | Rua Luís Ferreira, n° 142, Tatuapé.
              +55 (11) 2257-3467
            </p>
            <a
              className="text-xs tracking-wider  text-blue-400"
              href="americas@redesf.org"
            >
              E-mail: americas@redesf.org
            </a>
          </div>
          <div className="rounded-md shadow-sm border bg-gray-50 p-4  w-full text-center">
            <h3 className="font-semibold text-gray-800 text-xl mb-2">
              Europa
            </h3>
            <p className="text-sm text-center font-thin">
              Sede em Lisboa, Portugal | Praça do Junqueiro, n° 3, Loja,
              Carcavelos.
            </p>
            <a
              className="text-xs tracking-wider  text-blue-400"
              href="americas@redesf.org"
            >
              E-mail: europa@redesf.org
            </a>
          </div>
        </div>
        <section className="max-w-3xl mx-auto rounded-md shadow-md px-4 py-2">
          <form>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-2 border rounded border-gray-300 text-xs font-light"
                placeholder="Nome completo"
              ></input>
            </div>
            <div className="mt-2 mb-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full p-2 border rounded border-gray-300 text-xs font-light outline-none focus:outline-none"
                placeholder="E-mail"
              ></input>
            </div>
            <div className="flex items-center">
                <textarea className='w-full h-24 rounded-md border-gray-300 my-2 text-xs font-light resize-x' placeholder='Mensagem'></textarea>
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="rounded border-gray-300 text-yellow-600 focus:ring-offset-yellow-600"
              />
              <label htmlFor="terms" className="ml-2 text-xs text-gray-800">
                Eu concordo com os{" "}
                <a href="#" className=" hover:text-yellow-700">
                  Termos
                </a>
              </label>
            </div>
            <div className="block mb-6 mt-4">
              <button type='submit' className="px-4 py-2 bg-yellow-600 w-full text-sm text-white rounded-md">
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
