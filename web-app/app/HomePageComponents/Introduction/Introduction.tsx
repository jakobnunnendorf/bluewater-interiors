import React from "react";
import Portrait from "@/app/HomePageComponents/Introduction/Portrait";
import Bio from "@/app/HomePageComponents/Introduction/Bio";

function Introduction() {
  return (
    <div className="py-24 md:grid md:grid-cols-2 md:p-32">
      <Portrait />
      <Bio />
    </div>
  );
}

export default Introduction;
