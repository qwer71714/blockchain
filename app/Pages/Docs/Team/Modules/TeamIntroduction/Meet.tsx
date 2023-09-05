import React from "react";
import Image from "next/image";
import Logo from "@/public/images/BlockChain-logo-no.svg";
import Button from "@/app/components/Button";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Meet() {
  return (
    <div className="flex items-center">
      <div className="dark:bg-white border-stone-300 border p-4 rounded-3xl">
        <Image src={Logo} alt="Logo" width={180} />
      </div>
      <div className="ml-12">
        <h1 className="text-4xl font-bold">Meet our Team</h1>
        <div className="mt-2">
          <p>블록체인소속 멤버들을 만나봅시다</p>
          <div className="text-xs flex items-center mt-4">
            <div className="flex items-center pr-3">
              <MdOutlineLocationOn size={18} />
              <p className="pl-1">Seoul, South Korea</p>
            </div>
            <div className="flex items-center pr-2">
              <AiOutlineMail size={18} />
              <p className="pl-1">qwer71714@naver.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Button>
            <AiFillGithub size={24} />
            <p className="pl-2">Github 사이트</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
