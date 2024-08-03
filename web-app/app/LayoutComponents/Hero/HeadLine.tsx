import React from 'react';
import Image from "next/image";

function HeadLine() {
    return (
        <div className="h-[93vh] flex flex-col justify-center">
            <h1 className="z-10 text-7xl font-extrabold px-16 text-white/75">
                Boutique Websites
                <br/> for{" "}
                <span className="z-10 text-[#FDEBBD]/75  text-6xl text-center">
              world-class
            </span>
                <br/> Yacht Interior Designers
            </h1>
            <h2 className="text-4xl p-8 font-extrabold px-20">
                Do your Portfolio justice
            </h2>
            <ul className="z-10 flex gap-12 justify-end px-16 w-1/2 mr-0 ml-auto absolute bottom-20 right-0">
                <li className="-2 w-fit aspect-square p-2 -[#1974EF] rounded-xl flex items-center justify-center">
                    <Image
                        src="/social-icons/Facebook.png"
                        height={30}
                        width={30}
                        alt="Facebook button"
                    />
                </li>
                <li className="-2 w-fit aspect-square p-2 -black rounded-xl flex items-center justify-center">
                    <Image
                        src="/social-icons/Instagram.png"
                        height={30}
                        width={30}
                        alt="Facebook button"
                    />
                </li>
                <li className="-2 w-fit aspect-square p-2 -[#0A66C2] rounded-xl flex items-center justify-center">
                    <Image
                        src="/social-icons/LinkedIn.png"
                        height={30}
                        width={30}
                        alt="Facebook button"
                    />
                </li>
                <li className="-2 w-fit aspect-square p-2 -[#4AC859] rounded-xl flex items-center justify-center">
                    <Image
                        src="/social-icons/WhatsApp.png"
                        height={30}
                        width={30}
                        alt="Facebook button"
                    />
                </li>
                <li className="-2 w-fit aspect-square p-2 -white rounded-xl flex items-center justify-center">
                    <Image
                        src="/social-icons/X (formerly Twitter).png"
                        height={30}
                        width={30}
                        alt="Facebook button"
                    />
                </li>
                <li className="-2 w-fit aspect-square p-2 -[#FE0000] rounded-xl flex items-center justify-center">
                    <Image
                        src="/social-icons/YouTube.png"
                        height={30}
                        width={30}
                        alt="Facebook button"
                    />
                </li>
            </ul>
        </div>
    );
}

export default HeadLine;