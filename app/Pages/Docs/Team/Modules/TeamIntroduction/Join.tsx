import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import bllike from "@/public/images/blockchainlike.png";
import { BiSolidCircle } from "react-icons/bi";

export default function Join() {
  return (
    <div>
      <div className="flex w-full items-center">
        <div>
          <h1 className="text-4xl font-bold">Join the BlockChain Team</h1>
          <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
            블록체인팀에 가입하여 글로벌 비즈니스의 중심에서 활약하세요.
            <br />
            전문성과 혁신을 추구하는 우리 팀과 함께 성장해보세요.
          </p>
          <button className="mt-4 border-stone-400 border p-2 px-5 rounded-full flex items-center">
            <p className="bg-blue-600 p-2 rounded-full" />
            <p className="pl-2 text-sm">자세한 정보</p>
          </button>
          <div className="mt-8">
            <Button>블록체인팀 지원하기</Button>
          </div>
        </div>
        <div className="ml-auto">
          <Image
            src={bllike}
            alt="bllike"
            width={360}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
