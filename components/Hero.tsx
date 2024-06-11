import React from "react";
import { Fragment, useState } from "react";
import Particle from "./Particule";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import Modal from "./Modal";

const Hero = () => {
	//const [showModal, setShowModal] = useState(false);
  return (
	<Fragment>
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center bg-black">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Olá, Eu sou a <span className="text-yellow-400"> Soraia</span>
          </h1>
          <TextEffect />
		  <div className="flex lg:flex-row flex-col gap-5 mx-auto items-center">
		  <Image src="/images/human-coder.png" alt="Human Coder" width={"200"} height={"200"}/>
          <p className="mt-[1.5rem] text-[14px] md:text-[18px] text-[#ffffFF92]">
            Engenheira de Software pela 42 São Paulo. +10 anos de experiência
            gerenciando e desenvolvendo projetos de aplicações web com
            conhecimentos HTML 5, CSS 3, JavaScript,Tailwind, GIT, Docker e
            WordPress.
          </p>
		  </div>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] 
			font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded-sm" href="https://www.linkedin.com/in/soraianovaes/" target="_blank">
              <p className="text-lg md:text-xl">LinkedIn CV </p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </a>
			
            <a className="flex items-center space-x-2" href="https://youtu.be/MnrvmesDIvk?si=Vw5Aj767NDHR5fy7"  >
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
              <p className="text-lg md:text-xl font-semibold text-white">
                Minha Jornada na 42 São Paulo
              </p>
            </a>
          </div>
		 
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]  "
        >
          <Image
            src="/images/soraia2.png"
            alt="Soraia Novaes"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
	</Fragment>
  );
};

export default Hero;
