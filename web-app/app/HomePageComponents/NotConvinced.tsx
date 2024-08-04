import React from "react";
import Image from "next/image";

function NotConvinced() {
  return (
    <div>
      <h2 className="text-center text-4xl">Not Convinced?</h2>
      <h3 className="text-center text-xl">Your success is our success</h3>
      <h4 className="pb-6 text-center text-xl">
        We want your portfolio to shine just like:
      </h4>
      <ul className="mx-auto grid h-fit w-fit grid-cols-3 gap-8">
        <li className="relative h-72 w-64">
          <h5 className="pb-4 pt-6 text-center text-xl font-bold">
            Lürssen Solandge
          </h5>
          <Image
            className="object-contain"
            src="/portfolio/pf1.png"
            fill
            alt="Lürssen"
          />
        </li>
        <li className="relative h-72 w-64">
          <h5 className="pb-4 pt-6 text-center text-xl font-bold">
            Nautical Elegance
          </h5>
          <Image
            className="object-contain"
            src="/portfolio/pf2.png"
            fill
            alt="Lürssen"
          />
        </li>
        <li className="relative h-72 w-64">
          <h5 className="pb-4 pt-6 text-center text-xl font-bold">
            Nautical Elegance
          </h5>
          <Image
            className="object-contain"
            src="/portfolio/pf3.png"
            fill
            alt="Lürssen"
          />
        </li>
      </ul>
    </div>
  );
}

export default NotConvinced;
