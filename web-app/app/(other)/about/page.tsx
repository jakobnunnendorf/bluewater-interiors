import ContactUsSection from "@/app/components/LayoutComponents/ContactUs/ContactUsSection";
import SeconderyHeroWithNav from "@/app/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <SeconderyHeroWithNav />
      <ContactUsSection />
    </div>
  );
};

export default page;
