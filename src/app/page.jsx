"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { FaEnvelope } from 'react-icons/fa';
import SkillsGrid from '../components/SkillsGrid';
import ProjectList from '../components/ProjectList';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Publications from '../components/Publications';
// import Background from '../components/Background'; // Removed for clean look
// import MagneticButton from '../components/MagneticButton'; // Removed
// import ScrollProgress from '../components/ScrollProgress'; // Removed
// import TextScramble from '../components/TextScramble'; // Removed
import { SpeedInsights } from "@vercel/speed-insights/react"

// New Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// --- Data ---
const projects = [
    {
        title: "Project Space Black: Ghost",
        category: "CLI AI Agent",
        description: "A self-evolving, terminal-native AI agent.",
        tags: ["Python", "TypeScript", "Textual", "LangGraph", "LangChain",],
        link: "https://spaceblack.info",
        img: "/space-black.png"
    },
    {
        title: "Hirely App",
        category: "Full Stack",
        description: "Comprehensive job search platform with scalable backend.",
        tags: ["React", "Node.js", "PostgreSQL", "Docker", "Azure"],
        link: "https://hirely.azurewebsites.net",
        img: "/hirely.png"
    },
    {
        title: "Rental Connect",
        category: "Enterprise",
        description: "Multi-tiered platform for property management.",
        tags: ["Java", "Spring Boot", "MySQL"],
        link: "https://github.com/udaysagarm/RentalConnect",
        img: "/rental-connect.png"
    },
    {
        title: "Escape Room VR",
        category: "Game Dev",
        description: "High-performance VR game with complex puzzle logic.",
        tags: ["Unity", "C#", "VR"],
        link: "https://udaysagar.itch.io/escape-room",
        img: "/escape-room-vr.png"
    },
    {
        title: "PDF ChatBot",
        category: "AI / Python",
        description: "RAG based chatbot for PDFs.",
        tags: ["Python", "LangChain", "React"],
        link: "https://github.com/udaysagarm/PDF-Bot",
        img: "/pdf-chatbot.png"
    },
    {
        title: "AI Text Detection",
        category: "AI / ML",
        description: "Neural network to classify machine-generated text.",
        tags: ["Python", "TensorFlow", "NLP"],
        link: "#",
        img: "/ai-text-detection.png"
    },
];

const experience = [
    {
        role: "AI Engineering Extern",
        company: "Outamation (Extern)",
        period: "2026",
        desc: [
            "During the externship, I'll be developing a Python-based preprocessing pipeline designed to optimize OCR accuracy and transform high-complexity scanned documents into machine-readable datasets.",
            "Integrating and testing AI models within a full document processing workflow to benchmark performance metrics like extraction speed, accuracy, and formatting reliability.",
            "Engineering an end-to-end Document Intelligence system utilizing Retrieval-Augmented Generation (RAG) to automate the classification and data extraction of unstructured mortgage 'blob' files.",
        ]
    },
    {
        role: "Graduate Teaching Assistant",
        company: "Michigan Tech",
        period: "2025",
        desc: [
            "Actively guided student teams through the full Software Development Lifecycle (SDLC), focusing on requirement analysis, clear documentation, and efficient debugging, effectively acting as a technical lead for project delivery.",
            "Led weekly code review sessions for over 100 students (across both courses), enforcing industry standards for Software Quality Assurance, test coverage, and code.",
            "Provided targeted technical and architectural guidance for Team Software Project designs, mentoring teams on applying Object-Oriented Design (OOD) and scalable patterns for their full-stack applications."
        ]
    },
    {
        role: "Intern",
        company: "Virtusa",
        period: "2023",
        desc: [
            "Contributed hands-on coding to the Camera Service Center Appointment System, collaborating with cross-functional teams to integrate new business features from design through successful deployment.",
            "Developed and modified core backend services utilizing REST API concepts, with a critical focus on ensuring secure user authentication and data handling for enterprise applications.",
            "Actively involved in the full SDLC, diagnosing and resolving system vulnerabilities and technical issues to improve the stability and performance of the existing application in production."
        ]
    },
    {
        role: "Cyber Security Intern",
        company: "AICTE",
        period: "2022",
        desc: [
            "Completed an internship program focused on foundational and advanced Cybersecurity concepts, supported by the Palo Alto Networks Cybersecurity.",
            "Identity & Access Management(IAM): Configured and managed security policies and user permissions in virtual environments, directly mirroring Active Directory management tasks.",
            "Infrastructure Configuration: Implemented and evaluated security protocols for virtualized Windows and Linux systems to maintain platform resilience and protect sensitive data.",
            "Incident Troubleshooting: Investigated security alerts and technical logs to diagnose and correct system failures, maintaining high availability for end-users and site-managed staff. ",
            "Gained practical exposure to network security principles, cloud security, and threat prevention strategies through rigorous training modules."
        ]
    },
];

const education = [
    {
        degree: "Master of Science in Computer Science",
        school: "Michigan Technological University",
        period: "2024 - 2025",
        gpa: "3.90/4.0"
    },
    {
        degree: "Bachelor of Technology in Computer Science",
        school: "Vasireddy Venkatadri International Technological University",
        period: "2019 - 2023",
        gpa: "7.42/10.0"
    }
];

const certifications = [
    {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        date: "2023",
        link: "https://drive.google.com/file/d/17Bd0BK1ur1hvTzCOt4x8E4S5Zj0dLZBA/view"
    },
    {
        title: "Introduction to Generative AI",
        issuer: "Google",
        date: "2025",
        link: ""
    },
    {
        title: "Machine Learning with Python",
        issuer: "Great Learning",
        date: "2023",
        link: "https://www.mygreatlearning.com/certificate/ILMJMQFD?referrer_code=GL0BSGWO9XOWK"
    },
    {
        title: "Java Programming",
        issuer: "Great Learning",
        date: "2023",
        link: "https://www.mygreatlearning.com/certificate/QJDVWOOF?referrer_code=GL0BSGWO9XOWK"
    },
    {
        title: "Go Programming Language",
        issuer: "Great Learning",
        date: "2023",
        link: "https://www.mygreatlearning.com/certificate/XPTCBBDL?referrer_code=GL0BSGWO9XOWK"
    }
];

const publications = [
    {
        title: "Skin Disease Detection Using Machine Learning",
        journal: "IJFANS International Journal of Food and Nutritional Sciences",
        date: "2023",
        description: "The approach involves the development using Convolutional Neural Networks (CNN) and an ensemble model using VGG16, DenseNet and Inception. It detects 7 types of skin diseases.",
        link: "https://www.ijfans.org/issue-content/skin-disease-detection-using-machine-learning-2947"
    }
];

// --- Components ---

const About = () => {
    return (
        <section id="about" className="section-padding container-wide">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
                        About <br /><span className="text-[var(--accent)]">Me</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-8">
                        An Open-source Developer and has Master&apos;s in Computer Science from Michigan Tech. Specializing in Agentic Design, full-stack architecture, software engineering, and core systems optimization.
                    </p>
                    <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
                        Motivated by hands-on problem-solving, I apply these fundamentals to challenging real-world needs and am actively looking for new opportunities in the field.
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-mono text-[var(--accent)] uppercase tracking-wider mb-8">Education</h3>
                    <div className="space-y-12">
                        {education.map((edu, i) => (
                            <div key={i} className="border-l border-white/10 pl-8 relative group">
                                <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-[var(--accent)] group-hover:h-full transition-all duration-500" />
                                <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                                <p className="text-lg text-[var(--muted)] mb-2">{edu.school}</p>
                                <div className="flex justify-between text-[var(--muted)] font-mono text-sm">
                                    <span>{edu.period}</span>
                                    <span className="text-[var(--accent)]">CGPA: {edu.gpa}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => (
    <section id="contact" className="py-32 container-wide text-center border-t border-white/10">
        <h2 className="text-[10vw] font-bold tracking-tighter mb-10 text-[var(--accent)] opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default select-none">
            LET&apos;S TALK
        </h2>

        <div className="flex flex-col items-center gap-8">
            <p className="text-xl text-[var(--muted)] max-w-xl mx-auto">
                Interested in collaborating on a project or discussing a new opportunity? I&apos;m always open to chat.
            </p>
            <a
                href="mailto:udaysagarrm@gmail.com"
                className="btn-primary flex items-center gap-3 text-lg"
            >
                <FaEnvelope /> Say Hello
            </a>
        </div>

        <footer className="mt-32 text-[var(--muted)] font-mono text-sm">
            &copy; {new Date().getFullYear()} Uday Meka.
        </footer>
    </section>
);

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-[var(--background)] min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Experience experience={experience} />
            <ProjectList projects={projects} />
            <SkillsGrid />
            <Certifications certifications={certifications} />
            <Publications publications={publications} />
            <Contact />
        </main>
    );
}
