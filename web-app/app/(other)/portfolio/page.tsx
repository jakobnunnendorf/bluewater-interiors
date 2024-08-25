import HesitateCard from "@/app/components/HomePageComponents/HesitateCard/HesitateCard";
import SeconderyHeroWithNav from "@/app/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <SeconderyHeroWithNav
        isShowTextBg={true}
        bgImgSrc="/images/about-us/about-hero.png"
        title="Portfolio"
        desc="Our portfolio is a testament to our dedication to creating luxurious, bespoke interiors that are as functional as they are beautiful. Each project is a unique collaboration between our clients' visions and our design expertise, resulting in spaces that are truly one-of-a-kind."
      />
      <HesitateCard />
    </main>
  );
};

export default page;
