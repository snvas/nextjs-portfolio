import React from "react";
import {CodeBracketSquareIcon, RocketLaunchIcon, CommandLineIcon} from "@heroicons/react/20/solid";

const Services = () => {
	return (
		<div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
			<h1 className="heading">
				My <span className="text-yellow-400"> Services</span>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
					<div data-aos="fade-right">
						<div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
							<CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Frontend Web Developer
							</h1>
							<p className="text-[15px] text-[#d3d2d2] font-normal">Tenho mais de cinco anos de experiência como desenvolvedora web front-end, criando websites dinâmicos e responsivos com frameworks como Svelte, Next.js, ReactJS e Vue.js. Especializo-me em desenvolvimento e manutenção de websites em WordPress, SEO, e-commerce e ERP. Minha experiência inclui gestão de hospedagem e manutenção de websites, garantindo entregas de alta qualidade para diversos clientes.</p>
						</div>
					</div>
					<div data-aos="zoom-in" data-aos-delay="300">
						<div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
							<RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Product Owner
							</h1>
							<p className="text-[15px] text-[#d3d2d2] font-normal">Como Product Owner, liderei o desenvolvimento do Criador de Aulas, uma plataforma de criação de aulas interativas. Colaborei com equipes multifuncionais para definir a visão estratégica, gerenciar o backlog e facilitar a comunicação entre stakeholders, resultando em mais de 6600 usuários e 500 aulas publicadas. Minha abordagem ágil e colaborativa assegurou entregas de alta qualidade e impactou positivamente a educação.</p>
						</div>
					</div>
					<div data-aos="fade-left" data-aos-delay="500">
						<div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
							<CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Project Manager
							</h1>
							<p className="text-[15px] text-[#d3d2d2] font-normal">Tenho vasta experiência em gestão de projetos, coordenando a transição do Currículo Nacional para plataformas online e treinando milhares de professores em tecnologias digitais. Minha liderança e habilidades em design instrucional permitiram implementar programas de treinamento que melhoraram o engajamento das equipes. Também gerenciei projetos estratégicos com orçamentos multimilionários, colaborando com líderes executivos e equipes multifuncionais.</p>
						</div>
					</div>
				</div>
				</div>
	);
};

export default Services;