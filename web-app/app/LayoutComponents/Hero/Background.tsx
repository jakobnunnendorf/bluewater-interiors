import React from "react";

function Background() {
  return (
    <div className="absolute top-0 -z-50 h-full w-full bg-white md:h-screen md:bg-transparent">
      <video autoPlay loop muted className="hidden h-fit w-full md:block">
        <source src="/yacht-video.mov" type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
