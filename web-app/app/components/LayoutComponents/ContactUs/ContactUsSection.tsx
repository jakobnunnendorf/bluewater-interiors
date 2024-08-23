import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ContactUsSection = () => {
  return (
    <section className="container relative z-20 mt-20">
      <div className="flex items-center gap-14 rounded-[40px] bg-white p-6 shadow-[0_0_25px_rgba(0,0,0,0.15)] max-lg:flex-col md:mt-28 lg:mt-[211px]">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
};

export default ContactUsSection;
