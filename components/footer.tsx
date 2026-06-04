"use client"

import { Mail, Heart } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./icons"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Dhaarani M. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and Next.js</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Dhaarani1116"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dhaarani-m-b08518319/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:dhaarani.m2024aiml@sece.ac.in"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
