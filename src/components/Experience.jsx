import React from 'react';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="py-32 container mx-auto px-6 bg-neutral-900/30">
            <h2 className="text-6xl font-bold mb-16 text-center"><span className="text-cyan-400">WORK</span> EXPERIENCE</h2>
            <div className="max-w-4xl mx-auto space-y-12">
                {experience.map((exp, i) => (
                    <div key={i} className="border-l-2 border-white/10 pl-8 relative group">
                        <div className="absolute top-0 left-[-5px] w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                            <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h4>
                            <span className="text-gray-500 font-mono">{exp.period}</span>
                        </div>
                        <p className="text-lg text-cyan-400 mb-4">{exp.company}</p>
                        {Array.isArray(exp.desc) ? (
                            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-400 leading-relaxed">
                                {exp.desc.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400 leading-relaxed">{exp.desc}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
