
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import SkillsGrid from './components/SkillsGrid';
import ProjectList from './components/ProjectList';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import ResumeButton from './components/ResumeButton';
import Background from './components/Background';
import MagneticButton from './components/MagneticButton';
import ScrollProgress from './components/ScrollProgress';
import TextScramble from './components/TextScramble';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

// --- Data ---
const projects = [
  {
    title: "Project Space Black: Ghost",
    category: "CLI AI Agent",
    description: "Comprehensive job search platform with scalable backend.",
    tags: ["Python", "TypeScript", "Textual", "LangGraph", "LangChain",],
    link: "https://spaceblack.info",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Hirely App",
    category: "Full Stack",
    description: "Comprehensive job search platform with scalable backend.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Azure"],
    link: "https://hirely.azurewebsites.net",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Rental Connect",
    category: "Enterprise",
    description: "Multi-tiered platform for property management.",
    tags: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/udaysagarm/RentalConnect",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  {
    title: "Escape Room VR",
    category: "Game Dev",
    description: "High-performance VR game with complex puzzle logic.",
    tags: ["Unity", "C#", "VR"],
    link: "https://udaysagar.itch.io/escape-room",
    img: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "PDF ChatBot",
    category: "AI / Python",
    description: "RAG based chatbot for PDFs.",
    tags: ["Python", "LangChain", "React"],
    link: "https://github.com/udaysagarm/PDF-Bot",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  {
    title: "AI Text Detection",
    category: "AI / ML",
    description: "Neural network to classify machine-generated text.",
    tags: ["Python", "TensorFlow", "NLP"],
    link: "#",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
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

const Navbar = () => {
  const [hidden, setHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10 text-white transition-transform duration-300 ease-in-out ${hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <a href="#home" className="text-3xl font-bold font-['Syne'] tracking-tighter">Home</a>
      <div className="hidden md:flex gap-8">
        {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Publications', 'Contact'].map((item) => (
          <MagneticButton key={item} className="text-sm font-medium uppercase tracking-widest hover:text-cyan-400 transition-colors">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </MagneticButton>
        ))}
      </div>
    </nav>
  );
};

const ScrollIndicator = () => (
  <div
    className="flex flex-col items-center gap-4 fade-in"
    style={{ animationDelay: '1s' }}
  >
    <div className="relative h-16 w-[2px] bg-white/10 overflow-hidden rounded-full">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-cyan-400 animate-[scrollIndicator_1.5s_linear_infinite]"
      />
    </div>
    <span className="text-[10px] font-mono text-cyan-400 tracking-[0.3em] uppercase">Scroll</span>
    <style>{`
      @keyframes scrollIndicator {
        0% { transform: translateY(-64px); }
        100% { transform: translateY(64px); }
      }
    `}</style>
  </div>
);

const Hero = () => {
  const [offset, setOffset] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div style={{ transform: `translateY(${offset * 0.4}px)` }} className="z-10 text-center transition-transform duration-75 ease-out will-change-transform">
        <p
          className="text-xl md:text-2xl font-bold text-cyan-400 tracking-[0.5em] mb-4 fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Hello, I'm
        </p>
        <h1 className="text-[12vw] leading-[0.8] font-bold text-white mix-blend-overlay opacity-50">
          <TextScramble>UDAY</TextScramble>
        </h1>
      </div>
      <div style={{ transform: `translateY(${offset * -0.3}px)` }} className="z-20 text-center transition-transform duration-75 ease-out will-change-transform">
        <h1 className="text-[12vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          <TextScramble>MEKA</TextScramble>
        </h1>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <ScrollIndicator />
      </div>

      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none">
        <div className="pointer-events-auto flex gap-4 text-2xl items-center ml-auto">
          <ResumeButton />
          <div className="w-px h-8 bg-white/20 mx-2"></div>
          <MagneticButton><a href="https://github.com/udaysagarm" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub /></a></MagneticButton>
          <MagneticButton><a href="http://linkedin.com/in/udaymeka" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a></MagneticButton>
        </div>
      </div>
    </section>
  );
};


const About = () => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 container mx-auto px-6" ref={ref}>
      <div className="grid md:grid-cols-2 gap-20 mb-24">
        <div className={`p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md group hover:border-cyan-400/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div>
            <h2 className="text-6xl font-bold mb-10">ABOUT<br />ME</h2>
          </div>
          <p className={`text-xl text-gray-400 leading-relaxed mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            An Open-source Developer and has Master's in Computer Science from Michigan Tech. Specializing in Agentic AI, full-stack architecture, software engineering, and core systems optimization. Motivated by hands-on problem-solving, I apply these fundamentals to challenging real-world needs and am actively looking for new opportunities in the field. </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-cyan-400">Education</h3>
          <div className="space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-white/10 pl-8 relative group">
                <div className="absolute top-0 left-[-5px] w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
                <p className="text-lg text-gray-400 mb-2">{edu.school}</p>
                <div className="flex justify-between text-gray-500 font-mono text-sm">
                  <span>{edu.period}</span>
                  <span className="text-cyan-400">CGPA: {edu.gpa}</span>
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
  <section id="contact" className="h-[80vh] flex flex-col justify-center items-center text-center bg-neutral-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
    <h2 className="text-[10vw] font-bold text-white z-10 mix-blend-difference">
      <TextScramble>LET'S TALK</TextScramble>
    </h2>
    <div className="z-10 mt-10">
      <MagneticButton className="bg-cyan-400 text-black px-10 py-5 rounded-full text-xl font-bold hover:bg-white transition-colors">
        <a href="mailto:udaysagarrm@gmail.com" className="flex items-center gap-3">
          <FaEnvelope /> Say Hello
        </a>
      </MagneticButton>
    </div>

    <footer className="absolute bottom-10 text-gray-500 text-sm z-10">
      &copy; {new Date().getFullYear()} Uday Meka. Made with React.
    </footer>
  </section>
);

function App() {
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
    <div className="bg-[#050505] min-h-screen text-white selection:bg-cyan-400 selection:text-black">
      <ScrollProgress />
      <SpeedInsights />
      <Analytics />
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience experience={experience} />
        <ProjectList projects={projects} />
        <section id="skills" className="py-32 container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-12 text-center"><TextScramble>TECHNICAL SKILLS</TextScramble></h3>
          <SkillsGrid />
        </section>
        <Certifications certifications={certifications} />
        <Publications publications={publications} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
