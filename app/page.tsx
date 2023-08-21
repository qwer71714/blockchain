"use client";

import "./globals.css";
import clsx from "clsx";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {});
  return (
    <main className="container m-auto w-11/12">
      <div className="mt-48 text-center">
        <h1 className="text-6xl font-black">BlockChain Talk</h1>
        <div className="mt-7">
          <p className="text-lg">블록체인에서 오신 것을 환영합니다.</p>
          {/* 버튼 색상 그래도 냅두고 수정금지 */}
          <div className="mt-12 flex justify-between w-56 mx-auto">
            <button
              className="
               rounded-md
               px-4
               py-3
               text-sm
               font-semibold
               text-white
               bg-black
               hover:bg-stone-700
               "
            >
              시작하기
            </button>
            <button
              className="
               rounded-md
               px-4
               py-3
               text-sm
               font-semibold
               text-white
               bg-black
               hover:bg-stone-700
               "
            >
              디스코드
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
