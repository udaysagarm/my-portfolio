
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
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
    title: "Hirely App",
    category: "Full Stack",
    description: "Comprehensive job search platform with scalable backend.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "Azure"],
    link: "hirely-app-dmejhygkeye5c3ag.canadacentral-01.azurewebsites.net",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop"
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

  {
    title: "Rental Management",
    category: "Enterprise",
    description: "Multi-tiered platform for property management.",
    tags: ["Java", "Spring Boot", "MySQL"],
    link: "#",
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
];

const experience = [
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
    role: "Software Engineering Intern",
    company: "Voit Services",
    period: "2022",
    desc: [
      "Collaborated with the engineering team to build and implement responsive User Interface (UI) components using React.js, HTML5, and CSS3, ensuring cross-browser compatibility and visual consistency.",
      "Streamlined the development lifecycle by utilizing Docker for containerization and Jenkins for Continuous Integration/Continuous Deployment (CI/CD) pipelines.",
      "Participated in Agile development cycles, tracking tasks and progress via Jira, and actively contributed to daily stand-ups and sprint planning.",
      "Assisted senior developers in translating design mockups into functional front-end code, focusing on usability standards and improving overall user experience.",
      "Identified and resolved front-end bugs and layout inconsistencies, gaining hands-on experience with debugging tools to ensure production code quality."
    ]
  },
  {
    role: "Cyber Security Intern",
    company: "AICTE",
    period: "2022",
    desc: [
      "Completed a internship program focused on foundational and advanced Cybersecurity concepts, supported by the Palo Alto Networks Cybersecurity.",
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
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-white/10 text-white"
    >
      <a href="#home" className="text-3xl font-bold font-['Syne'] tracking-tighter">Home</a>
      <div className="hidden md:flex gap-8">
        {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Publications', 'Contact'].map((item) => (
          <MagneticButton key={item} className="text-sm font-medium uppercase tracking-widest hover:text-cyan-400 transition-colors">
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </MagneticButton>
        ))}
      </div>
    </motion.nav>
  );
};

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="flex flex-col items-center gap-4"
  >
    <div className="relative h-16 w-[2px] bg-white/10 overflow-hidden rounded-full">
      <motion.div
        animate={{ y: [-64, 64] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-cyan-400"
      />
    </div>
    <span className="text-[10px] font-mono text-cyan-400 tracking-[0.3em] uppercase">Scroll</span>
  </motion.div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <motion.div style={{ y: y1 }} className="z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl font-bold text-cyan-400 tracking-[0.5em] mb-4"
        >
          Hello, I'm
        </motion.p>
        <h1 className="text-[12vw] leading-[0.8] font-bold text-white mix-blend-overlay opacity-50">
          <TextScramble>UDAY</TextScramble>
        </h1>
      </motion.div>
      <motion.div style={{ y: y2 }} className="z-20 text-center">
        <h1 className="text-[12vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          <TextScramble>MEKA</TextScramble>
        </h1>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <ScrollIndicator />
      </div>

      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end pointer-events-none">
        <div className="pointer-events-auto flex gap-4 text-2xl items-center ml-auto">
          <ResumeButton />
          <div className="w-px h-8 bg-white/20 mx-2"></div>
          <MagneticButton><a href="https://github.com/udaysagarm" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaGithub /></a></MagneticButton>
          <MagneticButton><a href="http://linkedin.com/udaymeka" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin /></a></MagneticButton>
        </div>
      </div>
    </section>
  );
};


const About = () => (
  <section id="about" className="py-32 container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-20 mb-24">
      <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 backdrop-blur-md group hover:border-cyan-400/30 transition-colors">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold mb-10">ABOUT<br />ME</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-400 leading-relaxed mb-8"
        >
          A Computer Science grad student specializing in full-stack architecture, software engineering, and core systems optimization. Motivated by hands-on problem-solving, I apply these fundamentals to challenging real-world needs and am actively looking for new opportunities in the field. </motion.p>
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
      &copy; {new Date().getFullYear()} Uday Meka. Made with React & Framer Motion.
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
