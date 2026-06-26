'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Cpu, Rocket } from 'lucide-react'
import {
  ScrollReveal,
  staggerContainerVariants,
  staggerItemVariants,
  AnimatedCounter,
  TiltCard,
  BlurOverlay,
} from './VisualEnhancements'

export default function EnhancedAbout() {
  const values = [
    {
      icon: Cpu,
      title: 'Automation First',
      description: 'Infrastructure scales automatically. Manual work is a bug.',
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
      {/* Section background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Engineering Philosophy
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Building reliable infrastructure isn't just about deploying applications.
              It's about creating systems that scale, secure platforms that protect, and
              automation that frees teams to focus on innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <ScrollReveal blur={15}>
            <div>
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

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { metric: '5+', label: 'Years' },
                  { metric: '50+', label: 'Servers' },
                  { metric: '99.9%', label: 'Uptime' },
                ].map((item, i) => (
                  <TiltCard
                    key={i}
                    className="glass rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-primary mb-1">
                      <AnimatedCounter
                        from={0}
                        to={parseInt(item.metric)}
                        duration={2}
                      />
                      {item.metric.includes('%') ? '%' : '+'}
                    </div>
                    <div className="text-sm text-white/60">{item.label}</div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Visual */}
          <ScrollReveal blur={15} delay={0.2}>
            <div className="relative h-full">
              {/* AWS Cloud Graphic with effects */}
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-3xl" />

                {/* Image container with glassmorphism */}
                <div className="relative glass rounded-2xl p-4 border border-primary/20 overflow-hidden">
                  <div className="relative z-10">
                    <img
                      src="/AWS Cloud Graphic.png"
                      alt="AWS Cloud Architecture"
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-lg" />

                  {/* Blur effect */}
                  <BlurOverlay intensity={0.2} direction="top" />
                </div>
              </motion.div>

              {/* Floating accent shapes */}
              <motion.div
                animate={{
                  rotate: 360,
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-10 -right-10 w-40 h-40 border border-accent/30 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 border border-primary/30 rounded-lg"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={staggerItemVariants}
            >
              <TiltCard className="glass rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-default">
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors"
                  >
                    <value.icon className="text-primary" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-white/60 text-sm">{value.description}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Metrics */}
        <ScrollReveal delay={0.3}>
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
            className="glass rounded-xl p-8 border border-primary/20 mt-12 relative overflow-hidden"
          >
            {/* Animated gradient background */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 opacity-5 bg-gradient-to-r from-primary via-accent to-highlight"
              style={{
                backgroundSize: '200% 200%',
              }}
            />

            <h3 className="text-2xl font-bold mb-8 relative z-10">Impact by Numbers</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 relative z-10">
              {[
                { metric: '25%', label: 'AWS Cost Reduction' },
                { metric: '40%', label: 'Faster Deployments' },
                { metric: '30%', label: 'Performance Improvement' },
                { metric: '60%', label: 'Automation Coverage' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(37, 99, 235, 0)',
                        '0 0 20px rgba(37, 99, 235, 0.5)',
                        '0 0 10px rgba(37, 99, 235, 0)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-3xl font-bold gradient-text mb-2"
                  >
                    {item.metric}
                  </motion.div>
                  <div className="text-sm text-white/60">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
