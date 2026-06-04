"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    score: "85%",
    year: "2025",
    verified: true,
    highlight: true,
  },
  {
    title: "Certified in Python (Diploma)",
    issuer: "CSC Center",
    year: "2023",
    verified: true,
  },
  {
    title: "Certified in C and C++",
    issuer: "CSC Center",
    year: "2023",
    verified: true,
  },
  {
    title: "Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    year: "2025",
    verified: true,
  },
  {
    title: "Advanced Prompt Engineering Techniques",
    issuer: "LinkedIn Learning",
    year: "2025",
    verified: true,
  },
  {
    title: "Aptitude and Logical Thinking",
    issuer: "Aptwings",
    year: "2025",
    verified: true,
  },
]

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-card/30">
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
              Verified Credentials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2"
            >
              Certifications
            </motion.h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${
                  cert.highlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${cert.highlight ? "bg-primary/20" : "bg-secondary"}`}>
                    <Award className={`w-5 h-5 ${cert.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-xs text-green-500">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{cert.title}</h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span className={cert.highlight ? "text-primary font-medium" : ""}>{cert.issuer}</span>
                  {cert.score && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {cert.score}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
