'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import {
  ScrollReveal,
  staggerContainerVariants,
  staggerItemVariants,
  TiltCard,
  AnimatedCounter,
} from './VisualEnhancements'

const projects = [
  {
    title: 'AWS Infrastructure Optimization',
    category: 'Cloud Architecture',
    description: 'Architected and optimized a multi-tier AWS infrastructure serving mission-critical applications with 99.9% uptime.',
    metrics: [
      { value: 25, label: 'Cost Reduction', suffix: '%' },
      { value: 99, label: 'Uptime', suffix: '.9%' },
      { value: 30, label: 'Services', suffix: '+' },
    ],
    technologies: ['AWS', 'Terraform', 'Python', 'CloudWatch'],
    image: '/Infrastructure Architecture.png',
  },
  {
    title: 'CI/CD Pipeline Modernization',
    category: 'DevOps Infrastructure',
    description: 'Designed and deployed automated CI/CD pipelines using GitHub Actions and Jenkins for multi-language applications.',
    metrics: [
      { value: 40, label: 'Faster Deploys', suffix: '%' },
      { value: 60, label: 'Manual Work Reduced', suffix: '%' },
      { value: 100, label: 'Automated', suffix: '%' },
    ],
    technologies: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes'],
    image: '/DevOps Workflow.png',
  },
  {
    title: 'Large Scale Server Migration',
    category: 'Infrastructure Migration',
    description: 'Led seamless migration of 50+ servers and databases from legacy infrastructure to AWS with zero downtime.',
    metrics: [
      { value: 50, label: 'Servers Migrated', suffix: '+' },
      { value: 0, label: 'Data Loss', suffix: '' },
      { value: 4, label: 'Total Downtime', suffix: 'hrs' },
    ],
    technologies: ['AWS', 'Database Migration', 'Networking', 'Ansible'],
    image: '/Kubernetes Artwork.png',
  },
]

export default function EnhancedProjects({ content = {} }: { content?: any }) {
  const data = {
    heading: 'Featured Projects',
    intro:
      'Case studies of infrastructure challenges solved, systems scaled, and deployments accelerated.',
    architectureTitle: 'Infrastructure Architecture',
    architectureImage: '/Infrastructure Architecture.png',
    architectureDescription:
      'Multi-tier cloud architecture with load balancing, auto-scaling, and containerized deployment. Optimized for performance, reliability, and cost efficiency.',
    ...content,
  }
  const items =
    Array.isArray(data.items) && data.items.length ? data.items : projects

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-highlight/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{data.heading}</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">{data.intro}</p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {items.map((project: any, index: number) => (
            <motion.div key={project.title} variants={staggerItemVariants}>
              <TiltCard className="glass rounded-xl border border-primary/20 overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-8 p-8 relative">
                  {/* Background animation */}
                  <motion.div
                    animate={{
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"
                  />

                  {/* Left Column - Content */}
                  <div className="relative z-10 flex flex-col justify-between">
                    <div>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold mb-3 hover:bg-primary/20 transition-colors"
                      >
                        {project.category}
                      </motion.span>

                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium hover:bg-accent/20 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Metrics & Image */}
                  <div className="relative z-10 flex flex-col justify-between">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.metrics.map((metric: any, i: number) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                        >
                          <div className="text-2xl font-bold gradient-text mb-1">
                            <AnimatedCounter
                              from={0}
                              to={metric.value}
                              duration={1.5}
                            />
                            {metric.suffix}
                          </div>
                          <div className="text-xs text-white/60">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Project Image */}
                    <motion.div
                      animate={{
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative h-48 rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-colors"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    </motion.div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Section */}
        <ScrollReveal delay={0.3}>
          <motion.div className="mt-16 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 rounded-2xl blur-3xl" />

            {/* Architecture showcase */}
            <div className="relative glass rounded-2xl p-8 border border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">{data.architectureTitle}</h3>

                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="rounded-lg overflow-hidden border border-primary/20"
                >
                  <img
                    src={data.architectureImage}
                    alt={data.architectureTitle}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>

                <p className="text-white/70 mt-6 leading-relaxed">
                  {data.architectureDescription}
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
