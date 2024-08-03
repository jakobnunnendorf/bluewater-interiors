import React from 'react';
import TextWindow from "@/app/HomePageComponents/CaseStudy/TextWindow";
import CaseStudyVideo from "@/app/HomePageComponents/CaseStudy/CaseStudyVideo";

function CaseStudy() {
    return (
        <div className="bg-slate-800 text-white">
            <h2 className="text-white  font-extrabold text-4xl text-center p-28 pb-2">
                Guaranteed results
            </h2>
            <h3 className="text-white/60  font-extrabold text-3xl text-center pb-14">
                or 100% money back
            </h3>
            <div className="grid grid-cols-2">
                <CaseStudyVideo/>
                <TextWindow/>
            </div>
        </div>
    );
}

export default CaseStudy;