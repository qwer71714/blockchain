import Image from "next/image";
import React from "react";
import BCcom from "@/public/images/BC-Connections.png";

export default function page() {
  return (
    <main className="dark:bg-black">
      <section className="container m-auto w-11/12">
        <div className="pt-32">
          <div className="flex items-center">
            <div className="w-5/12">
              <h1 className="text-4xl font-bold">세상과 연결하여 집합</h1>
              <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
                우리는 흩어져 있어도, 멀리 있어도 세상끝에 있어도 하나로
                연결합니다.
                <br />
                거리나 시간, 장소에 구애받지 않고, 우리의 마음과 생각이 하나가
                되는 순간
                <br />
                그것이 진정한 연결입니다.
              </p>
              <div className="mt-8">
                <a href="/">
                  <button
                    className="
                      font-semibold
                      rounded-md
                      bg-black
                      dark:bg-white
                      hover:dark:bg-stone-200
                      hover:bg-stone-800
                      text-white
                      dark:text-black
                      py-2
                      px-4
                    "
                  >
                    BlockChain 팀원 보기
                  </button>
                </a>
              </div>
            </div>
            <div className="ml-auto">
              <Image
                src={BCcom}
                alt="BCcom"
                width={820}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
