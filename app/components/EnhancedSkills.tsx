'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Code, GitBranch, Shield, BarChart3 } from 'lucide-react'
import {
  ScrollReveal,
  staggerContainerVariants,
  staggerItemVariants,
  TiltCard,
} from './VisualEnhancements'

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & AWS',
    skills: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront', 'ALB/NLB', 'VPC', 'IAM'],
    image: '/AWS Cloud Graphic.png',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Code,
    title: 'Infrastructure as Code',
    skills: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'ECS', 'CloudFormation'],
    image: '/Automation Artwork.png',
    color: 'from-highlight/20 to-highlight/5',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'Nagios', 'CloudWatch', 'ELK Stack', 'Datadog'],
    image: '/Monitoring Dashboard.png',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'MS SQL', 'Aurora', 'Mongo Atlas', 'RDS'],
    image: '/Linux Engineering.png',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & DevOps',
    skills: ['GitHub Actions', 'Jenkins', 'BitBucket', 'Docker Registry', 'Kubernetes'],
    image: '/Kubernetes Artwork.png',
    color: 'from-highlight/20 to-highlight/5',
  },
  {
    icon: Shield,
    title: 'Security & Networking',
    skills: ['AWS WAF', 'VPC Security', 'SSL/TLS', 'DNS', 'VPN', 'Firewalls'],
    image: '/Networking.png',
    color: 'from-accent/20 to-accent/5',
  },
]

export default function EnhancedSkills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Stack</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive expertise across cloud platforms, infrastructure automation,
              and modern DevOps practices.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill Categories Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={staggerItemVariants}>
              <TiltCard
                className={`glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group h-full relative overflow-hidden`}
              >
                {/* Background gradient */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${category.color}`}
                />

                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors"
                    >
                      <category.icon className="text-primary" size={24} />
                    </motion.div>
                    <h3 className="font-bold text-lg">{category.title}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Skill category image preview */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                    className="h-32 rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors"
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Sections */}
        <div className="space-y-6">
          {[
            { title: 'Operating Systems', items: ['Ubuntu', 'CentOS', 'AlmaLinux', 'CloudLinux', 'Windows', 'RHEL'] },
            { title: 'Web Servers', items: ['Nginx', 'Apache', 'Litespeed'] },
            { title: 'Scripting Languages', items: ['Python', 'Bash', 'Shell', 'Go', 'JavaScript'] },
          ].map((section, index) => (
            <ScrollReveal key={section.title} delay={0.1 + index * 0.1}>
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(37, 99, 235, 0)',
                    '0 0 20px rgba(37, 99, 235, 0.2)',
                    '0 0 0px rgba(37, 99, 235, 0)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="glass rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"
                />

                <h3 className="font-bold text-lg mb-4 relative z-10">{section.title}</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {section.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm font-medium text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Expertise Summary */}
        <ScrollReveal delay={0.4}>
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="mt-12 glass rounded-xl p-8 border border-primary/20 relative overflow-hidden"
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            {/* Animated background */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-highlight/10"
            />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Expertise Summary</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Deep expertise in designing and managing cloud infrastructure at scale. Proven ability to architect
                solutions that prioritize reliability, security, and cost efficiency. Strong focus on automation,
                infrastructure-as-code, and operational excellence.
              </p>
              <p className="text-white/70 leading-relaxed">
                Proficient in containerization, orchestration, and modern DevOps practices. Experienced in implementing
                comprehensive monitoring, logging, and incident response strategies. Dedicated to continuous learning and
                staying current with emerging cloud technologies and best practices.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
