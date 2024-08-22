import React from "react";

type Props = {
  title: string;
  isRounded?: boolean;
};

const TextWithBg: React.FC<Props> = ({ title, isRounded = true }) => {
  return (
    <div
      className={`bg-primary-orange w-fit px-6 py-2.5 font-gilroy-medium text-xl font-normal uppercase !leading-none text-white ${isRounded ? "rounded-full" : ""}`}
    >
      {title}
    </div>
  );
};

export default TextWithBg;
