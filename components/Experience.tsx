'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="section section-surface">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">03 — PARCOURS</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-3">Expérience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experience.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-dot" />

              <div className="card p-8 md:p-10 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{job.position}</h3>
                    <p className="text-xl text-primary mt-1 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap pt-1">
                    {job.period}
                  </div>
                </div>

                {job.location && (
                  <div className="flex items-center gap-2 text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {job.description}
                </p>

                {/* Bullets */}
                {job.bullets && job.bullets.length > 0 && (
                  <ul className="space-y-3 mb-8 text-muted-foreground">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}