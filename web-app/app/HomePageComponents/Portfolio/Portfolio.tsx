import React from 'react';
import Image from "next/image";
import Grid from "@/app/HomePageComponents/Portfolio/Grid";


function Portfolio() {
    return (
        <div className="bg-slate-400 h-fit relative w-full  text-slate-800">
            <h2 className="text-6xl text-center font-bold pt-32">Portfolio</h2>
            <h3 className="text-2xl text-center font-bold pt-8">
                State-of-the-art websites for our yacht interior designers
            </h3>
            <Grid/>
        </div>
    );
}

export default Portfolio;