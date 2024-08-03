import Hero from "./HomePageComponents/Hero"
import Portfolio from "./HomePageComponents/Portfolio"
import CaseStudy from "./HomePageComponents/CaseStudy"
import CustomerReviews from "@/app/HomePageComponents/CustomerReviews/CustomerReviews";

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <Portfolio/>
      <CaseStudy/>
        <CustomerReviews/>
    </section>
  );
}
