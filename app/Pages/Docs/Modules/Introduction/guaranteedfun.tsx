import Image from "next/image";
import React from "react";
import Mineimage from "@/public/images/Mine.png";
import Button from "@/app/components/Button";

export default function GuaranteedFun() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">재미 보장</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
          &quot;재미 보장&quot;은 흥미로운 엔터테인먼트로 일상을 밝힙니다.
          다양한 경험을
          <br />
          제공하여 절대 실망시키지 않을 거예요. 지금 바로 참여하고 즐거움을
          <br />
          느껴보세요!
        </p>
        <div className="mt-8">
        <a href="https://discord.gg/bRfhERh9UM">
                <Button>
                  <p className="pl-2 text-base">게임 하러가기</p>
                </Button>
              </a>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src={Mineimage}
          alt="BCcom"
          width={620}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
