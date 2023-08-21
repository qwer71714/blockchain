"use client";

import "./globals.css";
import Button from "@/app/components/Button";
import { LiaDiscord } from "react-icons/lia";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="container m-auto w-11/12">
      <div className="mt-72 text-center">
        <h1 className="text-7xl font-black">BlockChain Talk</h1>
        <div className="mt-7">
          <p className="text-lg">블록체인에서 오신 것을 환영합니다.</p>
          {/* 버튼 냅두고 수정금지 */}
          <div className="mt-12 flex justify-between w-56 mx-auto">
            <Button>
              <p>Started</p>
            </Button>
            <Button>
              <LiaDiscord size={24} />
              <p className="pl-2">Discord</p>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
