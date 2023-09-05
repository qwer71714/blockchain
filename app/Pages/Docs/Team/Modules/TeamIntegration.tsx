import React from "react";
import Join from "./TeamIntroduction/Join";
import Meet from "./TeamIntroduction/Meet";
import Member from "./TeamIntroduction/Member";

export default function TeamIntegration() {
  return (
    <div>
      <div className="pt-32">
        <Meet />
        <hr className="dark:border-stone-700 mt-12" />
      </div>
      <div className="pt-14">
        <Member />
      </div>
      {/* <div className="pt-48">
        <Join />
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
