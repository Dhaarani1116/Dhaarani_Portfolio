"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"

const education = [
  {
    degree: "B.E (CSE - AIML)",
    institution: "Sri Eshwar College of Engineering",
    score: "CGPA: 8.2",
    year: "2024 - 2028",
    current: true,
  },
  {
    degree: "HSC (12th)",
    institution: "Little Flower Matric Higher Secondary School",
    score: "83.3%",
    year: "2023 - 2024",
  },
  {
    degree: "SSLC (10th)",
    institution: "Little Flower Matric Higher Secondary School",
    score: "94.6%",
    year: "2021 - 2022",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 relative">
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
              Get to Know Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2"
            >
              About Me
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Journey / Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Motivated and detail-oriented Computer Science student specializing in{" "}
                  <span className="text-foreground font-medium">Artificial Intelligence and Machine Learning</span>.
                  Passionate about building AI-driven applications that solve real-world problems.
                </p>
                <p>
                  Experienced in developing intelligent systems using{" "}
                  <span className="text-foreground font-medium">machine learning, computer vision, and full-stack technologies</span>.
                  Strong problem-solving skills demonstrated through competitive programming, hackathons, and innovative projects.
                </p>
                <p>
                  Interested in <span className="text-foreground font-medium">AI systems, data science, and scalable backend development</span>.
                  Currently pursuing my degree at Sri Eshwar College of Engineering while actively contributing to open-source projects and participating in hackathons.
                </p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground pt-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </motion.div>

            {/* Right - Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`p-5 rounded-xl border transition-all hover:border-primary/30 ${
                      edu.current
                        ? "bg-primary/5 border-primary/20"
                        : "bg-card border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          {edu.current && (
                            <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-primary font-medium">{edu.score}</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
