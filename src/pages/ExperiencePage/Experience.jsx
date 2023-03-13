import React from "react";

import react from "../../assets/logos/react.svg";
import html from "../../assets/logos/html.svg";
import css from "../../assets/logos/css.svg";
import javascript from "../../assets/logos/_javascript.png";
import net from "../../assets/logos/net.png";
import ce from "../../assets/logos/c.svg";
import php from "../../assets/logos/php.svg";
import angular from "../../assets/logos/angular.svg";
import node from "../../assets/logos/nodejs.svg";
import mongo from "../../assets/logos/mongo.svg";
import sql from "../../assets/logos/sql.png";
import symfony from "../../assets/logos/symfony.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 5,
      src: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 7,
      src: php,
      title: "PHP",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    
    {
      id: 9,
      src: symfony,
      title: "Symfony",
      style: "shadow-gray-300",
    },
    {
      id: 10,
      src: ce,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: net,
      title: ".Net",
      style: "shadow-gray-300",
    },
    {
      id: 12,
      src: sql,
      title: "SQL Server",
      style: "shadow-gray-300",
    }
  ];

  return (
    <div id="Experiencia" className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experiencia</p>
          <p className="py-6">Trabajando con algunas de las tecnologías y herramientas más utilizadas en el mundo del Desarrollo Web 📟</p> 
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
              <img src={src} alt={title} className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;