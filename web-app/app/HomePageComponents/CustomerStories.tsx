import React from 'react';
import Image from "next/image";

function CustomerStories() {
    return (
        <div className="py-32">
            <h2 className="text-4xl text-center font-bold">Don&apos;t listen to us</h2>
            <h3 className="text-2xl opacity-65 text-center">Listen to our customers</h3>
            <ul className="flex p-16">
                <li><Image src="/customer 1.webp" height={600} width={400} alt=""/></li>
                <li><Image src="/customer 2.webp" height={600} width={400} alt=""/></li>
                <li><Image src="/customer 3.webp" height={600} width={400} alt=""/></li>
                <li><Image src="/customer 4.webp" height={600} width={400} alt=""/></li>
            </ul>
        </div>
    );
}

export default CustomerStories;