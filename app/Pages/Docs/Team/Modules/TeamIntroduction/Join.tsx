"use client";

import React, { Children, useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import bllike from "@/public/images/blockchainlike.png";
import { GrFormNext } from "react-icons/gr";
import JoinModal from "@/app/components/Modal/JoinModal";

export default function Join() {
  const [isModal, setisModal] = useState(false);
  const clickModal = () => {
    document.body.style.overflow = isModal ? "auto" : "hidden";
    setisModal(!isModal);
  };

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
          <button className="mt-4 border p-1.5 px-3 rounded-full flex items-center border-stone-200 hover:border-stone-400 duration-200">
            <p className="bg-blue-600 p-1 rounded-full" />
            <p className="pl-2 text-xs">자세한 정보</p>
            <div className="pl-1.5 text-blue-400">
              <GrFormNext />
            </div>
          </button>
          <div className="mt-8">
            <Button onClick={clickModal}>블록체인팀 지원하기</Button>
            {isModal && <JoinModal isModal={clickModal} />}
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
