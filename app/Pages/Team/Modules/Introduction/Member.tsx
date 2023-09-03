import React from "react";
import Image from "next/image";
import BCcom from "@/public/images/BC-Connections.png";
import Button from "@/app/components/Button";

export default function Member() {
  return (
    <div className="flex items-center">
      <div className="w-5/12">
        <h1 className="text-4xl font-bold">Core Member</h1>
        <p className="mt-4 text-base text-stone-700 dark:text-stone-300">
        Core Team members are responsible for the direction of the project, and for making the big decisions.
        <br />
        Whether they focus on the code or the community, they're essential to making everything run and have final say in just about anything.
        </p>
        <br />
        <br />
        <div>
            <h1 className="text-3xl font-bold">flowers_vampire</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">Admin</p>
            <br />
            <h1 className="text-3xl font-bold">keunheekwon</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">Admin</p>
            <br />
            <h1 className="text-3xl font-bold">Supernova</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">Developer</p>
            <br />
            <h1 className="text-3xl font-bold">hervtart</h1>
            <p className="mt-4 text-base text-stone-700 dark:text-stone-300">Partner</p>
        </div>
      </div>
    </div>
  );
}