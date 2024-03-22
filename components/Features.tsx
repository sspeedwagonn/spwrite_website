import React from 'react';
import Sides from "@/components/Sides";

const Features = () => {
    return (
        <div className="py-4">
            <p className="text-center text-orange-700 font-semibold">Features</p>
            <h3 className="text-center font-bold text-[28px]">Turning Writers into Authors</h3>
            <p className="py-2 text-center text-gray-600">Unleash your creative genius with our unparalleled suite of features.</p>
            <Sides />
            <Sides />
            <Sides />
        </div>
    );
};

export default Features;