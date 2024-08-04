import React from "react";
import Link from "next/link";
import InfoTag from "@/app/LayoutComponents/Hero/InfoTag";

function BookCall() {
  return (
    <div className="relative flex flex-col py-8 md:block md:w-52">
      <div className="flex h-full items-center justify-center">
        <Link href="https://calendly.com/jakobnunnendorf/call">
          <div className="mx-auto h-fit w-fit rounded-full border border-blue-400 px-4 py-4 shadow-xl md:my-auto md:mt-0">
            <h3 className="font-fat leading-3 text-blue-400">Book a call</h3>
          </div>
        </Link>
      </div>
      <InfoTag />
    </div>
  );
}

export default BookCall;
