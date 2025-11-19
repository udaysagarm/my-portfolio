import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectItem = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="border-b border-white/10 py-8 cursor-pointer group"
        >
            <div className="flex justify-between items-baseline">
                <h3 className="text-4xl md:text-6xl font-bold font-['Syne'] text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <span className="text-gray-500 font-mono text-sm md:text-base">{project.category}</span>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 flex flex-col md:flex-row justify-between items-start gap-6">
                            <p className="text-gray-400 text-lg max-w-2xl">{project.description}</p>

                            <div className="flex flex-col items-end gap-4">
                                <div className="flex gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-cyan-400/80 border border-cyan-400/20 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-bold"
                                >
                                    View Project <FaExternalLinkAlt size={12} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const ProjectList = ({ projects }) => {
    return (
        <section id="projects" className="py-32 container mx-auto px-6">
            <h2 className="text-sm font-bold text-cyan-400 tracking-widest mb-10 uppercase">Selected Works</h2>
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectItem key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
