import React from "react";
import TextWindow from "@/app/HomePageComponents/CaseStudy/TextWindow";
import CaseStudyVideo from "@/app/HomePageComponents/CaseStudy/CaseStudyVideo";

function CaseStudy() {
  return (
    <div className="bg-slate-800 py-28 text-white">
      <h2 className="pb-2 text-center text-4xl font-extrabold text-white">
        Great results
      </h2>
      <h3 className="pb-14 text-center text-3xl font-extrabold text-white/60">
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
