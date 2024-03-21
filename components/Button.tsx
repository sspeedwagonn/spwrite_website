import React from 'react';

interface ButtonProps {
    children: string;
}
const Button:React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {children}
        </button>
    );
};

export default Button;