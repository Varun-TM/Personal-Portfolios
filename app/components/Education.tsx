'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award, GraduationCap } from 'lucide-react'

const defaultDegrees = [
  {
    degree: 'BTech',
    field: 'Computer Science and Engineering',
    university: 'Calicut University',
    location: 'Thrissur, India',
    year: '2012 – 2016',
    highlights: ['Core CS fundamentals', 'Data structures and algorithms'],
  },
  {
    degree: 'BTech',
    field: 'Computer Science and Engineering',
    university: 'Capital University',
    location: 'Jharkhand, India',
    year: '2022',
    highlights: ['Advanced learning', 'Specialization in modern tech'],
  },
]

const defaultCerts = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    description: 'Validated expertise in designing scalable, highly available, and fault-tolerant systems on AWS',
    skills: ['AWS Architecture', 'Cloud Design', 'Infrastructure Planning', 'Cost Optimization'],
  },
]

export default function Education({ content = {} }: { content?: any }) {
  const data = {
    heading: 'Education & Certifications',
    intro:
      'Continuous learning and professional development through formal education and industry-recognized certifications.',
    learningTitle: 'Continuous Learning',
    learningText:
      'Committed to staying current with evolving cloud technologies and DevOps practices. Regular participation in technical training, industry conferences, and hands-on experimentation with new tools and frameworks.',
    learningAreas: ['Cloud Architecture', 'Kubernetes', 'Infrastructure Automation', 'Security'],
    ...content,
  }
  const education =
    Array.isArray(data.degrees) && data.degrees.length ? data.degrees : defaultDegrees
  const certifications =
    Array.isArray(data.certifications) && data.certifications.length
      ? data.certifications
      : defaultCerts
  const learningAreas: string[] = data.learningAreas
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{data.heading}</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">{data.intro}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu: any, index: number) => (
                <motion.div
                  key={edu.university}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-semibold text-sm">{edu.field}</p>
                    </div>
                    <span className="text-xs font-semibold text-white/50 bg-white/5 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm mb-3">{edu.university}</p>
                  <p className="text-white/50 text-sm mb-4">{edu.location}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight: string) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 rounded text-xs bg-primary/10 text-primary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-accent" size={28} />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert: any, index: number) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Award className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg leading-tight">{cert.name}</h4>
                      <p className="text-accent font-semibold text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs bg-accent/10 border border-accent/30 text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Learning Path */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="glass rounded-lg p-6 border border-highlight/20"
              >
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="text-highlight" size={20} />
                  {data.learningTitle}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed mb-4">{data.learningText}</p>
                <div className="space-y-2">
                  <p className="text-sm text-white/60">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {learningAreas.map((area: string) => (
                      <span key={area} className="px-2 py-1 rounded text-xs bg-highlight/10 text-highlight">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
