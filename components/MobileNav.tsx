import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";


interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09191a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
	  <div className="nav-link-mobile"><Link href={"/"}>Home</Link></div>
        <div className="nav-link-mobile"><Link href={"/#services"}>SERVIÇOS</Link></div>
        <div className="nav-link-mobile"><Link href={"/#projects"}>PROJETOS</Link></div>
        <div className="nav-link-mobile"><Link href={"https://dev.soraianovaes.com.br"} target="_blank">VUE PORTFOLIO</Link></div>
        <div className="nav-link-mobile"><Link href={"/#contato"}>CONTATO</Link></div>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
