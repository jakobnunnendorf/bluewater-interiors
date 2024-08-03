import Hero from "@/app/LayoutComponents/Hero/Hero";
import Services from "./Services"
import ContactForm from "@/app/contact/ContactForm";

export default function ServicesPage() {
    return (
        <section className="h-fit">
            <Hero/>
            <Services/>
            <ContactForm/>
        </section>
    );
}
