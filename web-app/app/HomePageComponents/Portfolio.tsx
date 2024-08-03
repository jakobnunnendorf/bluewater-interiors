import React from 'react';
import Image from "next/image";


function Portfolio() {
    return (
        <div className="bg-slate-400 h-fit relative w-full  text-slate-800">
            <h2 className="text-6xl text-center font-bold pt-32">Portfolio</h2>
            <h3 className="text-2xl text-center font-bold pt-8">
                {" "}
                State-of-the-art websites for our yacht interior designers
            </h3>
            <div className="w-full px-4 h-full flex py-12">
                <div className="w-1/2  h-fit">
                    <figure className="relative w-full ">
                        <Image
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            width={900}
                            height={600}
                            src="/pf1.png"
                            alt="test"
                        />
                    </figure>
                    <figure className="relative w-full ">
                        <Image
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            width={900}
                            height={600}
                            src="/pf3.png"
                            alt="test"
                        />
                    </figure>
                </div>
                <div className="w-1/2  h-fit">
                    <figure className="relative w-full">
                        <Image
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                            width={900}
                            height={600}
                            src="/pf2.png"
                            alt="test"
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;