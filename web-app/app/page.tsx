import Image from "next/image";
import Hero from "./Hero"
import Portfolio from "./Portfolio"

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <Portfolio/>
      <div className="bg-slate-800 text-white">
        <h2 className="text-white  font-extrabold text-4xl text-center p-28 pb-2">
          Guaranteed results
        </h2>
        <h3 className="text-white/60  font-extrabold text-3xl text-center pb-14">
          or 100% money back
        </h3>
        <div className="grid grid-cols-2">
          <video autoPlay loop muted className="w-full">
            <source src="/case study.mp4" type="video/mp4"/>
          </video>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl">Results after 3 months</h3>
            <h4>+380% Clicks</h4>
            <h4>+37% More leads</h4>
            <h4>+5% Conversion</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
