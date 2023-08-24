import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined; // 버튼의 타입을 지정하는 속성
  fullWidth?: boolean; // 버튼의 너비를 꽉 채우는지 여부를 지정하는 속성
  children?: React.ReactNode; // 버튼 내부에 표시되는 내용
  onClick?: () => void; // 버튼 클릭 시 실행되는 함수
  secondary?: boolean; // 보조 버튼 스타일을 적용하는지 여부를 지정하는 속성
  danger?: boolean; // 위험 버튼 스타일을 적용하는지 여부를 지정하는 속성
  disabled?: boolean; // 버튼 비활성화 여부를 지정하는 속성
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex
        items-center
        rounded-xl
        px-4
        py-3
        text-sm
        font-semibold
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
        disabled && "opacity-50 cursor-default", // 비활성화된 버튼일 경우 투명도와 커서 스타일을 변경
        fullWidth && "w-full", // fullWidth 속성이 true일 경우 버튼의 너비를 100%로 설정
        secondary ? "text-gray-900" : "text-white", // secondary 속성이 true일 경우 글자 색상을 회색으로, 그렇지 않을 경우 흰색으로 설정
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600", // danger 속성이 true일 경우 배경색과 호버 시 배경색, 포커스 시 아웃라인 색상을 분홍색으로 설정
        !secondary &&
          !danger &&
          "bg-black hover:bg-stone-900 active:bg-stone-950 focus-visible:outline-stone-900" // secondary와 danger 속성이 모두 false일 경우 배경색과 호버 시 배경색, 포커스 시 아웃라인 색상을 하늘색으로 설정
      )}
    >
      {children}
    </button>
  );
};

export default Button;
