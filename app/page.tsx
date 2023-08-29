"use client";

import "./globals.css";
import Button from "@/app/components/Button";
import { LiaDiscord } from "react-icons/lia";

export default function Home() {
  return (
    <main className="ips">
      <section className="container m-auto w-11/12">
        <div className="pt-72 text-center">
          <h1 className="text-white text-7xl font-black">BlockChain Talk</h1>
          <p className="mt-4 text-3xl text-white font-bold">
            Empowering Unity, Fostering Growth
          </p>
          {/*슬로건추가 변경가능*/}
          <div className="mt-7">
            <div className="mt-12 flex justify-between w-72 mx-auto">
              <a href="/Pages/Docs" className="text-base">
                <Button>Get Started</Button>
              </a>
              <a href="https://discord.gg/xdku5sEA" className="pl-2 text-base">
                <Button>
                  <LiaDiscord size={24} />
                  Discord
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
