"use client";

import clsx from "clsx";

interface ThemeModeProps {
  type?: "button" | "submit" | "reset" | undefined; // 버튼의 타입을 지정하는 속성
  fullWidth?: boolean; // 버튼의 너비를 꽉 채우는지 여부를 지정하는 속성
  children?: React.ReactNode; // 버튼 내부에 표시되는 내용
  onClick?: () => void; // 버튼 클릭 시 실행되는 함수
  secondary?: boolean; // 보조 버튼 스타일을 적용하는지 여부를 지정하는 속성
  danger?: boolean; // 위험 버튼 스타일을 적용하는지 여부를 지정하는 속성
  disabled?: boolean; // 버튼 비활성화 여부를 지정하는 속성
  active?: boolean;
}
const ThemeSwitcher: React.FC<ThemeModeProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  active,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        text-xl
        text-black
        dark:text-white
        rounded-full
        p-1.5
        `,
        active && "dark:bg-stone-900 bg-stone-200"
      )}
    >
      {children}
    </button>
  );
};

export default ThemeSwitcher;
