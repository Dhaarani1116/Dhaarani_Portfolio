"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, ExternalLink, MapPin } from "lucide-react"

const internships = [
  {
    title: "AI Engineer Intern",
    company: "Synapslogic",
    location: "Remote",
    period: "2026",
    project: "MediVoice",
    description: [
      "Worked on MediVoice, an AI-powered healthcare application focused on converting medical speech into structured reports.",
      "Applied skills in OpenAI Whisper, FastAPI, and MongoDB to build accurate voice-to-text and automated PDF generation systems.",
      "Strengthened expertise in AI-driven automation, speech recognition, and NLP applications.",
    ],
    techStack: ["OpenAI Whisper", "FastAPI", "MongoDB", "NLP", "PDF Generation"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "MLOps Intern",
    company: "Aptitude Guru",
    location: "Remote",
    period: "2026",
    project: "EcoTrack",
    description: [
      "Built an autonomous MLOps platform that optimizes the AI lifecycle for environmental sustainability and operational efficiency.",
      "Implemented self-healing pipelines with automated data drift detection using Evidently AI to trigger model retraining without manual intervention.",
      "Engineered carbon-aware gate logic to schedule high-compute jobs during renewable energy windows, reducing CO₂ impact by up to 35%.",
      "Integrated CodeCarbon and WUE metrics to monitor real-time energy, water, and carbon tax costs.",
      "Leveraged Docker and MLflow for robust model versioning, automated deployments, and seamless rollback capabilities.",
    ],
    techStack: ["Python", "MLflow", "Docker", "FastAPI", "CodeCarbon", "Evidently AI", "MongoDB", "Streamlit"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Research Intern",
    company: "National Institute of Electronics and Information Technology (NIELIT)",
    location: "Calicut",
    period: "2026",
    project: "CaptoDebot",
    description: [
      "Designed a distributed GPU-sharing platform that enables students and developers to run Machine Learning models using shared GPU resources over a local network.",
      "Implemented GPU availability detection, job scheduling, ML script execution, real-time log monitoring, and trained model downloading through an interactive web interface.",
      "Integrated GPU locking, busy/available status handling, and secure enable/disable controls for collaborative GPU utilization.",
    ],
    techStack: ["Python", "Django", "React.js", "PyTorch", "REST API", "GPU Computing", "Local Network Communication"],
    color: "from-purple-500/20 to-pink-500/20",
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 bg-card/30">
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
              Professional Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2"
            >
              Internship Experience
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30" />

                  {/* Content */}
                  <div className={`flex-1 ml-16 lg:ml-0 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div
                      className={`p-6 lg:p-8 rounded-2xl bg-gradient-to-br ${internship.color} border border-border backdrop-blur-sm hover:border-primary/30 transition-all`}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{internship.title}</h3>
                          <p className="text-primary font-medium">{internship.company}</p>
                        </div>
                      </div>

                      <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {internship.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </span>
                      </div>

                      <div className={`mb-4 ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          Project: {internship.project}
                        </span>
                      </div>

                      <ul className={`space-y-2 mb-6 ${index % 2 === 0 ? "lg:text-left" : ""}`}>
                        {internship.description.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                        {internship.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
