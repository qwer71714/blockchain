import React from "react";

interface Modalprops {
  children?: React.ReactNode;
  isModal?: () => void;
}

const JoinModal: React.FC<Modalprops> = ({ children, isModal }) => {
  return (
    <div
      className="
      bg-black/30
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
        w-3/6
        m-auto
        "
        //내부에 있는 하얀색 박스를 모달 내부 클릭시 이벤트 전파를 막는 함수코드
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="
            container
            m-auto
          bg-white
            rounded-xl
      "
        >
          <div className="p-4">
            <p className="text-black">아 뭘보나고~</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
