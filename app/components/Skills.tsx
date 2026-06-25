'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Code, GitBranch, Shield, BarChart3 } from 'lucide-react'

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & AWS',
    skills: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFront', 'ALB/NLB', 'VPC', 'IAM', 'CloudWatch', 'Auto Scaling'],
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'MS SQL', 'Aurora', 'Mongo Atlas', 'RDS'],
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: Code,
    title: 'Infrastructure as Code',
    skills: ['Terraform', 'Ansible', 'CloudFormation', 'Docker', 'Kubernetes', 'ECS'],
    color: 'from-highlight/20 to-highlight/5',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & DevOps',
    skills: ['GitHub Actions', 'Jenkins', 'BitBucket', 'Docker Registry', 'Kubernetes', 'Helm'],
    color: 'from-success/20 to-success/5',
  },
  {
    icon: Shield,
    title: 'Security & Monitoring',
    skills: ['AWS WAF', 'VPC Security', 'Prometheus', 'Grafana', 'Nagios', 'ELK Stack', 'SSL/TLS'],
    color: 'from-warning/20 to-warning/5',
  },
  {
    icon: BarChart3,
    title: 'Scripting & Automation',
    skills: ['Python', 'Bash', 'Shell', 'Linux', 'Windows', 'Log Analysis'],
    color: 'from-error/20 to-error/5',
  },
]

const operatingSystems = ['Ubuntu', 'CentOS', 'AlmaLinux', 'CloudLinux', 'Windows', 'RHEL', 'Rocky Linux']
const webServers = ['Nginx', 'Apache', 'Litespeed']
const tools = ['Git', 'GitHub', 'Grafana', 'Prometheus', 'Nagios', 'AWS CloudWatch']

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Technical Stack</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, infrastructure automation,
            and modern DevOps practices.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`glass rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 group`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <div className="space-y-6">
          {[
            { title: 'Operating Systems', items: operatingSystems },
            { title: 'Web Servers', items: webServers },
            { title: 'Tools & Platforms', items: tools },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass rounded-lg p-6 border border-primary/20"
            >
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <div className="flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
