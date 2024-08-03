import React from 'react';

function Review({name, rating, review}: {name: string, rating: number, review: string}) {
    return (
        <div className="w-64 h-96 border rounded-lg ">
            <h3 className="text-xl text-center px-1 py-4">{name}</h3>
            <h4 className="text-center">{rating} Stars</h4>
            <p className="px-4 py-8">{review}</p>
        </div>
    );
}

export default Review;