import React from 'react';
import {IoMailOutline} from "react-icons/io5";
import {GiCheckMark} from "react-icons/gi";

const Features = () => {
    return (
        <div className="py-4">
            <p className="text-center text-orange-700 font-semibold">Features</p>
            <h3 className="text-center font-bold text-[28px]">Turning Writers into Authors</h3>
            <p className="pb-2 text-center text-gray-600">Unleash your creative genius with our unparalleled suite of
                features.</p>
            <div className="mx-[15%] columns-2 pt-10">
                <div className="bg-orange-50 h-20 w-20 rounded-full flex items-center justify-center">
                    <IoMailOutline className="text-orange-800 bg-orange-200 rounded-full h-12 w-12 p-2"/>
                </div>
                <h4>User-Friendly Design</h4>
                <p>Our design prioritizes simplicity and ease-of-use, ensuring<br/> a seamless writing experience for every author.</p>
                <ul>
                    <li className="flex items-center"><GiCheckMark className="mr-2"/> Designed to be accessible for all</li>
                    <li><GiCheckMark /> Efficient organization for easy access</li>
                    <li><GiCheckMark /> Interactive tutorials and tooltips for learning on-to-go</li>
                </ul>
                <img src="https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1" alt="" className="rounded-xl"/>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Features;