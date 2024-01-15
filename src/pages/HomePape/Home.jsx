import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import img1 from "../../assets/profile/inicio.png"
import SocMediaLinks from "../../components/Socials/Socials";


const Home = () => {
  return (
      <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">

          <div className="flex flex-col justify-center h-full">
            
            <h2 className="text-4xl sm:text-7xl text-white">SQL Data Developer</h2>
            <br/>
            <br/>
            <h2 className="text-4xl sm:text-7xl  text-white">Web Developer</h2>

          </div>

          <div>
            <img src={img1} alt="my profile" className="h-72 md:h-96"/>
          </div>

        </div>
      </div>
  );
};

export default Home;