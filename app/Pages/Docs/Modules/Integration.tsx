import React from "react";
import Cna from "./Introduction/cna";
import UltimateGameHub from "./Introduction/UltimateGameHub";
import GuaranteedFun from "./Introduction/guaranteedfun";

export default function Integration() {
  return (
    <div>
      <div className="pt-48">
        <Cna />
      </div>
      <div className="pt-48">
        <UltimateGameHub />
      </div>
      <div className="pt-48">
        <GuaranteedFun />
      </div>
    </div>
  );
}
