import Image from "next/image";
import React from "react";
import BlockChain from "@/public/images/BlockChain-logo-no.svg";

const Menu = () => {
  type NavLinkProps = {
    href: string; // href 속성은 문자열 타입으로 정의됩니다.
    children: React.ReactNode; // children 속성은 React의 노드 타입으로 정의됩니다.
  };

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <li className="ml-9">
      <a
        href={href}
        className="dark:text-white font-semibold dark:hover:text-blue-500 duration-200"
      >
        {children}
      </a>
    </li>
  );
  return (
    <div
      className="
        top-0
        fixed
        w-full
        border-b-2
        backdrop-blur-xl
        duration-200
        bg-white/60
        border-stone-100
        dark:border-stone-800
        dark:bg-black/50
        "
    >
      <div
        className="
          container
          mx-auto
          flex
          items-center
          justify-between
          py-3
          w-11/12
          "
      >
        <a href="/">
          <Image
            src={BlockChain}
            alt="Picture of the author"
            width={42}
            height={42}
          />
        </a>
        <ul className="flex">
          <NavLink href="/Pages/Docs">Docs</NavLink>
          <NavLink href="/">Minecraft</NavLink>
          <NavLink href="/">Recruitment</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
