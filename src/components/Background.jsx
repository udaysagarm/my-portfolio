import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Gradient Mesh / Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -60, 0],
                    x: [0, -150, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[-20%] right-[-20%] w-[900px] h-[900px] bg-purple-600/20 rounded-full blur-[150px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[30%] left-[30%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"
            />
        </div>
    );
};

export default Background;
