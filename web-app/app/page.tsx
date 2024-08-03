import Hero from "./Hero"
import Portfolio from "./Portfolio"
import CaseStudy from "./CaseStudy"

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <Portfolio/>
      <CaseStudy/>
    </section>
  );
}
