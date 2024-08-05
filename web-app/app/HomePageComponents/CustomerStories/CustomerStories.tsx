import React from "react";
import Story from "@/app/HomePageComponents/CustomerStories/Story";
import CustomerReviews from "@/app/HomePageComponents/CustomerReviews/CustomerReviews";

function CustomerStories() {
  const stories = [
    { src: "/customer stories/customer 1.webp" },
    { src: "/customer stories/customer 2.webp" },
    { src: "/customer stories/customer 3.webp" },
    { src: "/customer stories/customer 4.webp" },
  ];
  return (
    <div className="rborder pt-32">
      <h2 className="text-center text-4xl font-bold">
        Don&apos;t listen to us, <br /> listen to:
      </h2>
      <div className="relative bottom-28">
        <CustomerReviews />
      </div>
    </div>
  );
}

export default CustomerStories;
