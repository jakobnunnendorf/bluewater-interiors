import React from "react";
import Story from "@/app/HomePageComponents/CustomerStories/Story";

function CustomerStories() {
  const stories = [
    { src: "/customer stories/customer 1.webp" },
    { src: "/customer stories/customer 2.webp" },
    { src: "/customer stories/customer 3.webp" },
    { src: "/customer stories/customer 4.webp" },
  ];
  return (
    <div className="py-32">
      <h2 className="text-center text-4xl font-bold">
        Don&apos;t listen to us
      </h2>
      <h3 className="text-center text-2xl opacity-65">
        Listen to our customers
      </h3>
      <ul className="flex p-16">
        {stories.map((story, index) => (
          <li key={index}>
            <Story src={story.src} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerStories;
