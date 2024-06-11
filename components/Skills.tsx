import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import { Card } from "@nextui-org/card";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      	<h1 className="heading">
        Trabalhos & <span className="text-yellow-400">Habilidades</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
			
          <SkillsItem title="Product Owner" year="2021 - 2024" description="" />
          <SkillsItem title="Project Manager" year="2004 - 2015"  description="" />
          <SkillsLanguage
            skill1="DESENVOLVIMENTO DE PRODUTOs"
            skill2="Gestão de Projetos"
            skill3="Treinamentos Presenciais e Online"
			skill4="Design Instrucional"
			skill5="Wordpress"
			skill6="SEO and SEM"
            level1="w-[95%]"
            level2="w-[95%]"
            level3="w-[90%]"
			level4="w-[90%]"
			level5="w-[80%]"
			level6="w-[70%]"

          />
        </div>
        <div>
          <SkillsItem title="Front-end Developer" year="2019 - 2024"  description="" />
          <SkillsItem title="Web Developer" year="2010 - 2015"  description="" />
          <SkillsLanguage
			skill1="HTML5"
            skill2="TAILWIND CSS"
            skill3="javascript"
            skill4="svelte/SVELTEKIT"
            skill5="vue.JS"
            skill6="react.JS" 
            level1="w-[95%]"
            level2="w-[90%]"
            level3="w-[85%]"
            level4="w-[85%]"
            level5="w-[80%]"
            level6="w-[75%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
