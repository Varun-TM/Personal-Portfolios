'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Linkedin, Mail, Github } from 'lucide-react'
import { scrollToContact } from '@/app/utils/scroll'
import {
  ParallaxBackground,
  FloatingElement,
  MeshGradient,
  AnimatedGradientText,
  MagneticButton,
  GridBackground,
  DotPattern,
} from './VisualEnhancements'

export default function EnhancedHero({ content = {} }: { content?: any }) {
  const c = {
    badge: '✨ Senior Cloud & DevOps Engineer',
    headingLine1: 'Building Infrastructure',
    headingAccent: 'at Scale',
    subheading:
      '5+ years architecting reliable cloud infrastructure, automating deployments, and delivering production-grade solutions that scale to millions of requests. AWS specialist. Kubernetes expert. Infrastructure-as-code advocate.',
    primaryCtaLabel: 'Start a Project',
    resumeLabel: 'Download Resume',
    resumeUrl: '#contact',
    linkedinUrl: 'https://linkedin.com/in/varun-t-m-5237b793',
    email: 'varun.t.manoharan@gmail.com',
    githubUrl: 'https://github.com',
    ...content,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {/* Layered Background Effects */}
      <div className="absolute inset-0 -z-20">
        {/* Animated mesh gradient */}
        <MeshGradient />

        {/* Grid pattern overlay */}
        <GridBackground size={50} opacity={0.03} />

        {/* Dot pattern */}
        <DotPattern density={25} opacity={0.05} />
      </div>

      {/* Hero illustration with parallax */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <ParallaxBackground
          image="/Hero Illustration.png"
          depth={0.3}
          className="scale-125"
        />
      </div>

      {/* Premium blur overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-transparent to-background" />

      {/* Floating background objects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <motion.div
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-40 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Animated badge */}
          <motion.div variants={itemVariants}>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                  '0 0 40px rgba(37, 99, 235, 0.6)',
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-primary text-sm font-medium mb-6 backdrop-blur-sm"
            >
              {c.badge}
            </motion.div>
          </motion.div>

          {/* Main heading with animated gradient */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              {c.headingLine1}
              <br />
              <AnimatedGradientText
                text={c.headingAccent}
                colors={['#2563EB', '#06B6D4', '#7C3AED']}
              />
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {c.subheading}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToContact()}
              className="px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-glow cursor-pointer"
            >
              {c.primaryCtaLabel} <ArrowRight size={20} />
            </button>
            <motion.a
              href={c.resumeUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border border-primary/30 hover:bg-primary/10 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
            >
              {c.resumeLabel} <Download size={20} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center mb-20"
          >
            {[
              { icon: Linkedin, href: c.linkedinUrl, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${c.email}`, label: 'Email' },
              { icon: Github, href: c.githubUrl, label: 'GitHub' },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-white/5 hover:bg-primary/20 text-white transition-all duration-300 border border-white/10 hover:border-primary/30"
                title={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/50 text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
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

      {/* Floating accent elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingElement duration={6} distance={20} delay={0}>
          <div className="absolute top-1/4 right-10 w-20 h-20 border border-primary/20 rounded-lg" />
        </FloatingElement>
        <FloatingElement duration={8} distance={30} delay={1}>
          <div className="absolute bottom-1/3 left-10 w-32 h-32 border border-accent/20 rounded-full" />
        </FloatingElement>
      </div>
    </section>
  )
}
