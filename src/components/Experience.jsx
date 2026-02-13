"use client";

import React from 'react';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="section-padding container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Header */}
                <div>
                    <h2 className="text-4xl font-bold tracking-tighter sticky top-32">
                        Experience
                    </h2>
                </div>

                {/* Timeline */}
                <div className="lg:col-span-2 space-y-16">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l border-white/10 group hover:border-[var(--accent)] transition-colors duration-500">
                            {/* Dot */}
                            <div className="absolute top-0 left-[-5px] w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-[var(--accent)] transition-colors duration-500" />

                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <span className="font-mono text-sm text-[var(--muted)]">{exp.period}</span>
                            </div>

                            <p className="text-lg text-white mb-4">{exp.company}</p>

                            <ul className="space-y-3">
                                {exp.desc.map((item, i) => (
                                    <li key={i} className="text-[var(--muted)] leading-relaxed text-sm">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
