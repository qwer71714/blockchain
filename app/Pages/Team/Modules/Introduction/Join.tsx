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
        Join the BlockChain Talk
        <br />
        We host Minecraft server and make plugins
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
