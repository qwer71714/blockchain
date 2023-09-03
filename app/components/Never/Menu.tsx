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
        className="dark:text-white font-semibold hover:text-blue-500 dark:hover:text-blue-500 duration-200"
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
        backdrop-blur-md
        duration-200
        border-stone-200
        bg-white/60
        dark:border-stone-950
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
          py-2
          w-11/12
          "
      >
        <a href="/">
          <Image
            src={BlockChain}
            alt="Picture of the author"
            width={36}
            height={36}
          />
        </a>
        <ul className="flex">
          <NavLink href="/Pages/Docs">Docs</NavLink>
          <NavLink href="/Pages/Minecraft">Minecraft</NavLink>
          <NavLink href="/Pages/Recruitment">Recruitment</NavLink>
          <NavLink href="/Pages/Team">Team</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
