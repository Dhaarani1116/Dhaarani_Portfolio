"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Wrench, Brain, Layout, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "LangChain", "YOLO", "YOLOv8", "YOLOv11", "Pandas", "NumPy", "Keras", "MediaPipe", "SciSpacy", "EasyOCR", "FAISS", "Cohere", "CTGAN", "GMM", "XGBoost", "LSTM", "CNN"],
  },
  {
    title: "Web Frameworks",
    icon: Layout,
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Django", "Flask", "Streamlit", "Vue.js", "Nuxt.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Sequelize ORM"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Docker", "Kubernetes", "MLflow", "Git", "GitHub", "VS Code", "Google Colab", "Jupyter", "Figma", "Power BI", "REST API", "JWT"],
  },
  {
    title: "Cloud & APIs",
    icon: Cloud,
    skills: ["Azure OpenAI", "Gemini API", "Stable Diffusion API", "Pollinations AI", "Speech-to-Text API", "Leaflet Maps", "Recharts", "Flask-SocketIO", "WebSocket"],
  },
]

const coreSkills = [
  "Data Structures & Algorithms",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Full Stack Development",
  "MLOps",
  "REST API Design",
  "IoT Integration",
  "Edge AI",
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium text-sm tracking-wider uppercase"
            >
              Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2"
            >
              Skills & Technologies
            </motion.h2>
          </div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + categoryIndex * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
