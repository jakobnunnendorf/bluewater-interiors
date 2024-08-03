import React from 'react';
import Pain from "./Pain";
import Gain from "./Gain";

function ValueProposition() {
    return (
        <div className="grid grid-cols-2 w-full p-32 gap-16">
            <Pain/>
            <Gain/>
        </div>
    );
}

export default ValueProposition;