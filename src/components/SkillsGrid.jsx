import React from 'react';

import {
    SiReact, SiNodedotjs, SiPython, SiTensorflow, SiSpringboot,
    SiGit, SiMongodb, SiPostgresql, SiFirebase,
    SiTypescript, SiTailwindcss, SiCplusplus,
    SiGo, SiJavascript, SiHtml5, SiCss3, SiFlask, SiVercel, SiDotnet
} from 'react-icons/si';
import {
    FaJava, FaDatabase, FaBrain, FaCode, FaServer,
    FaLaptopCode, FaSitemap, FaNetworkWired, FaRobot,
    FaCubes, FaTerminal, FaProjectDiagram
} from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const categories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "C#", icon: FaCode, color: "#239120" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "Go", icon: SiGo, color: "#00ADD8" },
        ]
    },
    {
        title: "Web Development",
        skills: [
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: ".NET", icon: SiDotnet, color: "#512BD4" },
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "Flask", icon: SiFlask, color: "#000000" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        ]
    },
    {
        title: "Backend Engineering",
        skills: [
            { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
            { name: "RESTful APIs", icon: FaNetworkWired, color: "#E34F26" },
        ]
    },
    {
        title: "Databases & Cloud",
        skills: [
            { name: "SQL", icon: FaDatabase, color: "#4479A1" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Vercel", icon: SiVercel, color: "#000000" },
            { name: "Azure", icon: VscAzure, color: "#0078D4" },
        ]
    },
    {
        title: "AI & Machine Learning",
        skills: [
            { name: "Artificial Intelligence", icon: FaBrain, color: "#FF6F00" },
            { name: "Machine Learning", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Generative AI", icon: FaRobot, color: "#10A37F" },
            { name: "RAG", icon: FaProjectDiagram, color: "#00ADD8" },
            { name: "Prompt Engineering", icon: FaTerminal, color: "#F7DF1E" },
        ]
    },
    {
        title: "Computer Science Core",
        skills: [
            { name: "OOP", icon: FaCubes, color: "#F05032" },
            { name: "Data Structures", icon: FaSitemap, color: "#61DAFB" },
            { name: "Algorithms", icon: FaLaptopCode, color: "#339933" },
            { name: "Systems Programming", icon: FaServer, color: "#FFFFFF" },
            { name: "Git", icon: SiGit, color: "#F05032" },
        ]
    }
];

const SkillsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-400/30 transition-colors fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <h4 className="text-2xl font-bold mb-8 text-cyan-400 border-b border-white/10 pb-4 inline-block">
                        {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-4">
                        {category.skills.map((skill, i) => (
                            <div
                                key={i}
                                className="group flex items-center gap-3 bg-white/5 px-4 py-3 rounded-full hover:bg-white/10 transition-colors cursor-default"
                            >
                                <skill.icon
                                    className="text-xl text-gray-400 group-hover:text-[var(--color)] transition-colors"
                                    style={{ '--color': skill.color }}
                                />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsGrid;
