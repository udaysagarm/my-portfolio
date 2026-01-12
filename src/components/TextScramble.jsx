import React, { useEffect, useState } from 'react';


const chars = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

const TextScramble = ({ children, className, trigger = true }) => {
    const [text, setText] = useState(children);
    const originalText = children;

    useEffect(() => {
        if (!trigger) return;

        let iteration = 0;
        let interval = null;

        interval = setInterval(() => {
            setText(
                originalText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [trigger, originalText]);

    return <span className={className}>{text}</span>;
};

export default TextScramble;
