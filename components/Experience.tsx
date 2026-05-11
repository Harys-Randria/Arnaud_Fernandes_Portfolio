'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users, Star } from 'lucide-react'

export function Experience() {
  const { experience } = portfolioData

  // Compter les années d'expérience totale
  const totalYears = experience.reduce((total, job) => {
    const period = job.period
    const match = period.match(/(\d{4})/)
    if (match) {
      const year = parseInt(match[1])
      const currentYear = new Date().getFullYear()
      if (period.includes('Présent')) {
        return total + (currentYear - year)
      }
    }
    return total + 2 // Approximation
  }, 0)

  return (
    <section id="experience" className="section bg-gradient-to-b from-background to-primary/5">
      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">03 — PARCOURS PROFESSIONNEL</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            <span className="text-foreground">Expérience</span>{' '}
            <span className="gradient-text">& Réalisations</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
          <div className="flex justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>{experience.length} expériences</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{totalYears}+ années d'expérience</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline moderne */}
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Ligne de timeline */}
              {index !== experience.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />
              )}
              
              {/* Dot avec icône */}
              <div className="absolute left-0 top-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                  <div className="relative w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Carte */}
              <div className="card relative overflow-hidden group">
                {/* Badge actuel si présent */}
                {job.period.includes('Présent') && (
                  <div className="absolute top-0 right-0">
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Star className="w-3 h-3" />
                        Actuel
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* En-tête */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold leading-tight group-hover:text-primary transition-colors">
                        {job.position}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary font-medium">{job.company}</span>
                      </div>
                    </div>
                    
                    {/* Période */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap bg-primary/5 px-3 py-1.5 rounded-full">
                      <Calendar className="h-3.5 w-3.5" />
                      {job.period}
                    </div>
                  </div>

                  {/* Lieu */}
                  {job.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5 pb-3 border-b border-border/50">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                    {job.description}
                  </p>

                  {/* Bullets avec icônes améliorées */}
                  {job.bullets && job.bullets.length > 0 && (
                    <div className="space-y-3 mb-6">
                      {job.bullets.map((bullet, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="flex gap-3 group/bullet"
                        >
                          <div className="mt-1 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover/bullet:scale-125 transition-transform" />
                          </div>
                          <span className="text-muted-foreground text-sm leading-relaxed group-hover/bullet:text-foreground transition-colors">
                            {bullet}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Technologies avec meilleure présentation */}
                  {job.technologies && job.technologies.length > 0 && (
                    <div className="pt-4 mt-2 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.slice(0, 12).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/5 border border-primary/10 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                        {job.technologies.length > 12 && (
                          <span className="px-2.5 py-1 text-xs rounded-md bg-primary/5 text-muted-foreground">
                            +{job.technologies.length - 12}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Leader technique avec expérience confirmée en architecture microservices
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}