import React from "react";
import Image from "next/image";
import BCcom from "@/public/images/BC-Connections.png";
import Button from "@/app/components/Button";

export default function Cna() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">세상과 연결하여 집합</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
          우리는 흩어져 있어도, 멀리 있어도 세상끝에 있어도 하나로 연결합니다.
          <br />
          거리나 시간, 장소에 구애받지 않고, 우리의 마음과 생각이 하나가 되는
          순간
          <br />
          그것이 진정한 연결입니다.
        </p>
        <div className="mt-8">
        <a href="./Team">
                <Button>
                  <p className="pl-2 text-base">Blockchain 멤버보기</p>
                </Button>
              </a>
        </div>
      </div>
      <div className="ml-auto">
        <Image src={BCcom} alt="BCcom" width={620} className="rounded-2xl" />
      </div>
    </div>
  );
}
