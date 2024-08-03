import React from 'react';

interface Result{
    metric: string,
    result: string
}

function Metric({result}:{result: Result}) {
    return <div
        className="text-center grid place-content-center border rounded-xl w-32 h-32 p-8">
        <h4 className="font-bold pb-2">{result.metric}</h4>
        <h5 className="text-green-500 ">{result.result}</h5>
    </div>
}

function ResultsPanel() {
    const results: Result[] = [
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
                    return <li key={index}>
                        <Metric result={result}/>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default ResultsPanel;