"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Download, ChevronDown } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Open to Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-primary">Dhaarani M</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-4"
            >
              AI & ML Engineer{" "}
              <span className="text-muted-foreground font-normal">and</span>{" "}
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0"
            >
              Student Mentor | Hackathon Explorer | Events Coordinator | Adaptive & Curious Learner | Innovation-Focused
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-muted-foreground/80 text-sm sm:text-base mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I am a hard and smart working, flexible person. I am passionate about learning new technologies 
              and continuously improving my coding techniques and skills to stay updated with the latest industry trends.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-xl hover:bg-secondary/80 transition-all border border-border"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Dhaarani1116"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl text-muted-foreground hover:text-primary hover:bg-card/80 transition-all border border-border"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhaarani-m-b08518319/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card rounded-xl text-muted-foreground hover:text-primary hover:bg-card/80 transition-all border border-border"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:dhaarani.m2024aiml@sece.ac.in"
                className="p-3 bg-card rounded-xl text-muted-foreground hover:text-primary hover:bg-card/80 transition-all border border-border"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919843524825"
                className="p-3 bg-card rounded-xl text-muted-foreground hover:text-primary hover:bg-card/80 transition-all border border-border"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse scale-125 delay-500" />
              
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                <Image
                  src="/profile-photo.png"
                  alt="Dhaarani M"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute -right-4 top-10 px-4 py-2 bg-card rounded-xl border border-border shadow-lg"
              >
                <span className="text-sm font-semibold text-foreground">14+ Projects</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -left-4 bottom-20 px-4 py-2 bg-card rounded-xl border border-border shadow-lg"
              >
                <span className="text-sm font-semibold text-foreground">3 Internships</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute right-0 bottom-5 px-4 py-2 bg-primary rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold text-primary-foreground">CGPA: 8.2</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-medium">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
