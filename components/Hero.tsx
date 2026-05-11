'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'
import { portfolioData } from '@/lib/data'
import Image from 'next/image'

export function Hero() {
  const { personalInfo, about } = portfolioData

  return (
    <section className="min-h-screen flex items-center relative pt-20 bg-background">
      <div className="container-portfolio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Colonne de gauche - Texte */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Technical Lead Disponible</span>
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold tracking-tighter gradient-text"
              >
                Arnaud Fernandes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl md:text-4xl text-muted-foreground mt-3"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground mt-4 max-w-lg"
              >
                {personalInfo.subtitle}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {about.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-hover h-14 text-base font-semibold group"
                asChild
              >
                <a href={personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-3 h-5 w-5" />
                  Prendre un RDV
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 text-base"
                asChild
              >
                <a href="#about">Découvrir mon parcours</a>
              </Button>
            </motion.div>
          </div>

          {/* Colonne de droite - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow / Effet lumineux */}
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-[3rem] blur-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/arnaud_fernandes.jpg"           
                  alt="Arnaud Fernandes - Technical Lead Fullstack"
                  width={520}
                  height={620}
                  priority
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Petit badge en bas de la photo */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-sm font-medium flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  Disponible
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-muted-foreground text-xs tracking-widest"
      >
        SCROLL
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-1"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}