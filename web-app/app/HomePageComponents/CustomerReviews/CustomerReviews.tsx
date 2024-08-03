import React from 'react';
import Review from "@/app/HomePageComponents/CustomerReviews/Review";

function CustomerReviews() {
    const reviews = [
        {
            name: "Sophie Lance",
            rating: 5,
            review: `As a yacht interior designer, I understand the importance of aesthetics, functionality, 
            and seamless luxury in my work. When it came to revamping my website, I knew I needed a partner 
            who could encapsulate these elements in a digital space.`
        },
        {
            name: "James Harrington",
            rating: 5,
            review: `As a luxury yacht interior designer, the details of elegance and sophistication are crucial in my work. 
    When it came to creating a new website, I sought a partner who could translate these qualities into a digital format, 
    and I found exactly that with Bluewater Interiors.`
        },
        {
            name: "Laura Bennett",
            rating: 5,
            review: `In my career as a yacht interior designer, presenting my work online with the same level of luxury 
    and precision I offer my clients is essential. Bluewater Interiors exceeded my expectations, 
    delivering a website that perfectly showcases the beauty and functionality of my designs.`
        }

    ]
    return (
        <div className="w-full ">
            <h2 className="text-4xl p-16 text-center">What our Customers say</h2>
            <ul className="flex items-center justify-around align-baseline w-2/3 mx-auto ">
                {
                    reviews.map((review, index) => (
                        <li key={index}>
                            <Review
                                name={review.name}
                                rating={review.rating}
                                review={review.review}
                            />
                        </li>))
                }
            </ul>
        </div>
    );
}

export default CustomerReviews;