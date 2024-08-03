import React from 'react';
import Card from "@/app/HomePageComponents/Portfolio/Card";

function Grid() {
    return (
        <div className="w-full px-4 h-full flex py-12">
            <div className="w-1/2  h-fit">
                <Card src="/pf1.png" alt="Website of the Lürssen Solandge luxury yacht"/>
                <Card src="/pf3.png" alt="Second version of the Nautical Elegance website"/>
            </div>
            <div className="w-1/2  h-fit">
                <Card src="/pf2.png" alt="Nautical Elegance website"/>
            </div>
        </div>
    );
}

export default Grid;