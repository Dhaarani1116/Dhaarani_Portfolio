"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Accessibility,
  Activity,
  BookOpen,
  Brain,
  CalendarCheck,
  ChevronDown,
  ChevronUp,
  CloudRain,
  Cpu,
  HeartPulse,
  ImageIcon,
  Leaf,
  Sparkles,
  TrafficCone,
  Users,
} from "lucide-react"
import { GithubIcon } from "./icons"

const projects = [
  {
    title: "MaatruCare",
    year: "2026",
    description: "AI-powered maternal healthcare companion for rural and low-resource environments with multilingual voice assistance, intelligent chatbot support, pregnancy risk analysis, personalized nutrition recommendations, SOS emergency alerts, nearby hospital/pharmacy mapping, reminders, and offline-first accessibility.",
    techStack: ["React.js", "Node.js", "FastAPI", "Python", "Tailwind CSS", "Framer Motion", "Leaflet Maps", "Speech-to-Text API"],
    category: "AI/Healthcare",
  },
  {
    title: "AI Medical Report Analyzer & Personal Health Dashboard",
    year: "2026",
    description: "AI-powered healthcare web platform that analyzes medical reports using OCR and biomedical NLP to generate patient-friendly summaries, detect abnormal values, and visualize health trends. Implemented multi-profile family health dashboards, comparison charts, multilingual support, chatbot assistance, and prescription analysis.",
    techStack: ["React.js", "FastAPI", "EasyOCR", "SciSpacy", "MongoDB", "Recharts", "OpenCV", "LLM Integration"],
    category: "AI/Healthcare",
  },
  {
    title: "Smart Gesture-Controlled Wheelchair",
    year: "2025",
    description: "AI-based wheelchair prototype that replaces traditional joystick control with hand gesture recognition using a CNN model. Integrated ESP32, ultrasonic sensors, LEDs, and a buzzer for wireless navigation, obstacle detection, and real-time safety alerts.",
    techStack: ["Python", "TensorFlow", "MediaPipe", "CNN", "OpenCV", "ESP32", "L298N", "Ultrasonic Sensors"],
    category: "AI/IoT",
  },
  {
    title: "Dynamic Traffic Management System",
    year: "2025",
    description: "AI-powered smart traffic monitoring system using YOLOv11 and Raspberry Pi for real-time vehicle detection, traffic density estimation, and adaptive signal control. Implemented edge AI-based processing, emergency vehicle prioritization, and a live monitoring dashboard.",
    techStack: ["Python", "YOLOv11", "CSPDarknet", "PANet", "OpenCV", "Flask", "ONNX Runtime", "Raspberry Pi"],
    category: "AI/IoT",
  },
  {
    title: "StudyMate AI - Collaborative Smart Learning Platform",
    year: "2026",
    description: "AI-powered collaborative learning platform that enables students to interact with PDFs, lecture notes, and research materials through conversational AI and semantic search. Implemented real-time collaborative study rooms with shared annotations, synchronized PDF highlighting, live chat, voice-based explanations, and quiz generation using RAG architecture.",
    techStack: ["Python", "Streamlit", "Flask-SocketIO", "LangChain", "FAISS", "Cohere Embeddings", "Azure OpenAI GPT-4.1", "Mistral OCR"],
    category: "AI/Education",
  },
  {
    title: "NeuroPulse - Synthetic Data Generation Platform",
    year: "2026",
    description: "AI-driven synthetic data generation platform that creates realistic and privacy-safe datasets using machine learning for secure AI training, analytics, testing, and research applications. Implemented automatic preprocessing, statistical pattern learning using GMM, similarity analysis, and visualization dashboards.",
    techStack: ["Python", "Scikit-learn", "Gaussian Mixture Model", "Pandas", "NumPy", "Streamlit", "Matplotlib", "Seaborn"],
    category: "AI/ML",
  },
  {
    title: "AI Image Generator Web Application",
    year: "2026",
    description: "Full-stack AI-powered image generation web application that converts textual prompts into high-quality AI-generated images using Stable Diffusion APIs. Implemented secure JWT authentication, prompt analytics, image history management, and recommendation features.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stable Diffusion API", "Pollinations AI"],
    category: "AI/Full Stack",
  },
  {
    title: "EcoTrack AI - Carbon-Aware MLOps Platform",
    year: "2026",
    description: "Carbon-aware self-healing MLOps platform that monitors model drift and intelligently schedules retraining based on real-time grid carbon intensity to reduce AI energy consumption and CO2 emissions. Implemented automated drift detection, eco-gated retraining workflows, and champion-challenger model evaluation.",
    techStack: ["Python", "FastAPI", "MLflow", "Docker", "Streamlit", "CodeCarbon", "EvidentlyAI", "XGBoost"],
    category: "MLOps",
  },
  {
    title: "CaptoDebot - Peer-to-Peer GPU Sharing Platform",
    year: "2026",
    description: "Distributed GPU-sharing platform that enables students and developers to run Machine Learning models using shared GPU resources over a local network. Implemented GPU availability detection, job scheduling, ML script execution, real-time log monitoring, and trained model downloading.",
    techStack: ["Python", "Django", "React.js", "PyTorch", "REST API", "GPU Computing"],
    category: "Infrastructure",
  },
  {
    title: "Reunify - AI Disaster Response Platform",
    year: "2025",
    description: "AI-powered disaster response platform to help reunite families separated during floods and emergency situations. Built a centralized system for reporting, searching, and tracking missing persons across multiple relief camps with AI-based photo matching and real-time volunteer coordination.",
    techStack: ["FastAPI", "Vue.js (Nuxt)", "MongoDB", "CNN", "GenAI"],
    category: "AI/Social Good",
  },
  {
    title: "MonsoonShield AI - Smart Community Health Monitoring",
    year: "2026",
    description: "AI-powered public health monitoring platform for early prediction of water-borne disease outbreaks during monsoon seasons. Built a hyperlocal ward-level system integrating environmental, weather, and healthcare datasets with GAN-based synthetic data generation.",
    techStack: ["Python", "FastAPI", "XGBoost", "LSTM", "CTGAN", "PostgreSQL", "Plotly", "Leaflet.js"],
    category: "AI/Healthcare",
  },
  {
    title: "Event Management System (EMS)",
    year: "2025",
    description: "Multi-role platform (Student/Coordinator/Admin) with a Compound Event structure to digitize college event workflows. Implemented a novel Real-Time Scheduling Agent to eliminate venue and time conflicts, and integrated the Gemini AI API for automated content and analytical insights.",
    techStack: ["React", "JavaScript", "Gemini API", "Tailwind CSS", "Real-Time Validation"],
    category: "Full Stack",
  },
  {
    title: "Smart Leave Management System",
    year: "2026",
    description: "Full-stack role-based Leave Management System for educational institutions to automate leave requests, approvals, and internal communication. Implemented secure JWT authentication, approval workflows, notice board management, and department-wise analytics.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "JWT", "Framer Motion"],
    category: "Full Stack",
  },
  {
    title: "Breast Cancer Classification System",
    year: "2025",
    description: "Machine learning-based web application to classify breast tumors as Benign or Malignant using Logistic Regression. Built during a real-time 2-hour technical challenge with supervised binary classification and an interactive Streamlit interface.",
    techStack: ["Python", "Scikit-learn", "Logistic Regression", "Pandas", "NumPy", "Streamlit"],
    category: "AI/ML",
  },
]

const categories = ["All", "AI/Healthcare", "AI/ML", "AI/IoT", "AI/Education", "AI/Full Stack", "MLOps", "Full Stack", "Infrastructure", "AI/Social Good"]
const githubProfileUrl = "https://github.com/Dhaarani1116"

const projectIcons = {
  "AI/Healthcare": HeartPulse,
  "AI/ML": Brain,
  "AI/IoT": Cpu,
  "AI/Education": BookOpen,
  "AI/Full Stack": ImageIcon,
  MLOps: Leaf,
  "Full Stack": CalendarCheck,
  Infrastructure: Activity,
  "AI/Social Good": Users,
}

function getProjectIcon(project: { title: string; category: string }) {
  const featuredProjectIcons = {
    "Smart Gesture-Controlled Wheelchair": Accessibility,
    "Dynamic Traffic Management System": TrafficCone,
    "MonsoonShield AI - Smart Community Health Monitoring": CloudRain,
  }

  return (
    featuredProjectIcons[project.title as keyof typeof featuredProjectIcons] ??
    projectIcons[project.category as keyof typeof projectIcons] ??
    Sparkles
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium text-sm tracking-wider uppercase"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              A collection of 14+ projects spanning AI/ML, Full Stack Development, IoT, and MLOps
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setShowAll(false)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, index) => {
              const ProjectIcon = getProjectIcon(project)

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <ProjectIcon className="h-6 w-6" />
                    </div>
                    <a
                      href={githubProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-background text-muted-foreground border border-border hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm text-muted-foreground font-medium">{project.year}</span>
                    <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-lg font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Show More/Less Button */}
          {filteredProjects.length > 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex justify-center mt-10"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-all border border-border"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All {filteredProjects.length} Projects <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
