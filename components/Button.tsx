import React from 'react';

interface ButtonProps {
    children: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
    const buttonClasses = `font-semibold border px-4 rounded-xl ${className}`;

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
};

export default Button;