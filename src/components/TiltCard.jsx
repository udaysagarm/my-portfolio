import React, { useRef } from "react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const contentRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        ref.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
        ref.current.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
        ref.current.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                {/* Shadow/Depth layer - omitted for simpler implementation, focusing on content wrapper */}
            </div>
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
        </div>
    );
};

// Simplified Tilt Card for cleaner integration
const SimpleTiltCard = ({ children, className }) => {
    const ref = useRef(null);

    function onMouseMove(e) {
        if (!ref.current) return;

        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;

        // Approximate the transform useTransform(mouseY, [-300, 300], [5, -5])
        // Range mapping: -300 to 300 -> 5 to -5. Slope = -10/600 = -1/60.
        const rX = y * (-1 / 60);
        const rY = x * (1 / 60);

        ref.current.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
        ref.current.style.transition = 'transform 0.1s ease-out';
    }

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                if (ref.current) {
                    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
                    ref.current.style.transition = 'transform 0.5s ease-out';
                }
            }}
            style={{
                transformStyle: 'preserve-3d',
            }}
            className={`perspective-1000 ${className}`}
        >
            {children}
        </div>
    );
};

export default SimpleTiltCard;
