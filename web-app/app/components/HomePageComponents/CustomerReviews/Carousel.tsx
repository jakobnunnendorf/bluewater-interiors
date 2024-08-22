import React from "react";
import Review from "@/app/components/HomePageComponents/CustomerReviews/Review";

interface review {
  name: string;
  rating: number;
  review: string;
}

function Carousel({ reviews }: { reviews: review[] }) {
  return (
    <ul className="flex w-fit transition-transform duration-500 ease-in-out md:w-full">
      {reviews.map((review, index) => (
        <li
          key={index}
          className={`w-1/3 flex-shrink-0 transition-transform duration-500 ease-in-out ${
            index === 1 ? "scale-100" : "scale-75"
          }`}
        >
          <Review
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        </li>
      ))}
    </ul>
  );
}

export default Carousel;
