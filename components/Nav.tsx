import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
	openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          SORAIA 
		  <span className="text-yellow-300"> NOVAES</span>
        </h1>
        <div className="nav-link"><Link href={"/"}>Home</Link></div>
        <div className="nav-link"><Link href={"/#services"}>SERVIÇOS</Link></div>
        <div className="nav-link"><Link href={"/#projects"}>PROJETOS</Link></div>
        <div className="nav-link"><Link href={"https://dev.soraianovaes.com.br"} target="_blank">VUE PORTFOLIO</Link></div>
        <div className="nav-link"><Link href={"/#contato"}>CONTATO</Link></div>
		<div onClick={openNav}>
			<Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300"/>
		</div>
      </div>
    </div>
  );
};

export default Nav;
