import React from "react";
// import proyect1 from "../assets/portfolio/proyect1.jpg";
// import proyect2 from "../assets/portfolio/proyect2.jpg";
// import proyect3 from "../assets/portfolio/proyect3.jpg";
// import proyect4 from "../assets/portfolio/proyect4.jpg";
// import proyect5 from "../assets/portfolio/proyect5.jpg";
// import proyect6 from "../assets/portfolio/proyect6.jpg";
import img from "../../assets/portfolio/proyects.png";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "REACT-GAME-OF-THRONES",
      src: img,
      hrefCodigo: "https://github.com/marcosffvv/react-game-of-thrones",
      hrefWeb: "https://react-game-of-thrones-tau.vercel.app/",
    },
    {
      id: 2,
      name: "ANGULAR-SHOPEAME",
      src: img,
      hrefCodigo: "https://github.com/marcosffvv/front-shopeame",
      hrefWeb: "https://shopeame-taupe.vercel.app/",
    },
    {
      id: 3,
      name: "JAVASCRIPT-POKEAPI",
      src: img,
      hrefCodigo: "https://github.com/marcosffvv/pokedex-pokeapi",
      hrefWeb: "https://pokedex-pokeapi-five.vercel.app/",
    },
    {
      id: 4,
      name: "REACT-RELOJ",
      src: img,
      hrefCodigo: "https://github.com/marcosffvv/reloj-react",
      hrefWeb: "https://reloj-react-zeta.vercel.app/",
    },
    {
      id: 5,
      name: "ANGULAR-EXCHANGES",
      src: img,
      hrefCodigo: "https://github.com/marcosffvv/exchanges-angular",
      hrefWeb: "https://exchanges-angular.vercel.app/conversor",
    },
    {
      id: 6,
      name: "REACT-DISNEY-API",
      src: img,
      hrefCodigo: "https://github.com/marcosffvv/react-disney-gallery",
      hrefWeb: "https://react-disney-gallery.vercel.app/",
    },
  ];

  return (
    <div name="Proyectos" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24">

        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Proyectos</p>
          <p className="py-6">Pudes ver el código en GitHUb o visitar la web desplegada en Vercel 📲</p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefCodigo, hrefWeb }) => (
            <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">

              <div>
                <img src={src} alt={name} className="rounded-t-md w-full"/>
              <p className="bg-gray-900  font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefCodigo} target="_blank" rel="noreferrer">Código</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefWeb} target="_blank" rel="noreferrer">Web</a>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;