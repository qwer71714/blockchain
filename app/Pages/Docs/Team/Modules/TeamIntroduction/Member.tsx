import DiscordProfile from "@/app/components/DiscordProfile";
import React from "react";
import Tesx from "@/public/images/TeamProfile/supernova.png";

export default function Member() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">BlockChain Team</h1>
      </div>
      <br />
      <br />
      <DiscordProfile
        src={Tesx}
        alt="Tesx"
        name="슈퍼노바"
        discordid="supeunova"
        introduction="안녕하세요 ! 슈퍼노바 입니다. 저는 프론트엔드 개발자이며 파이썬 개발자 입니다."
        href="https://github.com/nova524"
        gitHublink="nova524"
        mail="seungmin10524@gmail.com"
      />
    </div>
  );
}
