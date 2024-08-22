import React from "react";
import TextWindow from "@/app/components/HomePageComponents/CaseStudy/TextWindow";
import CaseStudyVideo from "@/app/components/HomePageComponents/CaseStudy/CaseStudyVideo";

function CaseStudy() {
  return (
    <div className="bg-slate-800 py-28 text-white">
      <h2 className="font-fat bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))] bg-clip-text pb-2 text-center text-6xl font-extrabold text-transparent">
        Great results
      </h2>
      <h3 className="font-fat pb-14 text-center text-3xl font-extrabold text-white/60">
        or 100% money back
      </h3>
      <div className="md:grid md:grid-cols-2">
        <CaseStudyVideo />
        <TextWindow />
      </div>
    </div>
  );
}

export default CaseStudy;
