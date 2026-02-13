"use client";

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Publications = ({ publications }) => {
    return (
        <section id="publications" className="section-padding container-wide">
            <div className="mb-12 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-bold tracking-tighter">Publications</h2>
            </div>

            <div className="space-y-8">
                {publications.map((pub, index) => (
                    <div key={index} className="group">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                                <a href={pub.link} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                                    {pub.title}
                                    <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </h3>
                            <span className="font-mono text-sm text-[var(--muted)]">{pub.date}</span>
                        </div>

                        <p className="text-lg italic text-[var(--muted)] mb-3">{pub.journal}</p>
                        <p className="text-[var(--muted)] leading-relaxed max-w-3xl">
                            {pub.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
