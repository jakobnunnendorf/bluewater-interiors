import React from 'react';
import Image from "next/image";

function Portrait() {
    return (
        <figure>
            <Image src="/portrait.jpg" height={400} width={400} alt="test" className="mx-auto"/>
            <figcaption className="text-center">Dubai International Boat Show, 2024</figcaption>
        </figure>
    );
}

export default Portrait;