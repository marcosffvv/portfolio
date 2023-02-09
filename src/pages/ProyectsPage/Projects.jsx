import React from "react";
// import proyect1 from "../assets/portfolio/proyect1.jpg";
// import proyect2 from "../assets/portfolio/proyect2.jpg";
// import proyect3 from "../assets/portfolio/proyect3.jpg";
// import proyect4 from "../assets/portfolio/proyect4.jpg";
// import proyect5 from "../assets/portfolio/proyect5.jpg";
// import proyect6 from "../assets/portfolio/proyect6.jpg";
import got from "../../assets/portfolio/GOT.jpg";

const Projects = () => {
  const projectsList = [
    {
      id: 1,
      name: "Game of Front",
      src: got,
      hrefCodigo: "https://ecom-estore.netlify.app/",
      hrefWeb: "https://github.com/Rahmathirshad/E-Commerce---Website",
    },
    {
      id: 2,
      name: "proyect 2",
      src: got,
      hrefCodigo: "https://aifacereco.netlify.app/",
      hrefWeb: "https://github.com/Rahmathirshad/Face-Recognition-App",
    },
    {
      id: 3,
      name: "proyect 3",
      src: got,
      hrefCodigo: "https://rahmathirshad.netlify.app/",
      hrefWeb: "https://github.com/Rahmathirshad/Personal-Portfolio",
    },
    {
      id: 4,
      name: "proyect 4",
      src: got,
      hrefCodigo: "https://rahmathirshad.github.io/robo-friends-app/",
      hrefWeb: "https://github.com/Rahmathirshad/robo-friends-app",
    },
    {
      id: 5,
      name: "proyect 5",
      src: got,
      hrefCodigo: "https://mydailytodos.netlify.app/",
      hrefWeb: "https://github.com/Rahmathirshad/Todos-App",
    },
    {
      id: 6,
      name: "proyect 6",
      src: got,
      hrefCodigo: "https://filedownloader1.netlify.app/",
      hrefWeb: "https://github.com/Rahmathirshad/File_Downloader--Vanilla_JavaScript",
    },
  ];

  return (
    <div name="Proyectos" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24">

        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Proyectos</p>
          <p className="py-6">Pudes ver mis proyectos más importantes en este apartado o en el enlace a GitHUb</p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefLive, hrefCode }) => (
            <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">

              <div>
                <img src={src} alt={name} className="rounded-t-md"/>
              <p className="bg-gray-900  font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefCode} target="_blank" rel="noreferrer">Código</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefLive} target="_blank" rel="noreferrer">Web</a>
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