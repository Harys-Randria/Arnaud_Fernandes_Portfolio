'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">02 — EXPERTISE</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-3">Compétences</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="card p-9 group hover:border-primary/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3 className="text-2xl font-semibold mb-8">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}