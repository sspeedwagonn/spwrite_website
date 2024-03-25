import React from 'react';
import Button from "@/components/Button";

const Cta = () => {
    return (
        <div className="mx-[20%] mt-10 px-10 py-10 bg-orange-100 rounded-xl">
            <div className="inline">
                <h4 className="pl-5 text-[30px] text-left align-left text-orange-900 font-bold">Join the waitlist for
                    SPWrite</h4>
                <Button children={"Learn more"} className="bg-white border-gray-500 p-1.5 text-gray-600"/>
            </div>

            <p className="text-[18px] text-left text-orange-800 font-medium">Be the first to know about when SPWrite releases!</p>
        </div>
    );
};

export default Cta;