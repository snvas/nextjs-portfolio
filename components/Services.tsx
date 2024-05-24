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
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Web Developer
							</h1>
							<p className="text-[15px] text-[#d3d2d2] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum officiis, illo quisquam ut, dolore minima atque sed, dolor tempora aliquid totam alias molestias provident nemo at eligendi nulla hic?</p>
						</div>
					</div>
					<div data-aos="zoom-in" data-aos-delay="300">
						<div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
							<RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Product Owner
							</h1>
							<p className="text-[15px] text-[#d3d2d2] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum officiis, illo quisquam ut, dolore minima atque sed, dolor tempora aliquid totam alias molestias provident nemo at eligendi nulla hic?</p>
						</div>
					</div>
					<div data-aos="fade-left" data-aos-delay="500">
						<div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
							<CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
							<h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]"> Edu Technologies
							</h1>
							<p className="text-[15px] text-[#d3d2d2] font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum officiis, illo quisquam ut, dolore minima atque sed, dolor tempora aliquid totam alias molestias provident nemo at eligendi nulla hic?</p>
						</div>
					</div>
				</div>
				</div>
	);
};

export default Services;