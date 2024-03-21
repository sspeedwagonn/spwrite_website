import React from 'react';
import Button from "@/components/Button";

const Hero = () => {
    return (
        <div className="bg-gray-50">
            <h1 className="font-bold text-[65px] text-center text-gray-900">Writing Software Reimagined</h1>
            <p className="pt-3 text-center text-gray-700 text-[20px]">Revolutionizing the writing experience with innovative design and advanced<br/>technology, tailored for authors and... 100% free.</p>
            <Button children={"Test"} />
            <Button children={"Hello"}/>

            <img src="" alt="View of SPWrite from laptop" />
        </div>
    );
};

export default Hero;