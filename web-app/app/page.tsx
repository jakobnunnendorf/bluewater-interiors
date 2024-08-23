import Portfolio from "./components/HomePageComponents/Portfolio/Portfolio";
import CaseStudy from "./components/HomePageComponents/CaseStudy/CaseStudy";
import ValueProposition from "@/app/components/HomePageComponents/ValueProposition/ValueProposition";
import ClientResult from "@/app/components/HomePageComponents/ClientResult/ClientResult";
import Introduction from "@/app/components/HomePageComponents/Introduction/Introduction";
import NotConvinced from "@/app/components/HomePageComponents/NotConvinced";
import CustomerStories from "@/app/components/HomePageComponents/CustomerStories/CustomerStories";
import ProcessSection from "@/app/components/HomePageComponents/Process/ProcessSection";
import CarouselTwo from "./components/HomePageComponents/CustomerReviews/Carousel2";
import GetCovered from "./components/HomePageComponents/GetCovered/GetCovered";

export default function Home() {
  return (
    <section className="h-fit">
      <Portfolio />
      <ProcessSection />
      <CaseStudy />
      <CarouselTwo />
      <ValueProposition />
      <GetCovered />
      <ClientResult />
      <Introduction />
      <NotConvinced />
      <CustomerStories />
    </section>
  );
}
