import React from 'react';
import CTA from "@/components/CTA";

const Stats = () => {
    return (
        <div className="py-4 text-center">
            <h3 className="font-bold text-[28px]">Unleash the full power of your words</h3>
            <p className="pb-6 text-gray-600">Everything you need to tell your next story.</p>
            <div className="flex items-center justify-center pb-8">
                <div className="flex flex-col items-center border-r pr-10">
                    <h3 className="text-orange-700 font-semibold text-5xl">100+</h3>
                    <p className="text-center font-medium text-gray-700">Templates</p>
                </div>
                <div className="flex flex-col items-center border-r pr-10 pl-10">
                    <h3 className="text-orange-700 font-semibold text-5xl">5k+</h3>
                    <p className="text-center font-medium text-gray-700">Prompts</p>
                </div>
                <div className="flex flex-col items-center pl-10">
                    <h3 className="text-orange-700 font-semibold text-5xl">50+</h3>
                    <p className="text-center font-medium text-gray-700">Tools</p>
                </div>
            </div>
            <CTA/>
        </div>
    );
};

export default Stats;