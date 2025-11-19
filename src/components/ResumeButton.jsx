import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import TextScramble from './TextScramble';

const ResumeButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <MagneticButton>
            <a
                href="https://docs.google.com/document/d/1k9ZbDRV16oycnWPEAh-ZG2n6bU5Ka3bkJ97vqI6oGt0/edit?usp=sharing"
                className="relative group block"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                target="_blank"
            >
                {/* Animated Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 blur-[2px] transition duration-500 group-hover:duration-200 animate-gradient-xy"></div>

                {/* Button Content */}
                <div className="relative px-8 py-4 bg-black rounded-full flex items-center gap-3 border border-white/10 group-hover:border-transparent transition-colors">
                    <motion.div
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="text-cyan-400"
                    >
                        {isHovered ? <FaDownload /> : <FaFileAlt />}
                    </motion.div>

                    <div className="w-24 text-center overflow-hidden">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-cyan-400 transition-colors">
                            {isHovered ? (
                                <TextScramble trigger={true}>GET PDF</TextScramble>
                            ) : (
                                "RESUME"
                            )}
                        </span>
                    </div>
                </div>
            </a>
        </MagneticButton >
    );
};

export default ResumeButton;
