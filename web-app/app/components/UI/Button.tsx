"use client";

type Props = {
  name: string;
  onClick: () => void;
  bgColor?: string;
};

const Button: React.FC<Props> = ({
  name,
  onClick,
  bgColor = "bg-black text-white",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2.5 font-gilroy-regular font-normal duration-300 hover:scale-105 active:scale-95 md:px-7 md:py-3.5 md:text-lg ${bgColor}`}
    >
      {name}
    </button>
  );
};

export default Button;
