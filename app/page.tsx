"use client";

import "./globals.css";
import Button from "@/app/components/Button";
import { LiaDiscord } from "react-icons/lia";
import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <div className="mt-72 text-center">
        {/*세로 간격 수정*/}
        <h1 className="text-white text-7xl font-black">BlockChain Talk</h1>
        <p className="mt-4 text-2xl text-white font-bold">
          Empowering Unity, Fostering Growth
        </p>
        {/*슬로건추가 변경가능*/}
        <div className="mt-7">
          {/* 버튼 냅두고 수정금지 */}
          <div className="mt-12 flex justify-between w-72 mx-auto">
            <Button>
              <a href="/Pages/Docs" className="text-base">
                Get Started
              </a>
            </Button>
            <Button>
              <LiaDiscord size={24} />
              <a className="pl-2 text-base">Discord</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
