import HeaderBar from "../LayoutComponents/HeaderBar/HeaderBar";
import TextWithBg from "../UI/TextWithBg";

type Props = {
  isShowTextBg?: boolean;
  title: string;
  desc: string;
};

const SeconderyHeroWithNav: React.FC<Props> = ({
  isShowTextBg = false,
  title,
  desc,
}) => {
  return (
    <section className="mx-auto max-w-[1387px] px-3 pt-3 md:px-6 md:pt-6">
      <div className="h-[515px] w-full rounded-[40px] bg-[url('/images/about-us/about-hero.png')] bg-cover bg-no-repeat px-3 max-lg:bg-center md:px-7 lg:px-[73px]">
        <HeaderBar isBg={false} />
        <div className="mx-auto flex h-[calc(100%-110px)] w-full max-w-[844px] flex-col items-center justify-center">
          {isShowTextBg && (
            <TextWithBg title="A Showcase of Mastery and Elegance" />
          )}
          <h2 className="mt-5 font-gilroy-medium text-xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-[65px]">
            ABOUT US
          </h2>
          <p className="mt-2 text-center font-gilroy-medium text-sm text-white md:text-base lg:text-lg">
            At BlueWater Interiors, we believe that yacht interior design
            represents the pinnacle of luxury—where dreams, born long ago, of
            freedom, excellence, and feeling at home across the seven seas
            finally converge. We see your online presence as a testament to
            elegance, beauty, and, most importantly, a canvas where your
            customer’s vision springs to life. It is a natural extension of your
            design philosophy
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeconderyHeroWithNav;
