"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, ExternalLink } from "lucide-react"

const hackathonsAndAchievements = [
  {
    title: "Smart India Hackathon (SIH) - Finalist",
    year: "2025",
    achievement: "FINALIST",
    achievementColor: "bg-emerald-500 text-emerald-950",
    borderColor: "border-l-emerald-500",
    description: "Shortlisted for the Smart India Hackathon (SIH) grand finals with an innovative Autonomous Railway Inspection Rover for Indian Railways. Developed a cost-effective real-time railway monitoring system integrating LIDAR, ultrasonic, eddy current sensors, and wireless alert mechanisms for automated track inspection and fault detection.",
    type: "hackathon",
  },
  {
    title: "Adya AI Hack 'n' Thon",
    year: "2025",
    achievement: "TOP 30",
    achievementColor: "bg-blue-500 text-blue-950",
    borderColor: "border-l-blue-500",
    description: "From sleepless nights to the grand finale! Built and deployed \"Intelligent Event Management System\", earning our spot among the top 30 out of 75 teams.",
    type: "hackathon",
  },
  {
    title: "Hackspora 2025",
    year: "2025",
    achievement: "PARTICIPANT",
    achievementColor: "bg-indigo-500 text-indigo-950",
    borderColor: "border-l-indigo-500",
    description: "Participated in Hackspora 2025 at Karpagam Academy of Higher Education. Our team built an Air Quality Prediction system using Random Forest ML models, integrating live environmental datasets with an interactive interface for street-level AQI visualization.",
    type: "hackathon",
  },
  {
    title: "SHECodesAI Hackathon 2026",
    year: "2026",
    achievement: "4TH PLACE",
    achievementColor: "bg-pink-500 text-pink-950",
    borderColor: "border-l-pink-500",
    description: "Participated at Kongunadu Arts and Science College, Coimbatore. Developed an AI-based solution and competed with 36+ teams. Shortlisted among the top 6 teams for the final round and secured 4th place.",
    type: "hackathon",
  },
  {
    title: "Queenathon",
    year: "2026",
    achievement: "PARTICIPANT",
    achievementColor: "bg-rose-500 text-rose-950",
    borderColor: "border-l-rose-500",
    description: "Participated in Queenathon hosted at Dhaanish Ahmed Institute of Technology. An incredible journey of innovation and collaboration.",
    type: "hackathon",
  },
  {
    title: "BARNSTROMZ 2K25",
    year: "2025",
    achievement: "2 PRIZES",
    achievementColor: "bg-amber-500 text-amber-950",
    borderColor: "border-l-amber-500",
    description: "Secured two prizes at Hindusthan Institute of Technology's inter-college technical event: 2nd Place in Project Expo and Winner in Poster Making competition.",
    type: "hackathon",
  },
  {
    title: "Guidewire DEVTrails University Hackathon",
    year: "2026",
    achievement: "PARTICIPANT",
    achievementColor: "bg-slate-500 text-slate-950",
    borderColor: "border-l-slate-500",
    description: "Participated in the Guidewire DEVTrails University Hackathon, gaining valuable experience in enterprise software development challenges.",
    type: "hackathon",
  },
  {
    title: "FIESTAA'26 - MonsoonShield AI",
    year: "2026",
    achievement: "PRESENTER",
    achievementColor: "bg-cyan-500 text-cyan-950",
    borderColor: "border-l-cyan-500",
    description: "Presented MonsoonShield AI at FIESTAA'26 hosted by KPR Institute of Engineering and Technology. Built an AI-powered disease outbreak prediction system with real-time risk mapping and healthcare alert analytics.",
    type: "hackathon",
  },
  {
    title: "1st Place - Designathon",
    year: "2025",
    achievement: "WINNER",
    achievementColor: "bg-yellow-500 text-yellow-950",
    borderColor: "border-l-yellow-500",
    description: "Secured 1st place at Sri Eshwar College of Engineering in the design competition showcasing innovative UI/UX solutions.",
    type: "achievement",
  },
  {
    title: "1st Place - Paper Presentation",
    year: "2025",
    achievement: "WINNER",
    achievementColor: "bg-yellow-500 text-yellow-950",
    borderColor: "border-l-yellow-500",
    description: "Won 1st place in paper presentation at Study World College of Engineering & Hindustan College.",
    type: "achievement",
  },
  {
    title: "2nd Place - Project Expo",
    year: "2025",
    achievement: "RUNNER UP",
    achievementColor: "bg-purple-500 text-purple-950",
    borderColor: "border-l-purple-500",
    description: "Secured 2nd place at Hindustan College of Engineering in the project exhibition demonstrating innovative AI solutions.",
    type: "achievement",
  },
]

const codingProfiles = [
  {
    platform: "LeetCode",
    stats: "100+ Problems Solved",
    rating: "Rank: 1,387,453",
    link: "https://leetcode.com/u/Dhaarani06/",
    color: "from-orange-500/20 to-yellow-500/20",
    iconColor: "text-orange-500",
  },
  {
    platform: "CodeChef",
    stats: "130+ Problems Solved",
    link: "https://www.codechef.com/users/dhaarani11106",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
  },
  {
    platform: "SkillRack",
    stats: "840+ Problems Solved",
    link: "http://www.skillrack.com/profile/514615/8cb62c9a4a3db1f3ae7031b2cc401463a3229b78",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    platform: "HackerRank",
    stats: "C Bronze Badge",
    link: "https://www.hackerrank.com/profile/dhaarani0106",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500",
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Hackathons and achievements share one visual system so the section feels balanced. */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-cyan-500 to-blue-500 bg-clip-text text-transparent"
              >
                Hackathon Journey & Achievements
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground mt-4 max-w-2xl mx-auto"
              >
                Collaborating under pressure to solve real-world problems and earning recognition along the way.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {hackathonsAndAchievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className={`p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-all border-l-4 ${item.borderColor}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-primary text-sm font-semibold">{item.year}</span>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${item.achievementColor}`}>
                      {item.achievement}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Competitive Programming
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.platform}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className={`p-5 rounded-xl bg-gradient-to-br ${profile.color} border border-border hover:border-primary/30 transition-all hover:scale-105 group`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`font-bold ${profile.iconColor}`}>{profile.platform}</h4>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-foreground font-medium">{profile.stats}</p>
                  {profile.rating && (
                    <p className="text-xs text-muted-foreground mt-1">{profile.rating}</p>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
