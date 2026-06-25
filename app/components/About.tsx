'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Cpu, Rocket } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Cpu,
      title: 'Automation First',
      description: 'Infrastructure should scale automatically. Manual work is a bug.',
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Defense mechanisms are foundational, not afterthoughts.',
    },
    {
      icon: Rocket,
      title: 'Velocity & Reliability',
      description: 'Deploy with confidence. Fast deployments and high uptime go hand in hand.',
    },
    {
      icon: Zap,
      title: 'Cost Optimization',
      description: 'Right-sized infrastructure that performs at scale without waste.',
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Engineering Philosophy
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Building reliable infrastructure isn't just about deploying applications.
            It's about creating systems that scale, secure platforms that protect, and
            automation that frees teams to focus on innovation.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Building Cloud Platforms at Scale</h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              Over 5 years, I've engineered infrastructure solutions for companies managing
              millions of requests daily. From migrating 50+ servers with zero downtime to
              architecting multi-tier systems, I focus on building platforms that businesses
              can rely on.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              My approach: automate everything, monitor obsessively, and optimize
              relentlessly. Infrastructure code gets the same rigor as application code.
              Deployments should be boring. Incidents should be rare.
            </p>
            <p className="text-white/70 mb-6 leading-relaxed">
              Specializing in AWS ecosystem, containerization, CI/CD pipelines, and
              infrastructure-as-code. I believe that great DevOps is invisible—it removes
              friction, reduces failure, and enables teams to ship faster.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-white/60">Servers Migrated</div>
              </div>
              <div className="glass rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-highlight">99.9%</div>
                <div className="text-sm text-white/60">Uptime Maintained</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-white/60 text-sm">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-xl p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-8">Impact by Numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { metric: '25%', label: 'AWS Cost Reduction' },
              { metric: '40%', label: 'Faster Deployments' },
              { metric: '30%', label: 'Performance Improvement' },
              { metric: '60%', label: 'Automation Coverage' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{item.metric}</div>
                <div className="text-sm text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
