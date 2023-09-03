import React from "react";
import Join from "./Introduction/Join";
import Meet from "./Introduction/Meet";
import Member from "./Introduction/Member";

export default function Integration() {
  return (
    <div>
      <div className="pt-48">
        <Meet />
      </div>
      <div className="pt-48">
        <Member />
      </div>
      <div className="pt-48">
        <Join />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
