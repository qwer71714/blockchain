import Image from "next/image";
import React from "react";
import BlockChain from "@/public/images/BlockChain-logo-no.svg";

const Menu = () => {
  type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <a href={href} className="font-semibold hover:text-blue-600 duration-200">
      {children}
    </a>
  );
  return (
    <div className="border-b border-zinc-200">
      <div className="container mx-auto py-4">
        <div className="flex items-center">
          <a href="/">
            <Image
              src={BlockChain}
              alt="Picture of the author"
              width={46}
              height={46}
            />
          </a>
          <div>
            <ul className="flex justify-end ms-auto">
              <NavLink href="/">Docs</NavLink>
              <NavLink href="/">Software</NavLink>
              <NavLink href="/">rrt</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
