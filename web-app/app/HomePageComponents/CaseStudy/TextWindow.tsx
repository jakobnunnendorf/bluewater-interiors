import React from "react";

function TextWindow() {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-4 md:py-0">
      <h3 className="py-6 pt-10 text-xl font-bold">
        What we would like to achieve with you & your website:
      </h3>
      <div className="grid grid-cols-3 gap-0">
        <div className="flex items-start">
          <div className="flex flex-col items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <div className="h-24 w-1 bg-white"></div>
          </div>
          <h3 className="px-2">Start</h3>
        </div>
        <ul className="col-span-2 w-full">
          <li>
            • Fully understand & capture your{" "}
            <span className="text-gold"> Design Philosophy</span>
          </li>
          <li className="opacity-60">• Measure traffic</li>
        </ul>
        <div className="flex items-start">
          <div className="flex flex-col items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <div className="h-24 w-1 bg-white"></div>
          </div>
          <h3 className="px-2">1st Month</h3>
        </div>
        <ul className="col-span-2 w-full">
          <li>
            • Deploy your website as a&nbsp;
            <span className="text-gold">stunning</span> extension of your
            portfolio
          </li>
          <li className="opacity-60">• Boost SEO</li>
        </ul>
        <div className="flex items-start">
          <div className="flex flex-col items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white"></div>
            <div className="h-24 w-1 bg-white"></div>
          </div>
          <h3 className="px-2">2nd Month</h3>
        </div>
        <ul className="col-span-2 w-full">
          <li>
            • Offer your clients free yacht
            <span className="text-gold"> branding </span>websites
          </li>
          <li className="opacity-60">• Monitor SEO results</li>
        </ul>
        <div className="flex items-start">
          <div className="flex flex-col items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white p-2">
              <p className="text-center">🏆</p>
            </div>
          </div>
          <h3 className="px-2">Finale</h3>
        </div>
        <ul className="col-span-2 w-full">
          <li>
            • Launch <span className="text-gold">marketing campaign</span> with
            videos from the process
          </li>
          <li className="opacity-60">• Review experience</li>
        </ul>
      </div>
    </div>
  );
}

export default TextWindow;
