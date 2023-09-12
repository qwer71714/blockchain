import React from "react";
import Image from "next/image";
import Discor from "@/public/images/Dis.png";
import Button from "../Button";

interface Modalprops {
  children?: React.ReactNode;
  isModal?: () => void;
}

const JoinModal: React.FC<Modalprops> = ({ children, isModal }) => {
  return (
    <div
      className="
      bg-black/75
      w-full
      h-full
      z-10
      top-0
      left-0
      fixed
      flex
      justify-center
      items-center
      "
      //모달창 바깥쪽에 닫는 클릭 이벤트 함수
      onClick={isModal}
    >
      <div
        className="
        container
        w-3/4
        m-auto
        "
        //내부에 있는 하얀색 박스를 모달 내부 클릭시 이벤트 전파를 막는 함수코드
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="
            container
          bg-white
            rounded-xl
      "
        >
          <div className="p-8 fl">
            <div className="flex items-center">
              <div className="dark:bg-white border-stone-300 border p-8 rounded-3xl">
                <Image src={Discor} alt={"Discor"} width={130} />
              </div>
              <div className="pl-8">
                <h1 className="text-3xl font-bold text-black">Team support</h1>
                <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
                  블록체인팀 팀장으로, 마인크래프트와 플러그인 전문성을 가진
                  우리 팀과
                  <br />
                  성장할 파트너를 찾습니다.
                </p>
                <div className="mt-4">
                  <Button>디스코드 지원</Button>
                  <span className="mt-4 text-sm">자세한 사항</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
