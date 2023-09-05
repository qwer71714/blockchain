import DiscordProfile from "@/app/components/DiscordProfile";
import React from "react";
import supe from "@/public/images/TeamProfile/supernova.png";
import vampire from "@/public/images/TeamProfile/qwer71714.jpg";

export default function Member() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">BlockChain Team</h1>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-16">
        <div>
          <DiscordProfile
            src={vampire}
            alt="vampire"
            name="로즈베리온"
            discordid="flowers_vampire"
            introduction="안녕하세요 BlockChain 팀의 팀장 로즈베리온 입니다. 저는 프론드엔드 개발자 입니다."
            href="https://github.com/qwer71714"
            gitHublink="qwer71714"
            mail="qwer71714@naver.com"
          />
        </div>
        <div>
          <DiscordProfile
            src={supe}
            alt="supe"
            name="슈퍼노바"
            discordid="supeunova"
            introduction="안녕하세요 ! 슈퍼노바 입니다. 저는 프론트엔드 개발자이며 파이썬 개발자 입니다."
            href="https://github.com/nova524"
            gitHublink="nova524"
            mail="seungmin10524@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}
