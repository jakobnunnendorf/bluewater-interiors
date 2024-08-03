import Hero from "./HomePageComponents/Hero"
import Portfolio from "./HomePageComponents/Portfolio"
import CaseStudy from "./HomePageComponents/CaseStudy"

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <Portfolio/>
      <CaseStudy/>
    </section>
  );
}
