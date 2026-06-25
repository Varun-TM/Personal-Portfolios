'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Package, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

const AchievementCounter = ({ end, label, icon: Icon, delay = 0 }: any) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= end) {
            clearInterval(interval)
            return end
          }
          return prev + Math.ceil(end / 50)
        })
      }, 20)
    }, delay)
    return () => clearTimeout(timer)
  }, [end, delay])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="text-primary" size={32} />
      </div>
      <div className="text-4xl font-bold gradient-text mb-2">{count}+</div>
      <p className="text-white/60 text-sm">{label}</p>
    </motion.div>
  )
}

const achievements = [
  {
    icon: TrendingUp,
    metric: 25,
    label: 'AWS Cost Reduction',
    description: 'Implemented cost optimization strategies reducing infrastructure spending',
  },
  {
    icon: Package,
    metric: 40,
    label: 'Faster Deployments',
    description: 'Accelerated deployment velocity through CI/CD pipeline automation',
  },
  {
    icon: Users,
    metric: 50,
    label: 'Servers Migrated',
    description: 'Successfully migrated 50+ servers with zero data loss',
  },
  {
    icon: Award,
    metric: 5,
    label: 'Years Experience',
    description: 'Progressive experience in cloud infrastructure and DevOps',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Key Achievements</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Measurable impact across infrastructure optimization, automation,
            and system reliability.
          </p>
        </motion.div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCounter
              key={achievement.label}
              end={achievement.metric}
              label={achievement.label}
              icon={achievement.icon}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* Detailed Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-xl p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-8">Major Accomplishments</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Infrastructure Cost Optimization',
                items: [
                  'Reduced AWS infrastructure costs by 25% through intelligent EC2 right-sizing',
                  'Optimized CloudFront delivery paths for 30% latency reduction',
                  'Implemented reserved instances and auto-scaling cost controls',
                ],
              },
              {
                title: 'Deployment & Performance',
                items: [
                  'Increased deployment speed by 40% via automated CI/CD pipelines',
                  'Implemented GitHub Actions and Jenkins for multi-language applications',
                  'Achieved 99.9% uptime for mission-critical systems',
                ],
              },
              {
                title: 'Infrastructure & Scale',
                items: [
                  'Led seamless migration of 50+ servers and databases with zero data loss',
                  'Designed multi-tier application architecture (LB, app, DB)',
                  'Managed 200+ cloud resources across multiple environments',
                ],
              },
              {
                title: 'Automation & Efficiency',
                items: [
                  'Reduced manual operational overhead by 60% through automation',
                  'Developed Python and Bash scripts for infrastructure provisioning',
                  'Implemented infrastructure-as-code with 50% setup time reduction',
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h4 className="font-bold text-lg mb-4 text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                      <span className="text-accent flex-shrink-0 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 glass rounded-xl p-8 border border-primary/20"
        >
          <h3 className="text-xl font-bold mb-4">Security & Compliance Initiatives</h3>
          <p className="text-white/70 mb-4">
            Enhanced cloud security and compliance by enforcing AWS WAF rules, implementing
            VPNs, and securing VPC networking policies. Implemented Linux security hardening,
            access controls, and firewall rules for production environments.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['AWS WAF', 'VPC Security', 'SSL/TLS', 'Access Control', 'Firewall Rules', 'VPN Tunnels', 'IAM Policies', 'Hardening'].map((item) => (
              <div key={item} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-center text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
