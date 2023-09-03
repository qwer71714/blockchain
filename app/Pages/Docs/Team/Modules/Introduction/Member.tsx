import React from "react";
import Image from "next/image";
import BCcom from "@/public/images/BC-Connections.png";
import Button from "@/app/components/Button";

export default function Member() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">Core Member</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
        운영자인 핵심 팀 구성원은 프로젝트의 방향과 중요한 결정을 내릴 책임이 있습니다
        <br />
        그들이 코드에 집중하든, 커뮤니티에 집중하든, 그들은 모든 것을 실행하고 거의 모든 것에 대해 최종 발언권을 갖는 데 필수적입니다
        </p>
        <br />
        <br />
        <div>
            <h1 className="text-3xl font-bold">flowers_vampire</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">관리자</p>
            <br />
            <h1 className="text-3xl font-bold">keunheekwon</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">관리자</p>
            <br />
            <h1 className="text-3xl font-bold">Supernova</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">운영자</p>
            <br />
            <h1 className="text-3xl font-bold">hervtart</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">파트너</p>
        </div>
      </div>
    </div>
  );
}