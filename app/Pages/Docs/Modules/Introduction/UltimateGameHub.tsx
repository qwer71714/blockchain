import Image from "next/image";
import React from "react";
import Mineimage from "@/public/images/Mine.png";
import Button from "@/app/components/Button";

export default function UltimateGameHub() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">가치있는 브랜드</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
          가치있는 브랜드를 만들기 위해 블록체인은 지속적으로 노력하고 있습니다.
          <br />
          독창적인 플러그인과 모드를 통해, 각 사용자의 개성과 창의성을
          <br />
          존중하며 다양한 경험을 제공합니다.
          <br />
          마인크래프트를 넘어 다양한 컨텐츠를 창출하며, 브랜드 가치를 지속적으로
          높여나갑니다
        </p>
        <div className="mt-8">
          <Button>제작중인 상태 목록보기</Button>
        </div>
      </div>
      <div className="ml-auto">
        <Image
          src={Mineimage}
          alt="BCcom"
          width={820}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
