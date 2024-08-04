import React from "react";
import Card from "@/app/HomePageComponents/Portfolio/Card";

function Grid() {
  return (
    <div className="flex h-full w-full px-4 py-12">
      <div className="h-fit w-1/2">
        <Card
          src="/portfolio/pf1.png"
          alt="Website of the Lürssen Solandge luxury yacht"
        />
        <Card
          src="/portfolio/pf3.png"
          alt="Second version of the Nautical Elegance website"
        />
      </div>
      <div className="h-fit w-1/2">
        <Card src="/portfolio/pf2.png" alt="Nautical Elegance website" />
      </div>
    </div>
  );
}

export default Grid;
