'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'AWS Infrastructure Optimization',
    category: 'Cloud Architecture',
    description: 'Architected and optimized a multi-tier AWS infrastructure serving mission-critical applications with 99.9% uptime.',
    problem: 'Infrastructure costs were spiraling due to inefficient resource utilization and suboptimal instance sizing.',
    solution: 'Implemented intelligent EC2 right-sizing, reserved instance strategy, and auto-scaling policies using Terraform.',
    impact: {
      metric1: '25%',
      label1: 'Cost Reduction',
      metric2: '99.9%',
      label2: 'Uptime',
      metric3: '30+',
      label3: 'Services',
    },
    technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch', 'ALB/NLB'],
    highlights: [
      'EC2 instance right-sizing and reservation optimization',
      'Auto Scaling group tuning for predictable load patterns',
      'CloudFront CDN optimization for 30% latency reduction',
      'Cost monitoring dashboard with automated alerts',
    ],
  },
  {
    title: 'CI/CD Pipeline Modernization',
    category: 'DevOps Infrastructure',
    description: 'Designed and deployed automated CI/CD pipelines using GitHub Actions and Jenkins for multi-language applications.',
    problem: 'Manual deployment processes were error-prone, slow, and created bottlenecks in the release cycle.',
    solution: 'Built comprehensive CI/CD pipelines with automated testing, containerization, and zero-downtime deployments.',
    impact: {
      metric1: '40%',
      label1: 'Faster Deploys',
      metric2: '60%',
      label2: 'Manual Work Reduced',
      metric3: '100%',
      label3: 'Automated',
    },
    technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Bash', 'Python'],
    highlights: [
      'Multi-stage Docker build optimization',
      'Automated integration and security testing',
      'Blue-green deployment strategy',
      'Rollback automation with health checks',
    ],
  },
  {
    title: 'Large Scale Server Migration',
    category: 'Infrastructure Migration',
    description: 'Led seamless migration of 50+ servers and databases from legacy infrastructure to AWS with zero downtime.',
    problem: 'Legacy on-premises infrastructure was reaching end-of-life with increasing maintenance costs and availability issues.',
    solution: 'Executed phased migration strategy with data synchronization, DNS cutover, and comprehensive rollback plans.',
    impact: {
      metric1: '50+',
      label1: 'Servers Migrated',
      metric2: '0',
      label2: 'Data Loss',
      metric3: '4hrs',
      label3: 'Total Downtime',
    },
    technologies: ['AWS', 'Database Migration', 'Networking', 'Ansible', 'Terraform'],
    highlights: [
      'Database replication with zero data loss',
      'DNS failover strategy with health checks',
      'Rollback procedures for each phase',
      'Comprehensive monitoring and alerting',
    ],
  },
  {
    title: 'Infrastructure Automation Framework',
    category: 'Infrastructure as Code',
    description: 'Built comprehensive automation framework for provisioning, configuring, and managing cloud infrastructure.',
    problem: 'Manual server provisioning and configuration was time-consuming and inconsistent across environments.',
    solution: 'Developed Terraform modules and Ansible playbooks for repeatable, version-controlled infrastructure.',
    impact: {
      metric1: '50%',
      label1: 'Setup Time Reduction',
      metric2: '100%',
      label2: 'Environment Consistency',
      metric3: '200+',
      label3: 'Resources Managed',
    },
    technologies: ['Terraform', 'Ansible', 'Python', 'Bash', 'AWS'],
    highlights: [
      'Modular Terraform architecture for reusability',
      'Ansible playbooks for server hardening',
      'Automated backup and recovery procedures',
      'Infrastructure documentation and runbooks',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Case studies of infrastructure challenges solved, systems scaled,
            and deployments accelerated.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="glass rounded-xl border border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Left Column */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>

                  {/* Problem & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-bold text-white/90 mb-2 text-sm">Problem</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white/90 mb-2 text-sm">Solution</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold gradient-text mb-1">{project.impact.metric1}</div>
                      <div className="text-xs text-white/60">{project.impact.label1}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-accent mb-1">{project.impact.metric2}</div>
                      <div className="text-xs text-white/60">{project.impact.label2}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-2xl font-bold text-highlight mb-1">{project.impact.metric3}</div>
                      <div className="text-xs text-white/60">{project.impact.label3}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-bold text-white/90 mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-sm text-white/70">
                          <span className="text-accent font-bold flex-shrink-0">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
