'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="section section-surface">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">CHAPITRE 02</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-3">
            Compétences
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="card p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-primary" />
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tech-tag">
                    {skill}
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