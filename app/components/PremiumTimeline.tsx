'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { ScrollReveal, TiltCard, staggerContainerVariants } from './VisualEnhancements'
import { BlendedAsset } from './AssetRenderer'

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
    technologies: ['Linux', 'Jenkins', 'Bitbucket', 'Docker', 'Prometheus', 'Grafana', 'Ansible', 'Bash'],
    icon: '🔧',
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
      'Deployed and managed Dockerized applications and Kubernetes orchestration',
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Python', 'Ansible'],
    icon: '☁️',
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
      'Defined and translated system requirements into robust infrastructure solutions',
    ],
    technologies: ['Linux', 'Windows', 'Proxmox', 'AWS', 'Bash', 'Python', 'Virtualization'],
    icon: '🐧',
    color: 'from-highlight/20 to-highlight/5',
  },
  {
    role: 'L1 Support Engineer',
    company: 'SineAlpha Informatics Pvt Ltd',
    location: 'Remote',
    period: 'Jan 2020 – Sep 2021',
    description: 'Supported virtualization platforms and firewalls, ensuring smooth operation of client infrastructure.',
    achievements: [
      'Virtualization platform management (Proxmox, Plesk, cPanel, AA Panel)',
      'Firewall and security infrastructure support (FortiGate, Sophos)',
      'Remote server administration for Windows and Linux servers',
      'Mail relay applications and server upgrades with data security maintained',
      'Assisted in server migrations and environment provisioning',
    ],
    technologies: ['Proxmox', 'Plesk', 'cPanel', 'FortiGate', 'Sophos', 'Linux', 'Windows'],
    icon: '🛡️',
    color: 'from-warning/20 to-warning/5',
  },
  {
    role: 'IT FMS Engineer - Team Lead',
    company: 'TOPSERV INFOTECH Pvt Ltd',
    location: 'Remote',
    period: 'Apr 2018 – Sep 2019',
    description: 'Led Level 2 support for enterprise clients, minimizing downtime for business-critical applications.',
    achievements: [
      'Provided technical leadership and guidance on best practices for system stability',
      'Installed, configured, and securely maintained servers',
      'Contributed to broader infrastructure modernization initiatives',
      'Minimized downtime through proactive systems management',
      'Led team in supporting enterprise-level infrastructure',
    ],
    technologies: ['Enterprise Systems', 'Server Administration', 'Team Leadership', 'Infrastructure Management'],
    icon: '👥',
    color: 'from-success/20 to-success/5',
  },
]

export default function PremiumTimeline({ content = {} }: { content?: any }) {
  const data = {
    heading: 'Career Journey',
    intro:
      '5+ years of progressive experience building reliable infrastructure, leading teams, and delivering production-grade solutions at scale.',
    philosophyTitle: 'Engineering Philosophy',
    philosophyText:
      "Throughout my journey from IT support to senior DevOps engineer, I've maintained a consistent focus on automation, reliability, and scalability. Every role has contributed to my expertise in building production-grade infrastructure that powers mission-critical systems. From leading teams to architecting cloud platforms, I bring a comprehensive understanding of the entire infrastructure lifecycle.",
    ...content,
  }
  const items =
    Array.isArray(data.items) && data.items.length ? data.items : experiences

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{data.heading}</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">{data.intro}</p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1"
            style={{
              background: 'linear-gradient(to bottom, #2563EB 0%, #06B6D4 25%, #7C3AED 50%, #F59E0B 75%, #10B981 100%)',
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)',
            }}
          />

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 lg:space-y-20"
          >
            {items.map((exp: any, index: number) => {
              const isLeft = index % 2 === 0
              const containerClass = isLeft
                ? 'lg:flex lg:flex-row-reverse'
                : 'lg:flex'

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className={`${containerClass} items-start gap-8 relative`}
                >
                  {/* Timeline dot with glow */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-20"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(37, 99, 235, 0)',
                          '0 0 30px rgba(37, 99, 235, 0.8)',
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

                  {/* Content card */}
                  <div className="flex-1 lg:w-1/2">
                    <TiltCard
                      className={`glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group h-full`}
                    >
                      {/* Animated background gradient */}
                      <motion.div
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color}`}
                      />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex gap-4 mb-4">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            className="text-4xl"
                          >
                            {exp.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                            <p className="text-primary font-semibold text-sm">{exp.company}</p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="space-y-2 mb-6 text-white/70 text-sm">
                          <div className="flex gap-2 items-center">
                            <Calendar size={16} className="text-accent" />
                            {exp.period}
                          </div>
                          <div className="flex gap-2 items-center">
                            <MapPin size={16} className="text-accent" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 mb-6 leading-relaxed text-sm">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <p className="text-xs font-semibold text-white/70 mb-3 uppercase tracking-wider">
                            Key Achievements
                          </p>
                          <ul className="space-y-2">
                            {exp.achievements.slice(0, 4).map((achievement: string) => (
                              <li
                                key={achievement}
                                className="text-xs text-white/60 flex gap-2 leading-relaxed"
                              >
                                <motion.span
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                  }}
                                  className="text-accent mt-0.5 flex-shrink-0"
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
                          {exp.technologies.slice(0, 5).map((tech: string) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-2 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-medium hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {exp.technologies.length > 5 && (
                            <span className="px-2 py-1 text-xs text-white/50">
                              +{exp.technologies.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Empty space for non-desktop */}
                  <div className="hidden lg:block flex-1 lg:w-1/2" />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Journey summary */}
          <ScrollReveal delay={0.5}>
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(37, 99, 235, 0.2)',
                  '0 0 40px rgba(37, 99, 235, 0.4)',
                  '0 0 20px rgba(37, 99, 235, 0.2)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mt-20 glass rounded-xl p-8 border border-primary/20 relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-highlight/5"
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  {data.philosophyTitle}
                </h3>
                <p className="text-white/70 leading-relaxed">{data.philosophyText}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
