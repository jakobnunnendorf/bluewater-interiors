import Portfolio from "./components/HomePageComponents/Portfolio/Portfolio";
import CaseStudy from "./components/HomePageComponents/CaseStudy/CaseStudy";
import CustomerReviews from "@/app/components/HomePageComponents/CustomerReviews/CustomerReviews";
import ValueProposition from "@/app/components/HomePageComponents/ValueProposition/ValueProposition";
import Offer from "@/app/components/HomePageComponents/Offer/Offer";
import Introduction from "@/app/components/HomePageComponents/Introduction/Introduction";
import NotConvinced from "@/app/components/HomePageComponents/NotConvinced";
import CustomerStories from "@/app/components/HomePageComponents/CustomerStories/CustomerStories";

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
