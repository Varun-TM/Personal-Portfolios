'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

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
    technologies: ['Linux', 'Jenkins', 'Bitbucket', 'Docker', 'Prometheus', 'Grafana', 'Ansible', 'Bash', 'Python'],
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
      'Kubernetes orchestration and Docker containerization',
    ],
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Python', 'Ansible', 'Prometheus'],
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
  },
  {
    role: 'L1 Support Engineer',
    company: 'SineAlpha Informatics Pvt Ltd',
    location: 'Remote',
    period: 'Jan 2020 – Sep 2021',
    description: 'Provided technical support for virtualization platforms and enterprise infrastructure.',
    achievements: [
      'Virtualization platform management (Proxmox, Plesk, cPanel, AA Panel)',
      'Firewall and security infrastructure support (FortiGate, Sophos)',
      'Remote server administration and configuration',
      'Server migrations and environment provisioning',
    ],
    technologies: ['Proxmox', 'Plesk', 'cPanel', 'FortiGate', 'Linux', 'Windows'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Career Journey</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            5+ years of progressive experience in cloud infrastructure, DevOps,
            and system administration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-highlight" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div
                  className={`glass rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 ${
                    index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
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
                          <span className="text-accent mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-glow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
