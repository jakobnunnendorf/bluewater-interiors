import About from "@/app/about/About";
import Hero from "@/app/LayoutComponents/Hero/Hero";
import ContactForm from "@/app/contact/ContactForm";

export default function AboutPage() {
    return (
        <section className="h-fit">
            <Hero/>
            <About/>
            <ContactForm/>
        </section>
    );
}
