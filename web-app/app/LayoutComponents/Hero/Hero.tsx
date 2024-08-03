import React from 'react';
import BGVideo from "@/app/LayoutComponents/Hero/BGVideo";
import HeadLine from "@/app/LayoutComponents/Hero/HeadLine";

function Hero() {
    return (
        <div className="h-fit">
            <HeadLine/>
            <BGVideo/>
        </div>
    );
}

export default Hero;