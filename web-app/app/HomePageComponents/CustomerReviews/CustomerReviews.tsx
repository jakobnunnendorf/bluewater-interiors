"use client";

import React, { useState } from "react";
import Carousel from "@/app/HomePageComponents/CustomerReviews/Carousel";

function CustomerReviews() {
  const reviews = [
    {
      name: "Sophie Lance",
      rating: 5,
      review: `As a yacht interior designer, I understand the importance of aesthetics, functionality, 
            and seamless luxury in my work. When it came to revamping my website, I knew I needed a partner 
            who could encapsulate these elements in a digital space.`,
    },
    {
      name: "James Harrington",
      rating: 5,
      review: `As a luxury yacht interior designer, the details of elegance and sophistication are crucial in my work. 
    When it came to creating a new website, I sought a partner who could translate these qualities into a digital format, 
    and I found exactly that with BlueWater Interiors.`,
    },
    {
      name: "Laura Bennett",
      rating: 5,
      review: `In my career as a yacht interior designer, presenting my work online with the same level of luxury 
    and precision I offer my clients is essential. BlueWater Interiors exceeded my expectations, 
    delivering a website that perfectly showcases the beauty and functionality of my designs.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      visibleReviews.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visibleReviews;
  };

  return (
    <div className="relative w-full py-24">
      <h2 className="p-16 text-center text-4xl">What our Customers say</h2>
      <div className="relative flex items-center justify-center overflow-hidden md:mx-auto md:w-1/2">
        <button
          className="absolute left-0 z-10 rounded-full bg-gray-800 p-2 text-white"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <Carousel reviews={getVisibleReviews()} />
        <button
          className="absolute right-0 z-10 rounded-full bg-gray-800 p-2 text-white"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default CustomerReviews;
