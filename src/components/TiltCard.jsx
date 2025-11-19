import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
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
        </motion.div>
    );
};

// Simplified Tilt Card for cleaner integration
const SimpleTiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = useRef(null);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            style={{
                rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
                rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
            }}
            className={`perspective-1000 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default SimpleTiltCard;
