import Image from "next/image";
import React from "react";

interface review {
  name: string;
  profile: string;
  rating: number;
  review: string;
  isActive?: boolean;
}

const ClientSayCarousel: React.FC<review> = ({
  name,
  profile,
  rating,
  review,
  isActive,
}) => {
  return (
    <div
      className={`rounded-[20px] bg-white p-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.15)] transition-all duration-500 sm:rounded-[30px] sm:p-4 md:rounded-[40px] md:px-7 md:py-5 ${isActive ? "h-[300px] min-w-[320px] max-w-[320px] md:h-[373px] md:min-w-[610px] md:max-w-[610px]" : "what-out-client-say-about h-[280px] min-w-[270px] max-w-[320px] blur-[2px] md:h-[298px] md:min-w-[487px] md:max-w-[487px]"}`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          className="mb-3 size-12 rounded-full outline-2 outline-black md:size-[75px]"
          src={profile}
          alt="quote"
          width={30}
          height={30}
        />
        <h4
          className={`mb-1.5 font-gilroy-medium font-normal text-black ${isActive ? "text-lg md:text-2xl" : "text-lg md:text-xl"}`}
        >
          {name}
        </h4>
        <svg
          className="max-md:size-4"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5618 1.50668C11.8013 0.769632 12.844 0.769632 13.0835 1.50668L15.351 8.48535C15.4581 8.81497 15.7653 9.03814 16.1119 9.03814H23.4497C24.2247 9.03814 24.5469 10.0298 23.9199 10.4854L17.9835 14.7984C17.7031 15.0021 17.5858 15.3632 17.6929 15.6928L19.9604 22.6715C20.1999 23.4086 19.3563 24.0215 18.7293 23.5659L12.7929 19.2529C12.5125 19.0492 12.1328 19.0492 11.8524 19.2529L5.91602 23.5659C5.28905 24.0215 4.44547 23.4086 4.68495 22.6715L6.95246 15.6928C7.05956 15.3632 6.94223 15.0021 6.66184 14.7984L0.725426 10.4854C0.0984557 10.0298 0.420676 9.03814 1.19566 9.03814H8.53347C8.88005 9.03814 9.18721 8.81497 9.29431 8.48535L11.5618 1.50668Z"
            fill="#F17121"
          />
        </svg>
        <p
          className={`mt-3 font-gilroy-regular text-[#656565] ${isActive ? "text-xs sm:text-sm md:text-lg" : "text-[10px] md:text-sm"}`}
        >
          {review}
        </p>
      </div>
    </div>
  );
};

export default ClientSayCarousel;
