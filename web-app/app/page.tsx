import Hero from "./HomePageComponents/Hero"
import Portfolio from "./HomePageComponents/Portfolio"
import CaseStudy from "./HomePageComponents/CaseStudy"
import CustomerReviews from "@/app/HomePageComponents/CustomerReviews/CustomerReviews";
import ValueProposition from "@/app/HomePageComponents/ValueProposition";

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <Portfolio/>
      <CaseStudy/>
        <CustomerReviews/>
        <ValueProposition/>
    </section>
  );
}
