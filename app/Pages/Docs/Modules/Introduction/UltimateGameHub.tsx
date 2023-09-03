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
          블록체인은 사용자의 개성과 창의성을 높이기 위해 계속 노력합니다.
          <br />
          독특한 플러그인과 모드로 다양한 경험을 제공하며, 이를 통해 브랜드
          <br />
          가치를 지속적으로 향상시킵니다. 마인크래프트를 넘어 다양한 컨텐츠를
          <br />
          창출하며 브랜드를 강화합니다.
        </p>
        <div className="mt-8">
          <Button>제작중인 상태 목록보기</Button>
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
