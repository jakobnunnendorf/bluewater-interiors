import React from "react";
import BookCall from "@/app/LayoutComponents/Hero/BookCall";

function Cta() {
  return (
    <div className="flex flex-col items-center space-y-6 rounded-bl-lg rounded-tl-lg bg-white p-8">
      <h2 className="text-center text-3xl font-bold">What you&apos;ll get</h2>
      <ul className="flex h-fit w-full flex-col justify-center gap-6 space-y-4 px-8 pt-6">
        <li className="font-bold">-&gt; Free consultation</li>
        <li className="font-bold">
          -&gt; Free website (win-win portfolio project)
        </li>
        <li className="font-bold">-&gt; Video content of the process</li>
        <li className="font-bold">
          -&gt; Free yacht brand websites for your clients
        </li>
      </ul>
      <BookCall />
    </div>
  );
}

export default Cta;
