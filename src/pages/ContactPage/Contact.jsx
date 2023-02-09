import React from "react";

const Contact = () => {
  return (
    <div id="Contacto" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">Contáctame</p>
          <p className="py-6">Si quieres enviarme un correo, estaré encantado</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/e0c17fd9-a3da-4829-abab-95361b1f4ee3"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              placeholder="Escribe tu nombre"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <input
              type="text"
              placeholder="Escribe tu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <textarea
              placeholder="Escribe tu mensaje"
              rows="12"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
