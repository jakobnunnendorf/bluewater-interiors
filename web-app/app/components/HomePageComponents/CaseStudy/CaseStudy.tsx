import React from "react";
import TextWindow from "@/app/components/HomePageComponents/CaseStudy/TextWindow";
import CaseStudyVideo from "@/app/components/HomePageComponents/CaseStudy/CaseStudyVideo";
import HeadingTextLg from "../../UI/HeadingTextLg";

function CaseStudy() {
  return (
    <section className="bg-gray-light-2 mt-24 py-28 text-white">
      <header className="!text-left">
        <HeadingTextLg title="A fictional case study" />
        <h4 className="font-gilroy-light text-[30px] font-normal text-black">
          Nautical Elegance
        </h4>
      </header>
      <div className="md:grid md:grid-cols-2">
        <CaseStudyVideo />
        <TextWindow />
      </div>
    </section>
  );
}

export default CaseStudy;
