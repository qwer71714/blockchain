import React from "react";
import Cna from "./Modules/Introduction/cna";
import Integration from "./Modules/Integration";

export default function page() {
  return (
    <main className="dark:bg-black">
      <section className="container m-auto w-11/12">
        <div>
          {/* 내용이 길어질것 같아 모듈화방식으로함*/}
          <Integration />
        </div>
      </section>
    </main>
  );
}
