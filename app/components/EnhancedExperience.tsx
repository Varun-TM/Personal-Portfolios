'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import {
  ScrollReveal,
  FloatingElement,
  TiltCard,
  staggerContainerVariants,
  staggerItemVariants,
} from './VisualEnhancements'

const experiences = [
  {
    role: 'System Engineer L3',
    company: 'Virtual Tech Gurus',
    location: 'Coimbatore, India',
    period: 'Dec 2025 – Present',
    description: 'Managing end-to-end DevOps and Linux operations for product-based applications across dev, QA, staging, and production environments.',
    achievements: [
      'L2/L3 troubleshooting and root cause analysis for Linux, application, CI/CD, and container issues',
      'Implemented comprehensive monitoring using Prometheus, Grafana, and Nagios',
      'Linux security hardening and access control implementation',
      'Multi-tier application architecture support (LB, app, DB)',
    ],
    technologies: ['Linux', 'Jenkins', 'Bitbucket', 'Docker', 'Prometheus', 'Grafana'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    role: 'DevOps Engineer',
    company: 'Nelux Technologies Pvt Ltd',
    location: 'Remote',
    period: 'Aug 2022 – Aug 2025',
    description: 'Engineered and scaled AWS infrastructure powering production-critical systems with 99.9% uptime.',
    achievements: [
      '25% reduction in AWS infrastructure costs through intelligent optimization',
      '40% faster deployments via automated CI/CD pipelines',
      '30% improvement in application performance through CloudFront optimization',
      '50+ server migration with zero data loss',
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
    color: 'from-accent/20 to-accent/5',
  },
  {
    role: 'Linux System Administrator',
    company: 'Nelux Technologies Pvt Ltd',
    location: 'Remote',
    period: 'Sep 2021 – Aug 2022',
    description: 'Led L3 infrastructure support and team troubleshooting across Linux and Windows platforms.',
    achievements: [
      '98% customer satisfaction through rapid incident resolution',
      'Proxmox virtualization cluster administration and optimization',
      'Automated backup and disaster recovery solutions',
      'System performance tuning and resource optimization',
    ],
    technologies: ['Linux', 'Windows', 'Proxmox', 'AWS', 'Bash', 'Python'],
    color: 'from-highlight/20 to-highlight/5',
  },
]

export default function EnhancedExperience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Career Journey</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              5+ years of progressive experience in cloud infrastructure, DevOps,
              and system administration.
            </p>
          </div>
        </ScrollReveal>

        {/* DevOps Workflow Visual */}
        <ScrollReveal blur={15} delay={0.1}>
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="mb-16 relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 rounded-2xl blur-3xl" />

            {/* Image container */}
            <div className="relative glass rounded-2xl p-6 border border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <img
                src="/DevOps Workflow.png"
                alt="DevOps Workflow"
                className="w-full h-auto rounded-lg relative z-10"
                loading="lazy"
              />
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline connector */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 origin-top"
            style={{
              background: 'linear-gradient(to bottom, #2563EB, #06B6D4, #7C3AED)',
            }}
          />

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={staggerItemVariants}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="hidden lg:flex justify-center absolute left-1/2 -translate-x-1/2 z-20"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(37, 99, 235, 0)',
                        '0 0 20px rgba(37, 99, 235, 0.6)',
                        '0 0 0px rgba(37, 99, 235, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-6 h-6 rounded-full bg-primary border-4 border-background"
                  />
                </motion.div>

                {/* Content */}
                <TiltCard
                  className={`glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group`}
                >
                  {/* Background gradient */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color}`}
                  />

                  <div className="relative z-10">
                    <div className="flex gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors"
                      >
                        <Briefcase className="text-primary" size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 text-white/70">
                      <div className="flex gap-2 items-center text-sm">
                        <Calendar size={16} className="text-accent" />
                        {exp.period}
                      </div>
                      <div className="flex gap-2 items-center text-sm">
                        <MapPin size={16} className="text-accent" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-white/70 mb-3">Key Achievements:</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="text-sm text-white/60 flex gap-2">
                            <motion.span
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                              className="text-accent mt-1 flex-shrink-0"
                            >
                              →
                            </motion.span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-medium hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
