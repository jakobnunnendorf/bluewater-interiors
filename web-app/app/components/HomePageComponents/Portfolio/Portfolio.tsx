import TextWithBg from "@/app/components/UI/TextWithBg";
import Image from "next/image";
function Portfolio() {
  return (
    <div className="flex flex-col gap-3.5 py-16">
      <article className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3.5">
          <TextWithBg title="Boutique Websites For" />
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-center font-gilroy-medium text-[65px] font-normal leading-none text-black">
              World-Class Yacht <br />{" "}
              <span className="text-primary-orange">Interior</span> Designers
            </h2>
            <p className="text-gray-light font-gilroy-regular text-lg font-normal leading-none">
              Because we want to do your portfolio justice
            </p>
          </div>
        </div>
      </article>
      <Image
        src="/images/hero-bg.png"
        className="h-fit w-full"
        alt="portfolio"
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default Portfolio;
