import React from "react";
import Pain from "./Pain";
import Gain from "./Gain";

function ValueProposition() {
  return (
    <div className="w-full md:p-32">
      <h2 className="bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600 bg-clip-text pb-20 text-center font-fat text-6xl text-transparent drop-shadow-2xl">
        Tell us more
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-16">
        <Pain />
        <Gain />
      </div>
    </div>
  );
}

export default ValueProposition;
