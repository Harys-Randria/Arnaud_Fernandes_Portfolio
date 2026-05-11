'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { 
  Server, 
  Globe, 
  Cloud, 
  Database, 
  MessagesSquare, 
  Shield, 
  GitBranch, 
  Users,
  Cpu,
  Network,
  Lock,
  TestTube
} from 'lucide-react'

const categoryIcons: Record<string, any> = {
  Backend: Server,
  Frontend: Globe,
  'Microservices & Orchestration': Network,
  'Cloud Azure': Cloud,
  'Bases de données': Database,
  'Communication & Messaging': MessagesSquare,
  Testing: TestTube,
  Sécurité: Lock,
  'DevOps & Outils': GitBranch,
  Méthodologies: Users,
}

export function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="section bg-gradient-to-b from-background to-primary/5">
      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">02 — EXPERTISE TECHNIQUE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            <span className="text-foreground">Stack &</span>{' '}
            <span className="gradient-text">Compétences</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            {skills.categories.length} domaines d'expertise · Architecture cloud · DevOps
          </p>
        </motion.div>

        {/* Stats rapides */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-xs text-muted-foreground">Catégories</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
            <div className="text-2xl font-bold text-primary">8+</div>
            <div className="text-xs text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">Couverture CI/CD</div>
          </div>
        </motion.div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => {
            const Icon = categoryIcons[category.name] || Cpu
            
            return (
              <motion.div
                key={category.name}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Glow effect au hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                
                {/* Carte */}
                <div className="relative bg-gradient-to-br from-bg-card to-bg-surface rounded-2xl border border-border group-hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* En-tête avec icône */}
                  <div className="p-6 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">{category.name}</h3>
                    </div>
                    {/* Compteur de skills */}
                    <div className="text-xs text-muted-foreground">
                      {category.skills.length} technologies
                    </div>
                  </div>
                  
                  {/* Liste des skills */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1.5 text-xs font-mono rounded-lg bg-primary/5 border border-primary/10 text-muted-foreground group-hover:text-foreground transition-all duration-200 cursor-default"
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: 'rgba(var(--primary), 0.15)',
                            borderColor: 'rgba(var(--primary), 0.3)'
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Barre de progression décorative */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Badge de spécialisation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
            <span className="text-sm font-medium text-foreground">🎯 Spécialisations clés :</span>
            <div className="flex gap-2">
              {['Architecture Microservices', 'Event Sourcing', 'TDD', 'Kubernetes'].map((spec) => (
                <span key={spec} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}