import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

interface DiscordProfileProps {
  name?: string;
  discordid?: string;
  introduction?: string;
  href?: string;
  gitHublink?: string;
  mail?: string;
  alt?: string;
  width?: number;
  src: StaticImageData | string;
}

const DiscordProfile: React.FC<DiscordProfileProps> = ({
  name,
  discordid,
  introduction,
  href,
  gitHublink,
  mail,
  alt,
  width = 160,
  src,
}) => {
  return (
    <div className="flex items-center w-full">
      <div className="p-7 dark:border-stone-700 dark:border-2 border-stone-300 border rounded-md">
        {/* 프로필 사진 */}
        <div className="flex items-center">
          <div className="mb-auto flex-shrink-0">
            <Image
              src={src}
              alt={alt || "Discord Profile"}
              width={width}
              height={width}
              className="rounded-full dark:border-stone-700 dark:border-2 border-stone-300 border p-2"
            />
          </div>
          <div className="pl-5">
            {/* 닉네임 별명 */}
            <h1 className="text-xl font-bold">{name}</h1>
            {/* 디스코드 아이디 */}
            <p className="font-normal text-sm">{discordid}</p>
            <hr className="mt-4 dark:border-stone-700" />
            {/* 간단 소개글 */}
            <div className="mt-4 text-sm">
              {introduction}
              <div className="mt-4 flex items-center text-xs">
                {/* 깃허브링크 */}
                <div className="flex items-center pr-2">
                  <AiFillGithub size={24} />
                  <p className="px-1">
                    {href ? <Link href={href}>{gitHublink}</Link> : "No Link"}
                  </p>
                </div>
                {/* 이메일 */}
                <div className="flex items-center">
                  <AiOutlineMail size={18} />
                  <p className="px-1">
                    {mail ? <a href={`mailto:${mail}`}>{mail}</a> : "No Mail"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordProfile;
