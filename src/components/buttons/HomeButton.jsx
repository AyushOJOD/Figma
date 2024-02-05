import React from 'react';

const HomeButton = ({ text, b_color, color, padding_x, padding_y, border }) => {
    return (
        <button
            className={`border-${border} border-${b_color} px-${padding_x} py-${padding_y} rounded-lg text-${color}`}
        >
            {text}
        </button>
    );
};

export default HomeButton;
