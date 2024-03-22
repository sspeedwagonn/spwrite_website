import React from 'react';
import Button from "@/components/Button";
import { RiQuillPenFill } from "react-icons/ri";

const NavBar = () => {


    return (
        <div className="bg-gray-50 flex justify-between items-center py-4 px-8">
            <div className="flex items-center">
                <RiQuillPenFill className="w-6 h-6 mr-2 text-orange-700" />
                <div className="text-xl font-bold">SPWrite</div>
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4 cursor-pointer transition duration-300 hover:text-orange-800">Home</li>
                    <li className="px-4 cursor-pointer transition duration-300 hover:text-orange-800">Features</li>
                    <li className="px-4 cursor-pointer transition duration-300 hover:text-orange-800">About</li>
                </ul>
            </div>
            <div className="flex items-center">
                <Button children={"Join the Waitlist"} className="bg-orange-700 py-1.5 transition duration-500 hover:bg-white hover:text-orange-700 border-orange-700 text-white" />
            </div>
        </div>
    );
};

export default NavBar;