import React from 'react';

import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';

const Publications = ({ publications }) => {
    return (
        <section id="publications" className="py-32 container mx-auto px-6 bg-neutral-900/30">
            <h2 className="text-6xl font-bold mb-16 text-center"><span className="text-cyan-400">PUBLICATIONS</span> & RESEARCH</h2>

            <div className="max-w-4xl mx-auto space-y-8">
                {publications.map((pub, index) => (
                    <div
                        key={index}
                        className="group relative bg-neutral-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/30 transition-all hover:-translate-y-2 fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaBookOpen className="text-6xl text-cyan-400" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors max-w-2xl">{pub.title}</h3>
                                <span className="text-sm font-mono text-cyan-400 border border-cyan-400/20 px-3 py-1 rounded-full whitespace-nowrap">{pub.date}</span>
                            </div>

                            <p className="text-lg text-gray-300 mb-2 font-medium">{pub.journal}</p>
                            <p className="text-gray-400 leading-relaxed mb-6">{pub.description}</p>

                            {pub.link && (
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                                >
                                    Read Paper <FaExternalLinkAlt size={10} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Publications;
