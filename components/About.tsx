import React from "react";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] md-[1rem]">
            SOBRE MIM
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Transformando <span className="text-yellow-400">Visões</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-md"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Publicitária, Web developer, Fotógrafa, Design Thinker, Google
              Innovator e apaixonada por Educação. Como eu me tornei uma
              Instrutora certificada Google?
            </p>
          </div>
		  <a href="https://youtu.be/etzWzhyv3jU?si=ojotxrcmMaD8W-JG" target="_blank">
          <button className="flex items-center space-x-2">
            <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
            <p className="text-[20px] font-semibold text-white">
              Assista ao Video
            </p>
          </button></a>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] h-[300px] relative"
        >
          <Image
            src="/images/soraia.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
