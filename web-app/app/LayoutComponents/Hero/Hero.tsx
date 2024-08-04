import React from "react";
import BGVideo from "@/app/LayoutComponents/Hero/Background";
import HeadLine from "@/app/LayoutComponents/Hero/HeadLine";

function Hero() {
  return (
    <div className="w-full md:h-screen">
      <HeadLine />
      <BGVideo />
    </div>
  );
}

export default Hero;
