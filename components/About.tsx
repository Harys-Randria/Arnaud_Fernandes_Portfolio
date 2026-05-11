'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { CheckCircle } from 'lucide-react'

export function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="section section-surface">
      <div className="container-portfolio">
        <div className="max-w-4xl mx-auto">
          
          {/* En-tête de section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-label">CHAPITRE 01</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-3">
              À propos de moi
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Texte principal */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p className="text-xl">
                  {about.description}
                </p>
              </div>
            </motion.div>

            {/* Highlights / Faits marquants */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                  Points forts
                </h3>
                
                <ul className="space-y-6">
                  {about.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex gap-4 group"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {highlight}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}