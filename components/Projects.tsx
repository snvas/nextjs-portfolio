import React from "react";
import Image from "next/image";
import { Card, CardFooter } from "@nextui-org/card";

// Dados dos projetos
const projectsData = [
  {
    id: 1,
    imageSrc: "/images/criadoraulas.png",
    alt: "Criador de Aulas",
    link: "https://criadordeaulas.com.br",
	name: "Criador de Aulas",
    stack: "SvelteKit",
  },
  {
    id: 2,
    imageSrc: "/images/abtester.png",
    alt: "AbTester",
    link: "https://abtester.com.br",
	name: "AB Tester",
    stack: "SvelteKit",
  },
  {
    id: 3,
    imageSrc: "/images/propagandaemrevista.png",
    alt: "Propagandas em Revistas",
    link: "https://propagandasemrevistas.com.br",
	name: "Propagandas em Revistas",
    stack: "SvelteKit",
  },
  {
    id: 4,
    imageSrc: "/images/desafiocodigo.png",
    alt: "Desafio do Código",
    link: "https://desafiodocodigo.com.br",
	name: "Desafio do Código",
    stack: "Wordpress",
  },
  {
    id: 5,
    imageSrc: "/images/empreendelab.png",
    alt: "Empreendelab",
    link: "https://empreendelab.com.br",
	name: "EmpreendeLab",
    stack: "SvelteKit",
  },
  {
    id: 6,
    imageSrc: "/images/treinamentoequipes.png",
    alt: "Treinamento de Equipes",
    link: "https://treinamentodeequipes.com.br",
	name: "Treinamento de Equipes",
    stack: "SvelteKit",
  },
  {
    id: 7,
    imageSrc: "/images/ebook.png",
    alt: "Tecnologias para inovação nas escolas",
    link: "https://sites.google.com/view/edtecnova/",
	name: "Tecnologias para Educação",
    stack: "Google Sites",
  },
  {
    id: 8,
    imageSrc: "/images/codecamp.png",
    alt: "Codecamp",
    link: "https://codecamp.com.br",
	name: "CodeCamp",
    stack: "Jekyll, Ruby on Rails",
  },
  {
    id: 9,
    imageSrc: "/images/mytrips.png",
    alt: "My Trips",
    link: "https://my-trips.soraianovaes.com.br",
	name: "My Trips",
    stack: "Next.js",
  },
  {
    id: 10,
    imageSrc: "/images/soraianovaes.png",
    alt: "Soraia Novaes",
    link: "https://www.soraianovaes.com.br",
	name: "Soraia Novaes",
    stack: "Bootstrap",
  },
  {
    id: 11,
    imageSrc: "/images/mulheres-favela.png",
    alt: "Mulheres de Favela",
    link: "https://www.mulheresdefavela.com.br",
	name: "Mulheres de Favela",
    stack: "Wordpress",
  },

  // Adicione outros projetos aqui
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[2rem]"
    >
      <h1 className="heading">
        Pro<span className="text-yellow-400">Jetos</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mb-20">
        {projectsData.map((project) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay="300">
            <Card
              className="transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative bg-white
	w-[100%] border-[20px] h-[200px] md:h-[300px] border-gray-800 rounded-sm"
            >
				     
			 
              <a href={project.link} target="_blank">
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
				 layout="fill"
                  className="object-cover shadow-lg"
                />
              </a>
			  <CardFooter className="pb-0 pt-2 px-4 flex-col mt-20">
            <h3
              className="text-base font-semibold leading-7 tracking-tight dark:text-gray-800"
            >
              { project.name }
            </h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">
              {project.stack }
            </p>
			  </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
