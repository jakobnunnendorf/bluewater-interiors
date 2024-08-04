import React from "react";
import Socials from "./HeroText/Socials";
import HeroHeading from "./HeroText/HeroHeading";
import HeroSubHeading from "./HeroText/HeroSubHeading";
import ReviewBadge from "@/app/LayoutComponents/Hero/ReviewBadge";
import Arguments from "@/app/LayoutComponents/Hero/Arguments";
import BookCall from "@/app/LayoutComponents/Hero/BookCall";

function HeadLine() {
  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-center md:grid md:grid-rows-5 md:justify-normal">
      <div className="h-full w-full"></div>
      <div className="h-full w-full md:row-span-3 md:grid md:grid-rows-5">
        <div></div>
        <HeroHeading />
        <Arguments />
        <HeroSubHeading />
        <div className="items-center py-16 md:mt-8 md:flex md:w-1/2 md:justify-around">
          <ReviewBadge />
          <BookCall />
        </div>
      </div>
      <div className="h-full w-full"></div>
      <Socials />
    </div>
  );
}

export default HeadLine;
