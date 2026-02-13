"use client";

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = ({ certifications }) => {
    return (
        <section id="certifications" className="section-padding container-wide">
            <div className="mb-12 border-b border-white/10 pb-4">
                <h2 className="text-3xl font-bold tracking-tighter">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="group p-6 border border-white/10 hover:border-[var(--accent)] transition-colors duration-300 block bg-white/5 md:bg-transparent md:hover:bg-white/5"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">{cert.title}</h3>
                            {cert.link && <FaExternalLinkAlt className="text-xs text-[var(--muted)] group-hover:text-white transition-colors" />}
                        </div>
                        <div className="flex justify-between items-center text-sm font-mono text-[var(--muted)]">
                            <span>{cert.issuer}</span>
                            <span>{cert.date}</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
