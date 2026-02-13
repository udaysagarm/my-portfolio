"use client";

import React from 'react';
import {
    SiReact, SiNodedotjs, SiPython, SiTensorflow, SiSpringboot,
    SiGit, SiMongodb, SiPostgresql, SiFirebase,
    SiTypescript, SiTailwindcss, SiCplusplus,
    SiGo, SiJavascript, SiHtml5, SiCss3, SiFlask, SiVercel, SiDotnet,
    SiDocker, SiKubernetes, SiTerraform, SiJenkins, SiGithubactions,
    SiFastapi, SiExpress, SiLinux, SiGnubash, SiJira, SiConfluence,
    SiSonarqube, SiPaloaltonetworks, SiAuth0, SiOpenai, SiLangchain
} from 'react-icons/si';
import {
    FaJava, FaDatabase, FaBrain, FaCode, FaServer,
    FaLaptopCode, FaSitemap, FaNetworkWired, FaRobot,
    FaCubes, FaTerminal, FaProjectDiagram, FaLock, FaShieldAlt, FaBug,
    FaSearch, FaLayerGroup, FaBolt
} from 'react-icons/fa';
import { VscAzure, VscTerminal } from 'react-icons/vsc';

const categories = [
    {
        title: "Advanced AI & Orchestration",
        skills: [
            { name: "LangGraph", icon: FaProjectDiagram },
            { name: "RAG Systems", icon: FaSearch },
            { name: "LangChain", icon: SiLangchain }, // Fallback to FaBrain if generic
            { name: "n8n", icon: FaNetworkWired },
            { name: "Prompt Eng.", icon: FaRobot },
            { name: "TensorFlow", icon: SiTensorflow },
        ]
    },
    {
        title: "DevOps & Infrastructure",
        skills: [
            { name: "CI/CD Pipelines", icon: SiGithubactions },
            { name: "Terraform (IaC)", icon: SiTerraform },
            { name: "Docker", icon: SiDocker },
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "SonarQube", icon: SiSonarqube },
            { name: "Azure DevOps", icon: VscAzure },
        ]
    },
    {
        title: "CyberSecurity & Identity",
        itemsTitle: "Security",
        skills: [
            { name: "IAM / Auth", icon: SiAuth0 },
            { name: "Active Directory", icon: FaLock },
            { name: "Palo Alto", icon: FaShieldAlt },
            { name: "Compliance", icon: FaBug },
            { name: "Vuln. Assess", icon: FaSearch },
        ]
    },
    {
        title: "Advanced Backend",
        skills: [
            { name: "FastAPI", icon: SiFastapi },
            { name: "Flask", icon: SiFlask },
            { name: "Express.js", icon: SiExpress },
            { name: "Microservices", icon: FaSitemap },
            { name: "Linux/Bash", icon: SiLinux },
            { name: "C++", icon: SiCplusplus },
        ]
    },
    {
        title: "Algorithmic & Systems",
        skills: [
            { name: "System Design", icon: FaServer },
            { name: "Optimization", icon: FaBolt },
            { name: "Data Structures", icon: FaCubes },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
        ]
    },
    {
        title: "Management & UI/UX",
        skills: [
            { name: "Jira / Atlassian", icon: SiJira },
            { name: "SDLC", icon: FaProjectDiagram },
            { name: "TUI Design", icon: VscTerminal },
            { name: "Responsive UI", icon: SiTailwindcss },
            { name: "React / Next.js", icon: SiReact },
        ]
    }
];

const SkillsGrid = () => {
    return (
        <section id="skills" className="section-padding container-wide bg-white/5 my-20 rounded-3xl border border-white/5">
            <div className="mb-12 px-8 pt-8">
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Technical Proficiency</h2>
                <div className="h-[1px] w-full bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 pb-12">
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-sm font-mono text-[var(--accent)] uppercase tracking-wider mb-6 border-b border-white/10 pb-2 inline-block">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill, i) => (
                                <li key={i} className="flex items-center gap-3 text-[var(--muted)] hover:text-white transition-colors duration-200 group">
                                    <span className="text-lg text-white/50 group-hover:text-[var(--accent)] transition-colors">
                                        {skill.icon ? <skill.icon /> : <FaCode />}
                                    </span>
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsGrid;
