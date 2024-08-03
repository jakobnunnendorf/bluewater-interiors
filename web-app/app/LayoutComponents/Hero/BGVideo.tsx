import React from 'react';

function BgVideo() {
    return (
        <video autoPlay loop muted className="absolute top-0 w-full z-0 ">
            <source src="/yacht-video.mov" type="video/mp4"/>
        </video>
    );
}

export default BgVideo;