import React from "react";
import CTA from "@/app/contact/CTA";
import ContactForm from "@/app/contact/ContactForm";

function ContactSection() {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="pb-4 pt-8 text-center font-fat text-6xl">
        Don&apos;t hesitate
      </h2>
      <h2 className="pb-16 text-center font-fat text-3xl opacity-70">
        Take your online presence to the next level 📈
      </h2>
      <div className="mx-auto grid w-2/3 grid-cols-2 shadow-md">
        <CTA />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;
