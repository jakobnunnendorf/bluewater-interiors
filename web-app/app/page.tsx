import Image from "next/image";
import Hero from "./Hero"

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <div className="bg-slate-400 h-fit relative w-full  text-slate-800">
        <h2 className="text-6xl text-center font-bold pt-32">Portfolio</h2>
        <h3 className="text-2xl text-center font-bold pt-8">
          {" "}
          State-of-the-art websites for our yacht interior designers
        </h3>
        <div className="w-full px-4 h-full flex py-12">
          <div className="w-1/2  h-fit">
            <figure className="relative w-full ">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={900}
                height={600}
                src="/pf1.png"
                alt="test"
              />
            </figure>
            <figure className="relative w-full ">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={900}
                height={600}
                src="/pf3.png"
                alt="test"
              />
            </figure>
          </div>
          <div className="w-1/2  h-fit">
            <figure className="relative w-full">
              <Image
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={900}
                height={600}
                src="/pf2.png"
                alt="test"
              />
            </figure>
          </div>
        </div>
      </div>
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
