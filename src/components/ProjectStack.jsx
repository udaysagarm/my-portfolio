import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Card = ({ i, title, description, tags, link, img, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
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
                        <motion.div
                            style={{ scale: imageScale }}
                            className="w-full h-full"
                        >
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-transparent" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const ProjectStack = ({ projects }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} id="projects" className="relative mt-[20vh] mb-[20vh]">
            <div className="sticky top-0 h-screen flex items-center justify-center mb-20 pointer-events-none">
                <h2 className="text-[15vw] font-bold text-white/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">WORKS</h2>
            </div>

            <div className="max-w-[1000px] mx-auto mb-20 relative z-10 text-center">
                <h2 className="text-5xl font-bold font-['Syne'] mb-4">Selected Works</h2>
                <p className="text-gray-400">A showcase of my recent technical projects.</p>
            </div>

            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * .25, 1]}
                        targetScale={targetScale}
                    />
                )
            })}
        </section>
    )
}

export default ProjectStack;
