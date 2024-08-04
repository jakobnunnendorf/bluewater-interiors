import React from "react";
import Grid from "@/app/HomePageComponents/Portfolio/Grid";
import BookCall from "@/app/LayoutComponents/Hero/BookCall";

function Portfolio() {
  return (
    <div className="relative h-fit w-full bg-slate-400 py-24 text-slate-800">
      <h2 className="bg-gradient-to-r from-sky-500 to-teal-700 bg-clip-text text-center font-fat text-6xl font-bold text-transparent drop-shadow-xl md:pt-16">
        Portfolio
      </h2>
      <h3 className="px-4 pt-4 text-center text-2xl font-bold drop-shadow-xl md:px-0 md:pt-8">
        State-of-the-art websites for our yacht interior designers
      </h3>
      <Grid />
      <div className="mx-auto w-fit">
        <BookCall color="blue-800" />
      </div>
    </div>
  );
}

export default Portfolio;
