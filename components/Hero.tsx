import React from 'react';
import Button from "@/components/Button";
import { BsPlayCircle } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="bg-gray-50">
            <h1 className="font-bold text-[65px] text-center bg-gradient-to-r from-orange-800 via-orange-400 to-red-700 text-transparent bg-clip-text">Writing Software Reimagined</h1>
            <p className="pt-1 pb-4 text-center text-gray-700 text-[20px]">Revolutionizing the writing experience with innovative design and advanced<br/>technology, tailored for authors and... 100% free.</p>
            <div className="flex justify-center col-span-2">
                <Button className="py-4 mr-4 bg-white transition duration-500 hover:bg-orange-700 hover:text-white border-orange-700 text-orange-700 rounded-xl">
                    <BsPlayCircle className="inline-block align-middle"/> Demo
                </Button>
                <Button children={"Join The Waitlist"} className="py-4 bg-orange-700 transition duration-500 hover:bg-white hover:text-orange-700 border-orange-700 text-white rounded-xl"/>
            </div>
            <img src="" alt="View of SPWrite from laptop" className="text-center pt-5"/>
        </div>
    );
};

export default Hero;