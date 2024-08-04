import React from "react";

function CaseStudyVideo() {
  return (
    <div className="px-4 text-center">
      <video autoPlay loop muted className="w-full rounded-xl">
        <source src="/case study.mp4" type="video/mp4" />
      </video>
      <h3 className="pt-4 text-3xl font-bold">A fictional case study</h3>
      <h4 className="text-center text-2xl font-bold opacity-70">
        Nautical Elegance
      </h4>
    </div>
  );
}

export default CaseStudyVideo;
