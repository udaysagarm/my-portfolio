import React from 'react';

import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = ({ certifications }) => {
    return (
        <section id="certifications" className="py-32 container mx-auto px-6">
            <h2 className="text-6xl font-bold mb-16 text-center"><span className="text-cyan-400">CERTIFICATIONS</span> & AWARDS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/30 transition-all hover:-translate-y-2 fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaAward className="text-6xl text-cyan-400" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                            <p className="text-lg text-gray-400 mb-4">{cert.issuer}</p>
                            <div className="flex justify-between items-center mt-6">
                                <span className="text-sm font-mono text-gray-500">{cert.date}</span>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                                    >
                                        Verify <FaExternalLinkAlt size={10} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
