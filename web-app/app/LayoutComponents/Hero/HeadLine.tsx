import React from 'react';
import Socials from './HeroText/Socials'
import HeroHeading from './HeroText/HeroHeading';
import HeroSubHeading from './HeroText/HeroSubHeading';

function HeadLine() {
    return (
        <div className="h-[93vh] flex flex-col justify-center z-10">
            <HeroHeading/>
            <HeroSubHeading/>
            <Socials/>
        </div>
    );
}

export default HeadLine;