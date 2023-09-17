"use strict";
import Link from "next/link";

type Position = {
  title: string;
  description: string;
  link?: string; // 이 부분이 선택적이므로 `link`가 없을 수도 있습니다.
};

const Recruitment: React.FC = () => {
  const positions: Position[] = [
    {
      title: "Backend Developer",
      description: "백엔드 개발자",
      link: "/Pages/Careers/Recruitment/s",
    },
    {
      title: "Frontend Developer",
      description: "프론트엔드 개발자",
      link: "/frontend",
    },
    {
      title: "Plugin Developer",
      description: "플러그인 개발자",
      link: "/plugin",
    },
    {
      title: "Service Communication",
      description: "서비스 커뮤니케이션",
      link: "/service-comm",
    },
  ];
  return (
    <div className="grid gap-8 grid-cols-4">
      {positions.map((position, positionlink) => (
        <Link
          key={positionlink}
          href="/Pages/Careers/Recruitment/[link]"
          as={position.link}
        >
          <div className="text-left border border-stone-200 rounded-xl p-4 w-56 hover:bg-stone-50 duration-200">
            <h1 className="text-lg font-normal text-black">{position.title}</h1>
            <p className="mt-2 text-sm text-stone-600">
              {position.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recruitment;
