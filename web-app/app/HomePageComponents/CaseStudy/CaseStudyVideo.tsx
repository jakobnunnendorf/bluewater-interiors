import React from 'react';

function CaseStudyVideo() {
    return (
        <video autoPlay loop muted className="w-full">
            <source src="/case%20study.mp4" type="video/mp4"/>
        </video>
    );
}

export default CaseStudyVideo;