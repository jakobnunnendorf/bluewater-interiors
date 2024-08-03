import React from 'react';
import Image from "next/image";

function Logo() {
    return (
        <figure className="col-start-2 row-start-1 w-fit h-full p-1 flex flex-col items-center justify-center">
            <Image src="/bluewater-interiors-logo.png" height={64} width={64} alt="Blue Interiors Logo"/>
            <p className="text-[#FDEBBD] text-center font-serif leading-4 p-2">BlueWater<br/> <span
                className="text-[#FDEBBD]/80 leading-3">Interiors</span></p>
        </figure>
    );
}

export default Logo;