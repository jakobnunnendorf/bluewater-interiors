import { BookACallBtn } from "../../HomePageComponents/HesitateCard/HesitateCard";

type Props = {};

const LeftSection = (props: Props) => {
  return (
    <div className="h-[725px] w-full bg-[url('/images/contact-us.png')] bg-no-repeat px-9 py-7 max-lg:rounded-t-[40px] max-lg:bg-cover max-lg:bg-left-bottom lg:max-w-[502px] lg:bg-contain">
      <article className="mb-12">
        <h2 className="mb-3.5 font-gilroy-bold text-3xl font-medium text-black sm:text-[46px]">
          What you’ll get
        </h2>

        <ul className="flex list-inside list-disc flex-col gap-5 font-gilroy-medium text-sm font-normal text-black sm:text-lg">
          {BulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </article>
      <BookACallBtn isBorder={true} />
    </div>
  );
};

export default LeftSection;

const BulletPoints = [
  "Free Consultation",
  "Free website (win-win portfolio porject)",
  "Video content of the process",
  "Free yacht brand website for your clients",
];
