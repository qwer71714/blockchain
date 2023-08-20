import Image from "next/image";
import React from "react";
import BlockChain from "@/public/images/BlockChain-logo-no.png";

const Menu = () => {
  type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a
      href={href}
      className="ps-8 font-normal hover:text-blue-600 duration-300"
    >
      {children}
    </a>
  );
  return (
    <div className="border-b border-zinc-200">
      <div className="container mx-auto py-4">
        <div className="flex items-center">
          <Image
            src={BlockChain}
            alt="Picture of the author"
            width={46}
            height={46}
          />
          <p className="pl-3 text-2xl font-bold">BlockChain</p>
          <div className="flex justify-end ms-auto">
            <NavLink href="/">Docs</NavLink>
            <NavLink href="/">Software</NavLink>
            <NavLink href="/">rrt</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
