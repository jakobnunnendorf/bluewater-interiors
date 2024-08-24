import StatementContainer from "@/app/components/AboutPage/StatementContainer";
import SeconderyHeroWithNav from "@/app/components/Shared/SeconderyHeroWithNav";

type Props = {};

const page = (props: Props) => {
  return (
    <main>
      <SeconderyHeroWithNav
        bgImgSrc="/images/about-us/about-hero.png"
        title="ABOUT US"
        desc="At BlueWater Interiors, we believe that yacht interior design represents the pinnacle of luxury—where dreams, born long ago, of freedom, excellence, and feeling at home across the seven seas finally converge. We see your online presence as a testament to elegance, beauty, and, most importantly, a canvas where your customer’s vision springs to life. It is a natural extension of your design philosophy"
      />
      <StatementContainer
        imgSrc="/images/get-covered/get-covered.png"
        title="Mission StatemenT"
        desc={[
          "Our mission is to be the vessel that carries your design philosophy across digital waters, transforming your clients' visions into stunning digital experiences. We are dedicated to ensuring that every element of your design is beautifully reflected on screen, capturing the essence of luxury and sophistication in every pixel.",
        ]}
      />
      <StatementContainer
        imgSrc="/images/about-us/portrait.png"
        flexDir="items-end lg:flex-row-reverse"
        title="Founder Story"
        desc={[
          "From a young age, I was captivated by the elegance and innovation in design, whether in architecture, art, or technology. My passion for the sea was ignited during a family vacation aboard a luxury yacht, where the seamless blend of form and function in the interior design left a lasting impression. This experience, combined with my liberal arts degree in Physics and Computer Science, led me to a career in web design, where I merged my love for technology and art.",
          "After years of working with diverse clients, a collaboration with a yacht interior designer revealed a profound need for specialized digital solutions in this niche. This realization inspired me to focus exclusively on translating the luxury and sophistication of yacht interiors into digital experiences. Driven by this vision, I founded BlueWater Interiors, with the mission to ensure yacht designers' philosophies are reflected in every pixel, bridging the gap between exquisite design and digital innovation.",
        ]}
      />
    </main>
  );
};

export default page;
