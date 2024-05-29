import React from "react";
import Image from "next/image";

// Dados dos projetos
const projectsData = [
	{
	  id: 1,
	  imageSrc: '/images/abtester.png',
	  alt: 'AbTester',
	  link: 'https://abtester.com.br'
	},
	{
	  id: 2,
	  imageSrc: '/images/codecamp.png',
	  alt: 'Codecamp',
	  link: 'https://codecamp.com.br'
	},
	{
	  id: 3,
	  imageSrc: '/images/criadoraulas.png',
	  alt: 'Criador de Aulas',
	  link: 'https://criadordeaulas.com.br'
	},
	{
		id: 4,
		imageSrc: '/images/desafiocodigo.png',
		alt: 'Desafio do Código',
		link: 'https://desafiodocodigo.com.br'
	},
	{
		id: 5,
		imageSrc: '/images/ebook.png',
		alt: 'Tecnologias para inovação nas escolas',
		link: 'https://sites.google.com/view/edtecnova/'
	},
	{
		id: 6,
		imageSrc: '/images/propagandaemrevista.png',
		alt: 'Propagandas em Revistas',
		link: 'https://propagandasemrevistas.com.br'
	},
	{
		id: 7,
		imageSrc: '/images/mytrips.png',
		alt: 'My Trips',
		link: 'https://my-trips.soraianovaes.com.br'
	},
	{
		id: 8,
		imageSrc: '/images/empreendelab.png',
		alt: 'Empreendelab',
		link: 'https://empreendelab.com.br'
	},
	{
		id: 9,
		imageSrc: '/images/treinamentoequipes.png',
		alt: 'Treinamento de Equipes',
		link: 'https://treinamentodeequipes.com.br'
	}
	// Adicione outros projetos aqui
  ];

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[2rem]">
      <h1 className="heading">
        Pro<span className="text-yellow-400">Jects</span>
      </h1>
		<div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] mb-20">
			{projectsData.map((project) => (
			<div key={project.id} data-aos="fade-up" data-aos-delay="300">
				<div className="project-card">
					<a href={project.link} target="_blank">
            <Image
              src={project.imageSrc}
              alt={project.alt}
              layout="fill"
              className="object-contain shadow-lg"
			  />
			  </a>
          </div>
		  </div>
		))}
		
		</div>
		</div>
  );
};

export default Projects;
