import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <figure className="col-start-2 row-start-1 flex h-full w-fit flex-col items-center justify-center p-1">
      <Image
        src="/bluewater-interiors-logo.png"
        height={64}
        width={64}
        alt="Blue Interiors Logo"
      />
      <p className="p-2 text-center font-serif leading-4 text-[#FDEBBD]">
        BlueWater
        <br /> <span className="leading-3 text-[#FDEBBD]/80">Interiors</span>
      </p>
    </figure>
  );
}

export default Logo;
