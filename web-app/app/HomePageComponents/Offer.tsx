import React from 'react';

function Offer() {
    const results = [
        {
            metric: "Revenue",
            result: "+15%"
        },
        {
            metric: "Profit",
            result: "+13%"
        },
        {
            metric: "Clicks",
            result: "+780%"
        },
        {
            metric: "Leads",
            result: "+70%"
        },
        {
            metric: "Conversion Rate",
            result: "+25%"
        },
        {
            metric: "Customer Satisfaction",
            result: "+40%"
        },
        {
            metric: "Market Share",
            result: "+8%"
        },
        {
            metric: "New Subscribers",
            result: "+50%"
        },
        {
            metric: "Cost per Acquisition",
            result: "-20%"
        },
        {
            metric: "Bounce Rate",
            result: "-15%"
        }
    ];

    return (
        <div>
            <h2 className="text-4xl font-bold text-center pb-16">Our average client&apos;s results</h2>
            <ul className="grid grid-cols-5 gap-6 w-fit mx-auto pb-16">
                {results.map((result, index) => {
                    return <li key={index}
                               className="text-center grid place-content-center border rounded-xl w-32 h-32 p-8">
                        <h4 className="font-bold pb-2">{result.metric}</h4>
                        <h5 className="text-green-500 ">{result.result}</h5>
                    </li>
                })}
            </ul>
            <div className="w-1/2 mx-auto flex flex-col gap-8">
                <h2 className="text-4xl font-bold text-center pb-4 pt-16">How can we achieve this?</h2>
                <h3>Because we serve only one type of customer, we can spend 70% of our time on improving instead of reinventing the wheel. </h3>
            </div>
            <div className="w-1/2 mx-auto flex flex-col gap-8">
                <h2 className="text-4xl font-bold text-center pb-4 pt-16">Our irresistible offer</h2>
                <h3 className="text-2xl font-bold">1) First, we work upfront for free</h3>
                <h3 className="text-2xl font-bold">2) If you like it, you keep it </h3>
                <h3 className="text-2xl font-bold">3) If not, you don&apos;t pay</h3>
            </div>
        </div>
    );
}

export default Offer;