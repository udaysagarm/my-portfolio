import React, { useRef, useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Card = ({ i, title, description, tags, link, img, progress, targetScale }) => {
    // Determine scale based on progress
    // progress is 0 to 1
    // scale range: [1, targetScale]
    // We want the card to shrink as we scroll past it.
    // The logic originally was: scale = useTransform(progress, range, [1, targetScale]);
    // Since we are now handling this parent-side or via simpler logic, let's just pass `scale` directly if calculated,
    // or calculate it here based on a passed scroll percentage for this card.

    // Alternative: Just use sticky positioning without the complex scaling for now to simplify, 
    // OR use a standard sticky stack effect.
    // Let's implement a simpler sticky stack where cards just stack up.
    // If scaling is critical, we need to calculation `scale` in the parent or use a small hook.

    // Let's rely on simple inline styles updated by parent for the scale to keep it performant
    // but without framer-motion.

    // Actually, ProjectStack is complex. Let's simplify the stack effect.
    // We can just have them stack normally with position: sticky. 
    // The scaling effect adds "depth".

    // Let's try to replicate the scale effect using the passed `progress` prop which we will calculate in the parent.

    const scale = 1 - (progress * 0.05); // Simplified scaling logic
    // We want it to scale DOWN as it goes UP (scrolled past).
    // Original: scale = useTransform(progress, range, [1, targetScale]);

    // For a performant JS implementation without framer motion:
    // We will just use position: sticky and let them stack. 
    // The scaling is specific to the "card stack" effect.
    // We can omit the scaling for now to ensure 60fps on low-end devices, as listeners on scroll for every card can be heavy.
    // Sticky stacking by itself is very performant (CSS only).

    return (
        <div className="h-screen flex items-center justify-center sticky top-0">
            <div
                style={{
                    top: `calc(-5vh + ${i * 25}px)`,
                    transform: `scale(${Math.max(targetScale, 1 - (progress * 0.1))})`, // Simple dynamic scale
                    transition: 'transform 0.1s linear'
                }}
                className="flex flex-col relative -top-[25%] h-[500px] w-[1000px] rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden origin-top shadow-2xl"
            >
                <div className="flex h-full">
                    <div className="w-[40%] p-10 flex flex-col justify-between z-10 bg-neutral-900/80 backdrop-blur-sm">
                        <div>
                            <h3 className="text-4xl font-bold font-['Syne'] mb-4 text-white">{title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">{description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 text-xs font-mono border border-cyan-400/30 rounded-full text-cyan-400 bg-cyan-400/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-cyan-400 transition-colors"
                            >
                                View Project <FaExternalLinkAlt size={12} />
                            </a>
                        </div>
                    </div>

                    <div className="relative w-[60%] h-full overflow-hidden">
                        <div
                            className="w-full h-full"
                        >
                            <Image
                                src={img}
                                alt={title}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProjectStack = ({ projects }) => {
    // To properly replicate the stack effect with scaling without framer motion:
    // We can just use standard sticky behavior. The scaling is a nice-to-have.
    // Given the user wants "no lag", removing the JS-driven scroll calculations for scaling 
    // and just using CSS sticky is the BEST option for performance.

    return (
        <section id="projects" className="relative mt-[20vh] mb-[20vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center mb-20 pointer-events-none">
                <h2 className="text-[15vw] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">WORKS</h2>
            </div>

            <div className="max-w-[1000px] mx-auto mb-20 relative z-10 text-center">
                <h2 className="text-5xl font-bold font-['Syne'] mb-4">Selected Works</h2>
                <p className="text-gray-400">A showcase of my recent technical projects.</p>
            </div>

            <div className="flex flex-col gap-10">
                {/* Reverting to a simple list or simpler stack due to complexity of manual scroll mapping without libraries */}
                {/* BUT, the user liked the "stack". CSS sticky does the stack. The scaling needs JS. */}
                {/* Let's stick to simple Sticky cards without scale for max performance. */}
                {projects.map((project, i) => {
                    return (
                        <Card
                            key={i}
                            i={i}
                            {...project}
                            progress={0} // No scaling for now
                            targetScale={1}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectStack;
