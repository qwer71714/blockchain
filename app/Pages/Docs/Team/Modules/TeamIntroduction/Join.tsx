import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import bllike from "@/public/images/blockchainlike.png";

export default function Join() {
  return (
    <div>
      <div className="flex w-full items-center">
        <div>
          <h1 className="text-4xl font-bold">Join the BlockChain Team</h1>
          <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
            블록체인 팀에 가입하여 글로벌 비즈니스의 중심에서 활약하세요.
            <br />
            전문성과 혁신을 추구하는 우리 팀과 함께 성장해보세요.
          </p>
          <div className="mt-8">
            <Button>Join</Button>
          </div>
        </div>
        <div className="ml-auto">
          <Image src={bllike} alt="bllike" width={420} className="rounded-3xl"/>
        </div>
      </div>
    </div>
  );
}
