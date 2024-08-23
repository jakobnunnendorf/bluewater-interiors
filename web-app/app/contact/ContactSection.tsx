import React from "react";
import ContactForm from "@/app/contact/ContactForm";
import Cta from "@/app/contact/CTA";

function ContactSection() {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="font-fat pb-4 pt-8 text-center text-6xl">
        Don&apos;t hesitate
      </h2>
      <h2 className="font-fat pb-16 text-center text-3xl opacity-70">
        Take your online presence to the next level 📈
      </h2>
      <div className="mx-auto grid w-2/3 grid-cols-2 shadow-md">
        <Cta />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;
