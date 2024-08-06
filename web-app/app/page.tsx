import Portfolio from "./HomePageComponents/Portfolio/Portfolio";
import CaseStudy from "./HomePageComponents/CaseStudy/CaseStudy";
import CustomerReviews from "@/app/HomePageComponents/CustomerReviews/CustomerReviews";
import ValueProposition from "@/app/HomePageComponents/ValueProposition/ValueProposition";
import Offer from "@/app/HomePageComponents/Offer/Offer";
import Introduction from "@/app/HomePageComponents/Introduction/Introduction";
import NotConvinced from "@/app/HomePageComponents/NotConvinced";
import CustomerStories from "@/app/HomePageComponents/CustomerStories/CustomerStories";

export default function Home() {
  return (
    <section className="h-fit">
      <Portfolio />
      <CaseStudy />
      <CustomerReviews />
      <ValueProposition />
      <Offer />
      <Introduction />
      <NotConvinced />
      <CustomerStories />
    </section>
  );
}
