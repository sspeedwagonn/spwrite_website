import React from 'react';
import Button from "@/components/Button";

const NavBar = () => {
    return (
        <div className="inline-flex items-justify py-4">
            <ul className="inline-flex">
                <li className="px-4">Home</li>
                <li className="px-4">Features</li>
                <li className="px-4">Resources</li>
                <li className="px-4">About</li>
            </ul>

            <div className="right-0">
                <Button children={"Join the Waitlist"} />
            </div>

        </div>
    );
};

export default NavBar;