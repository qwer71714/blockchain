import React from "react";
import Image from "next/image";
import Logo from "@/public/images/BlockChain-logo-no.svg";
import Button from "@/app/components/Button";

export default function Meet() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">Meet our team</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
        블록체인의 멤버를 만나봅시다
        <br />
        우리는 마인크래프트서버와 플러그인을 개발합니다
        </p>
        <div className="mt-8">
          <Button>github</Button>
        </div>
      </div>
      <div className="ml-auto">
        <Image src={Logo} alt="Logo" width={300} className="rounded-2xl" />
      </div>
    </div>
  );
}
