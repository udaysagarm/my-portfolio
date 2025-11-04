import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Link } from 'lucide-react'; // Added 'Link' icon
import { Analytics } from "@vercel/analytics/react"

// Project data
const projects = [
  {
    title: "Hirely App",
    description: "A comprehensive job search platform designed to help users find and manage job applications efficiently. The system features a scalable backend API to handle complex user and data interactions.",
    tags: [],
    repoUrl: "https://github.com/udaysagarm/HirelyApp"
  },
  {
    title: "Escape Room VR",
    description: "A real-time, high-performance virtual reality game engineered with complex, modular logic for interactive puzzle solving. It includes a custom backend system to track player state and ensure seamless gameplay.",
    tags: [],
    repoUrl: "https://drive.google.com/drive/folders/1TiXbQXiv-f8AEWJVOPjbCK9cqtKE21WN?usp=sharing"
  },
  {
    title: "AI-Generated Text Detection System",
    description: "An innovative AI solution that uses a custom neural network to accurately classify and flag inauthentic or machine-generated text. This system demonstrates expertise in building advanced data-driven automation pipelines.",
    tags: [],

  },
  {
    title: "Rental House Management System",
    description: "System	A full-scale, multi-tiered platform designed for project leaders to manage rental properties, tenants, and contracts. The core focus was on robust system architecture and secure data handling to ensure operational stability.",
    tags: [],
  },
  {
    title: "Skin Disease Detection",
    description: "A machine learning system utilizing an ensemble model approach to accurately identify and classify various common skin diseases from medical images. The purpose is to provide quick, preliminary diagnostic support.",
    tags: [],
  },
  {
    title: "Bitcoin Price Prediction",
    description: "A data science project focused on applying time-series analysis and machine learning models to forecast future market trends. The system processes historical data to generate reliable price predictions for market strategy.",
    tags: [],
  },
];

// Social links data
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/udaysagarm"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "http://linkedin.com/in/uday-sagar-meka-4267341b2"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:udaysagarrm@gmail.com"
  }
];

// Work Experience Data
const workExperience = [
  {
    role: "Graduate Teaching Assistant",
    company: "Michigan Technological University",
    duration: "Jan 2025 - April 2025",
    description: [
      "Actively guided student teams through the full Software Development Lifecycle (SDLC), focusing on requirement analysis, clear documentation, and efficient debugging, effectively acting as a technical lead for project delivery.",
      "Led weekly code review sessions for over 100 students (across both courses), enforcing industry standards for Software Quality Assurance, test coverage, and code",
      "Provided targeted technical and architectural guidance for Team Software Project designs, mentoring teams on applying Object-Oriented Design (OOD) and scalable patterns for their full-stack applications."
    ]
  },
  {
    role: "Intern",
    company: "Virtusa Consulting Services",
    duration: "May 2023 - Aug 2023",
    description: [
      "Contributed hands-on coding to the Camera Service Center Appointment System, collaborating with cross-functional teams to integrate new business features from design through successful deployment.",
      "Developed and modified core backend services utilizing REST API concepts, with a critical focus on ensuring secure user authentication and data handling for enterprise applications.",
      "Actively involved in the full SDLC, diagnosing and resolving system vulnerabilities and technical issues to improve the stability and performance of the existing application in production."
    ]
  }
];

// --- Certifications Data ---
const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    url: "https://drive.google.com/file/d/17Bd0BK1ur1hvTzCOt4x8E4S5Zj0dLZBA/view?usp=drive_link" // Add your verification link here
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    url: "" // Add your verification link here
  },
  {
    title: "Machine Learning with Python",
    issuer: "Great Learning Academy",
    url: "https://www.mygreatlearning.com/certificate/ILMJMQFD?referrer_code=GL0BSGWO9XOWK" // Add your verification link here
  },
  {
    title: "Java Programming",
    issuer: "Great Learning Academy",
    url: "https://www.mygreatlearning.com/certificate/QJDVWOOF?referrer_code=GL0BSGWO9XOWK" // Add your verification link here
  },
  {
    title: "Go Programming Language",
    issuer: "Great Learning Academy",
    url: "https://www.mygreatlearning.com/certificate/XPTCBBDL?referrer_code=GL0BSGWO9XOWK" // Add your verification link here
  },
];


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      
      {/* --- Sticky Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-900/90 backdrop-blur-md shadow-lg shadow-gray-900/50">
        <div className="container mx-auto max-w-4xl px-8 py-5 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-cyan-400">Uday's Home </a>
          
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="text-cyan-400 border border-cyan-400 py-2 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                         hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105
                         active:scale-95"
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="text-cyan-400 border border-cyan-400 py-2 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                         hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105
                         active:scale-95"
            >
              About
            </a>
            {/* --- Certifications Button --- */}
            <a 
              href="#certifications" 
              className="text-cyan-400 border border-cyan-400 py-2 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                         hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105
                         active:scale-95"
            >
              Certifications
            </a>
            <a 
              href="#contact" 
              className="text-cyan-400 border border-cyan-400 py-2 px-5 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out
                         hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105
                         active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <div className="container mx-auto max-w-4xl p-8">
        
        {/* --- Header / Hero Section --- */}
        <header id="home" className="mb-24 pt-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-cyan-400">Uday Meka</span>.
              </h1>
              <h2 className="text-2xl text-gray-300 mb-8">
                I am a Graduate Student at{" "}
                <a 
                  href="https://www.mtu.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#ffc800] hover:text-[#ffd966] transition-colors"
                >
                  Michigan Tech
                </a>.
              </h2>
              <p className="text-lg text-gray-400 mb-8">
              An engineer who specializes in the design and robust execution of complex systems. My knowledge covers the full spectrum of development, from architecting secure fullstack platforms, software engineering, game development and optimizing systems infrastructure to creating features across the full development lifecycle. I use the core Computer Science fundamentals to solve challenging problems and ensure high-quality software delivery.
              </p>
              
              {/* --- NEW: Call to Action Text --- */}
              <p className="text-lg text-gray-300 mb-4">
                Feel free to email me by clicking the mail button below or click on resume to take a look at my resume.
              </p>

              {/* --- Call to Action Area (Animated Letter links to email) --- */}
              <div className="flex items-center">
                {/* --- Animated Letter (now links to email) --- */}
                <a 
                  href="mailto:youremail@example.com"
                  title="Get In Touch"
                  className="letter-image-wrapper ml-24" /* Added ml-24 (96px) to move it right */
                >
                  <div className="letter-image">
                    <div className="animated-mail">
                      <div className="back-fold"></div>
                      <div className="letter">
                        <div className="letter-border"></div>
                        <div className="letter-title"></div>
                        <div className="letter-context"></div>
                        <div className="letter-stamp">
                          <div className="letter-stamp-inner"></div>
                        </div>
                      </div>
                      <div className="top-fold"></div>
                      <div className="body"></div>
                      <div className="left-fold"></div>
                    </div>
                    <div className="shadow"></div>
                  </div>
                </a>

                {/* --- NEW: Sparkle Resume Button --- */}
                <a 
                  href="https://docs.google.com/document/d/1k9ZbDRV16oycnWPEAh-ZG2n6bU5Ka3bkJ97vqI6oGt0/edit?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sparkle-resume-button ml-16" /* Added ml-16 for spacing */
                  title="View My Resume"
                >
                  {/* --- Sparkles --- */}
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* --- End sparkles --- */}
                  <span>Resume</span>
                  <span aria-hidden="true">Resume</span>
                </a>
              </div>

            </div>
            {/* Optional: You can add an image or avatar here */}
          </div>
        </header>

        <main>
          {/* Projects Section */}
          <section id="projects" className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">About Me</h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
              <p className="text-lg text-gray-300 mb-4">
              My journey began with a deep curiosity for system architecture and hands-on problem-solving, which led me to dive into building full-stack platforms, applying robust software engineering methods, optimizing complex systems, and even developing games. Now as a graduate engineer, I am eager to apply these fundamentals to solve business challenges through high-quality code and robust system design.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                When I'm not coding, I enjoy watching movies, playing video games and cooking food.
              </p>
              
              {/* --- Skills Subsection --- */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Skills</h3>
              <div className="flex flex-wrap mb-8"> {/* Added mb-8 for spacing */}
                {["Java", "Python", "C#", "C++", "JavaScript (ES6+)", "Go"].map(skill => (
                  <span key={skill} className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap mb-8"> {/* Added mb-8 for spacing */}
                {["ReactJs", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"].map(skill => (
                  <span key={skill} className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap mb-8"> {/* Added mb-8 for spacing */}
                {["Node.js (ExpressJS concepts)", "Flask", "SpringBoot", "RESTful APIs"].map(skill => (
                  <span key={skill} className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap mb-8"> {/* Added mb-8 for spacing */}
                {["PostgreSQL", "SQL", "MongoDB", "FireBase", "Vercel"].map(skill => (
                  <span key={skill} className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap mb-8"> {/* Added mb-8 for spacing */}
                {["Artificial Intelligence", "RAG", "Generative AI (Gen AI)", "Machine Learning", "Prompt Engineering"].map(skill => (
                  <span key={skill} className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap mb-8"> {/* Added mb-8 for spacing */}
                {["Object-Oriented Programming (OOPs)", "Data Structures", "Algorithms", "Systems Programming", "Git"].map(skill => (
                  <span key={skill} className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium mr-3 mb-3">
                    {skill}
                  </span>
                ))}
              </div>
              

              {/* --- Work Experience Subsection --- */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Work Experience</h3>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <WorkExperienceCard key={index} job={job} />
                ))}
              </div>

            </div>
          </section>

          {/* --- Certifications Section --- */}
          <section id="certifications" className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">Licenses & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} cert={cert} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">Let's Connect</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              I'm currently looking for new opportunities and would love to chat.
              Feel free to reach out via email or connect with me on social media.
            </p>
            <div className="flex justify-center space-x-8">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <link.icon size={32} />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 mt-24 border-t border-gray-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Uday Meka. All rights reserved.</p>
        </footer>
      </div>
      <Analytics/>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-cyan-300 py-1 px-3 rounded-full text-xs font-medium mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-300 py-2 px-4 rounded-lg font-medium hover:text-cyan-400 transition-colors"
          >
            Source Code <Github size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Work Experience Card Component
function WorkExperienceCard({ job }) {
  return (
    <div className="border-l-2 border-cyan-400 pl-4">
      <h4 className="text-xl font-bold text-gray-100">{job.role}</h4>
      <p className="text-lg font-medium text-cyan-300 mb-1">{job.company}</p>
      <p className="text-sm text-gray-400 mb-3">{job.duration}</p>
      <ul className="list-disc list-outside ml-5 space-y-1 text-gray-300">
        {job.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

// --- Certification Card Component ---
function CertificationCard({ cert }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col justify-between transform transition-transform hover:scale-105">
      <div>
        <h3 className="text-xl font-bold mb-2 text-cyan-400">{cert.title}</h3>
        <p className="text-gray-300 mb-4">{cert.issuer}</p>
      </div>
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-gray-900 bg-cyan-500 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
      >
        Verify Credential <Link size={16} className="ml-2" />
      </a>
    </div>
  );
}

export default App;

