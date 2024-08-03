import React from 'react';
import ResultsPanel from "@/app/HomePageComponents/Offer/ResultsPanel";
import HowItWorks from "@/app/HomePageComponents/Offer/HowItWorks";
import OurOffer from "@/app/HomePageComponents/Offer/OurOffer";

function Offer() {
    return (
        <div>
            <ResultsPanel/>
            <HowItWorks/>
            <OurOffer/>
        </div>
    );
}

export default Offer;