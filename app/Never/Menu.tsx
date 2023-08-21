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
      <a href={href} className="font-semibold hover:text-blue-600 duration-200">
        {children}
      </a>
    </li>
  );
  return (
    <div className="border-b border-b-stone-200">
      <div
        className="
          container
          mx-auto
          flex
          items-center
          justify-between
          py-4
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
          <NavLink href="/">Docs</NavLink>
          <NavLink href="/">Minecraft</NavLink>
          <NavLink href="/">Recruitment</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
