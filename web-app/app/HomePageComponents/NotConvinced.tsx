import React from 'react';
import Image from "next/image"

function NotConvinced() {
    return (
        <div>
            <h2 className="text-4xl text-center">Not Convinced?</h2>
            <h3 className="text-xl text-center">Your success is our success</h3>
            <h4 className="text-xl text-center pb-6">We want your portfolio to shine just like:</h4>
            <ul className="mx-auto grid grid-cols-3 gap-8 w-fit h-fit">
                <li className="relative  w-64 h-72">
                    <h5 className="text-center font-bold text-xl pt-6 pb-4">Lürssen Solandge</h5>
                    <Image className="object-contain" src="/pf1.png" fill alt="Lürssen"/>
                </li>
                <li className="relative  w-64 h-72">
                    <h5 className="text-center font-bold text-xl pt-6 pb-4">Nautical Elegance</h5>
                    <Image className="object-contain" src="/pf2.png" fill alt="Lürssen"/>
                </li>
                <li className="relative w-64 h-72">
                    <h5 className="text-center font-bold text-xl pt-6 pb-4">Nautical Elegance</h5>
                    <Image className="object-contain" src="/pf3.png" fill alt="Lürssen"/>
                </li>
            </ul>
        </div>
    );
}

export default NotConvinced;