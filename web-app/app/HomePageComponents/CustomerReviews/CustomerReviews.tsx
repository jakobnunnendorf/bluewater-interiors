"use client";
import React, { useState } from "react";
import Review from "@/app/HomePageComponents/CustomerReviews/Review";

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
    and I found exactly that with Bluewater Interiors.`,
    },
    {
      name: "Laura Bennett",
      rating: 5,
      review: `In my career as a yacht interior designer, presenting my work online with the same level of luxury 
    and precision I offer my clients is essential. Bluewater Interiors exceeded my expectations, 
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

  return (
    <div className="relative w-full">
      <h2 className="p-16 text-center text-4xl">What our Customers say</h2>
      <div className="relative flex items-center justify-center overflow-hidden">
        <button
          className="absolute left-0 z-10 rounded-full bg-gray-800 p-2 text-white"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <ul
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 33.3333}%)` }}
        >
          {reviews.map((review, index) => (
            <li
              key={index}
              className="w-1/3 flex-shrink-0 px-4"
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <Review
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            </li>
          ))}
        </ul>
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
