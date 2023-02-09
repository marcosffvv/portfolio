import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="Sobre Mí" className="w-full bg-gradient-to-b from-gray-800 to-black text-white lg:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="lg:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-white-500">Sobre Mí</p>
          <p className="text-xl mt-5 lg:mt-20">Hola, mi nombre es Marcos Fraile y soy Full Stack Developer 👨‍💻</p>
        </div>

        <p>Mi objetivo principal como programador es mantener el codigo de mis proyectos limpios y optimizados.</p>
        <p>Me apasiona el trabajo en equipo y la metodología AGILE.</p>
        <p>Siempre estoy pensando en la mejor forma de que el usuario se sienta cómodo.</p>
        <p>Espero acabar compitiendo con los mejores desarrolladores y rodeado de personas con mucho nivel.</p>
          <br></br>
          <br></br>

        <div className="lg:flex gap-32">
          <p>Bootcamp Desarrollo Web Full Stack
            <br></br>
            <br></br>
          Ubicación: Madrid, España
            <br></br>
          </p>
            <br></br>
          <p>Email: marcosfrailefdz@gmail.com
            <br></br>
            <br></br>
          Número: +34 640532276
            <br></br>
          </p>
            <br></br>
        </div>

        <br></br>
        <Link to="contact" smooth duration={1500} className=" bg-cyan-600 w-fit px-10 py-3 rounded-md cursor-pointer">Contáctame</Link>
      
      </div>
    </div>
  );
};

export default About;