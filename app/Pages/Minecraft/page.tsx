import React from "react";
import Button from "@/app/components/Button";

export default function Join() {
  return (
    <section className="container m-auto w-11/12">
    <div className="pt-24">
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">&B:2</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
        &B:2 플레이 해보기
        <br />
        이 서버는 blockchain과 qilte.com이 협력해서 개발하는
        <br />마인크래프트 서버입니다.
        </p>
        <div className="mt-8">
          <Button>Play</Button>
        </div>
      </div>
    </div>
    <hr className="dark:border-stone-700 mt-12" />
    </div>
    <div className="pt-24">
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">&A:5</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
        &A:5 플레이 해보기
        <br />
        이 서버는 blockchain 개발자 supenova가 개인적으로 여는
        <br />64블록 smp 마인크래프트 서버입니다.
        </p>
        <div className="mt-8">
          <Button>Play</Button>
        </div>
      </div>
    </div>
    <hr className="dark:border-stone-700 mt-12" />
    </div>
    </section>

  );
}
