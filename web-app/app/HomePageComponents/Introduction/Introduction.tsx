import React from 'react';
import Portrait from "@/app/HomePageComponents/Introduction/Portrait";
import Bio from "@/app/HomePageComponents/Introduction/Bio";

function Introduction() {
    return (
        <div className="grid grid-cols-2 p-32">
            <Portrait/>
            <Bio/>
        </div>
    );
}

export default Introduction;