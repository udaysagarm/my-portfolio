"use client";

import React, { useRef } from 'react';

const MagneticButton = ({ children, className, onClick }) => {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        // Direct DOM manipulation for performance
        ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        ref.current.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
        ref.current.style.transform = 'translate(0px, 0px)';
        ref.current.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // Spring-like easing
    };

    return (
        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
