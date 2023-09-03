import React from "react";
import Image from "next/image";
import BCcom from "@/public/images/BC-Connections.png";
import Button from "@/app/components/Button";

export default function Join() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">Join our team</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
        블록체인에 가입하기
        <br />
        우리는 마인크래프트서버와 플러그인을 개발합니다
        </p>
        <div className="mt-8">
        <a href="https://discord.gg/xdku5sEA">
                <Button>
                  <p className="pl-2 text-base">Join</p>
                </Button>
              </a>
        </div>
      </div>
    </div>
  );
}
