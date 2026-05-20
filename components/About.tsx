'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { CheckCircle, Sparkles, Rocket, Target, Zap } from 'lucide-react'

export function About() {
  const { about } = portfolioData

  const stats = [
    { value: '+50', label: 'Projets Livrés', icon: Zap },
    { value: '5+', label: 'Domaines applicatifs', icon: Target },
    { value: '8+', label: 'Années XP', icon: Rocket },
  ]

  return (
    <section id="about" className="section">
      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">01 — QUI SUIS-JE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            <span className="gradient-text">Expertise technique</span>
            <br />
            <span className="text-foreground">et vision stratégique</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne gauche - Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge expérience */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fullstack Senior · 8+ ans</span>
            </div>

            {/* Description avec mise en valeur */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {about.description.split('.')[0]}.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {about.description.split('.')[1]}.{about.description.split('.')[2]}
              </p>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Colonne droite - Points forts */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect subtil */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-50" />
              
              <div className="relative bg-gradient-to-br from-bg-card to-bg-surface rounded-2xl border border-primary/10 p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Ce qui me définit
                </h3>
                
                <ul className="space-y-5">
                  {about.highlights.map((highlight, i) => (
                    <motion.li 
                      key={i} 
                      className="flex gap-3 group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="relative mt-1">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:blur-md transition-all" />
                        <CheckCircle className="w-5 h-5 text-primary relative z-10 flex-shrink-0" />
                      </div>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Ligne de séparation */}
                <div className="mt-8 pt-6 border-t border-primary/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Secteurs d'expérience</span>
                    <div className="flex gap-2">
                      {['Transport', 'Retail', 'Services'].map((sector) => (
                        <span key={sector} className="px-2 py-1 rounded-md bg-primary/5 text-primary text-xs">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ligne de compétences clés */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {['Architecture Microservices', 'Event Sourcing', 'TDD', 'CI/CD', 'Cloud Azure', 'Kubernetes'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm rounded-full bg-primary/5 border border-primary/10 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}