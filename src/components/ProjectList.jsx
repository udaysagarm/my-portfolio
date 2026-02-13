"use client";

import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const ProjectList = ({ projects }) => {
    return (
        <section id="projects" className="section-padding container-wide">
            <div className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Selected Work</h2>
                <span className="text-[var(--muted)] font-mono text-sm hidden md:inline-block">2023 — Present</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5 mb-6">
                            <Image
                                src={project.img || "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--muted)] text-sm max-w-sm">
                                    {project.description}
                                </p>
                            </div>
                            <div className="hidden md:flex flex-col items-end gap-2 text-right">
                                <span className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                                    {project.category}
                                </span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0 duration-300 text-[var(--accent)]">
                                    <FaArrowRight />
                                </span>
                            </div>
                        </div>

                        {/* Mobile Tags */}
                        <div className="flex flex-wrap gap-2 mt-4 md:hidden">
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="text-[10px] border border-white/10 px-2 py-1 text-[var(--muted)]">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
