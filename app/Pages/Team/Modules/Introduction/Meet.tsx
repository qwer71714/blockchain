import React from "react";
import Image from "next/image";
import BCcom from "@/public/images/BC-Connections.png";
import Button from "@/app/components/Button";

export default function Meet() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">Meet our team</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
          Meet the members behind BlockChain Talk
        <br />
        a Minecraft server host and plugin
        </p>
        <div className="mt-8">
        <a href="https://github.com/qwer71714">
            <Button>
                <p className="pl-2 text-base">Github</p>
            </Button>
        </a>
        </div>
      </div>
    </div>
  );
}
