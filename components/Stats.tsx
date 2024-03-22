import React from 'react';
import CTA from "@/components/CTA";

const Stats = () => {
    return (
        <div className="py-4">
            <h3 className="text-center font-bold text-[28px]">Unleash the full power of your words</h3>
            <p className="py-2 text-center text-gray-600">Everything you need to tell your next story.</p>
            <div className="inline-flex flex">
                <div>
                    <h3 className="px-5 text-orange-700 font-semibold text-5xl">100+</h3>
                    <p>Templates</p>
                </div>
                <div>
                    <h3 className="text-orange-700 font-semibold text-5xl">5k+</h3>
                    <p>Prompts</p>
                </div>
                <div>
                    <h3 className="text-orange-700 font-semibold text-5xl">50+</h3>
                    <p>Tools</p>
                </div>
            </div>
            <CTA/>
        </div>
    );
};

export default Stats;