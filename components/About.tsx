'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { CheckCircle } from 'lucide-react'

export function About() {
  const { about } = portfolioData

  return (
    <section id="about" className="section section-surface">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">01 — ORIGINE</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-3">À propos de moi</h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {about.description}
          </motion.div>

          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="card p-10">
              <h3 className="text-2xl font-semibold mb-8">Points forts</h3>
              <ul className="space-y-6">
                {about.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}