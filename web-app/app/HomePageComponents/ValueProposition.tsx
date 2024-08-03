import React from 'react';

function ValueProposition() {
    return (
        <div className="grid grid-cols-2 w-full p-32 gap-16">
            <div className="border rounded-lg bg-slate-400 p-8">
                <h3 className="text-2xl font-bold text-center pb-6">Have you ever felt like a&nbsp;
                    <span className="text-[#FDEBBD]">project</span> passed you by?
                </h3>
                <ul className="flex flex-col gap-8">
                    <li>Does your portfolio get the <span className="font-bold text-[#FDEBBD]">spotlight</span> it
                        deserves?
                    </li>
                    <li>Does your website do <span className="font-bold text-[#FDEBBD]">your portfolio</span> justice?
                    </li>
                    <li>Did your old web agency truly understand your <span className="font-bold text-[#FDEBBD]">design philosophy?</span>
                    </li>
                    <li>Are your customers <span className="font-bold text-[#FDEBBD]">STUNNED</span> from the&nbsp;
                        first click
                        to your first portfolio project?
                    </li>
                    <li>You want a better website but nobody has&nbsp;
                        <span className="font-bold text-[#FDEBBD]">experience</span> working with a&nbsp;
                        <span className="font-bold text-[#FDEBBD]">yacht interior designer</span>?
                    </li>
                </ul>
            </div>
            <div className="border rounded-lg bg-slate-400 p-8">
                <h3 className="text-2xl text-center font-bold pb-2">Let&apos;s get you covered</h3>
                <h3 className="text-lg text-center pb-6 opacity-50">or we return every penny back to you</h3>
                <ul className="flex flex-col gap-8">
                    <li>Not sure about the results? We totally understand, here is <span className="underline">the data.</span></li>
                    <li>All our clients are yacht interior designers - if it worked for them it will work for you.</li>
                    <li>My work saves you both time AND money.</li>
                    <li>There is no downside. If it performs you earn more, if it doesn&apos;t - full refund.</li>
                    <li>We specialise to be the BEST in the world in JUST yacht interior design</li>
                </ul>
            </div>
        </div>
    );
}

export default ValueProposition;