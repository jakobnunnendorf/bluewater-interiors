import ContactUsSection from "@/app/components/LayoutComponents/ContactUs/ContactUsSection";
import SeconderyHeroWithNav from "@/app/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <SeconderyHeroWithNav
        bgImgSrc="/images/about-us/about-hero.png"
        title="ABOUT US"
        desc="At BlueWater Interiors, we believe that yacht interior design represents the pinnacle of luxury—where dreams, born long ago, of freedom, excellence, and feeling at home across the seven seas finally converge. We see your online presence as a testament to elegance, beauty, and, most importantly, a canvas where your customer’s vision springs to life. It is a natural extension of your design philosophy"
      />
    </div>
  );
};

export default page;
