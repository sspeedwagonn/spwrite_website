import React from 'react';
import Button from "@/components/Button";

const Integrations = () => {
    return (
        <div>
            <p className="text-center text-violet-700 font-semibold">Integrations</p>
            <h3 className="text-center font-bold text-[28px]">Get more value from your tools</h3>

            <Button children={"View All Integrations"} />
        </div>
    );
};

export default Integrations;