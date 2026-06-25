'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Linkedin, Mail, Github } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-highlight/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center z-10"
        >
          {/* Label */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Cloud & DevOps{' '}
            <span className="gradient-text">Infrastructure Architect</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
          >
            5+ years engineering reliable, scalable cloud infrastructure. AWS specialist.
            Infrastructure-as-code advocate. Automation-first mindset. Building platforms
            that power businesses at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-glow"
            >
              Start a Project <ArrowRight size={20} />
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-4 rounded-lg border border-primary/30 hover:bg-primary/10 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300"
            >
              Download Resume <Download size={20} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center mb-20"
          >
            <a
              href="https://linkedin.com/in/varun-t-m-5237b793"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-primary/20 text-white transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:varun.t.manoharan@gmail.com"
              className="p-3 rounded-lg bg-white/5 hover:bg-primary/20 text-white transition-all duration-300"
              title="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-primary/20 text-white transition-all duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
