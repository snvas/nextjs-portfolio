import React from "react";
import { MapIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/16/solid";

const Footer = () => {
	return <div id="contato" className="pt-[8rem] pb-[4rem]  bg-[#09101a]">
		<div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 w-[80%] mx-auto gap-[2rem]">
		<div className="flex items-center space-x-4">
			<div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
				<MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"/>
			</div>
			<div>
				<h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Endereço</h1>
				<p className="text-[17px] w-[100%] text-white opacity-60">EmpreendeCasa</p>
				<p className="text-[17px] w-[100%] text-white opacity-60">São Paulo - SP</p>
			</div>
		</div>
		<div className="flex items-center space-x-4">
			<div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
				<DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"/>
			</div>
			<div>
				<h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">WhatsApp</h1>
				<p className="text-[17px] w-[100%] text-white opacity-60"><a href="https://wa.me/5511940062075">+55 11 94006-2075</a></p>
			</div>
		</div>
		<div className="flex items-center space-x-4">
			<div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
				<EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"/>
			</div>
			<div>
				<h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">Envie um Email</h1>
				<p className="text-[14px] md:text-[17px] w-[90%] text-white opacity-60"><a href="mailto:contato@soraianovaes.com.br">contato@soraianovaes.com.br</a></p>
			</div>
		</div>
		</div>
		<div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1">
			<div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20 text-center">
				Webdev SnVas 2023 | All Rights Reserved
			</div>
		</div>
	</div>
}

export default Footer;