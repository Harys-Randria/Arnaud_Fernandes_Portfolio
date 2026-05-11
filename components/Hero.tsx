'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, Code2, Award, Users } from 'lucide-react'
import { portfolioData } from '@/lib/data'
import Image from 'next/image'

export function Hero() {
  const { personalInfo, about } = portfolioData

  const highlights = [
    { icon: Code2, text: '+50 Projets Livrés' },
    { icon: Award, text: 'Architecture cloud' },
    { icon: Users, text: 'Coaching onshore/offshore' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background épuré - juste un léger dégradé */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-portfolio relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge statut - plus discret */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted-foreground">Technical Lead · Disponible</span>
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="text-foreground">{personalInfo.name.split(' ')[0]}</span>{' '}
              <span className="text-primary">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Titre poste */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {personalInfo.subtitle}
              </p>
            </motion.div>

            {/* Description courte */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed max-w-lg pt-2"
            >
              {about.description.split('.')[0]}.{' '}
              <span className="text-primary font-medium">Expert en architecture microservices</span>{' '}
              et développement d'applications scalables.
            </motion.p>

            {/* Highlights simplifiés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-none hover:shadow-md transition-all duration-300 h-12 px-6 group"
                asChild
              >
                <a href={personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Prendre un RDV
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:border-primary/50 hover:bg-primary/5 h-12 px-6"
                asChild
              >
                <a href="#experience">
                  <Code2 className="mr-2 h-4 w-4" />
                  Voir mes réalisations
                </a>
              </Button>
            </motion.div>

            {/* Tech stack - discrète mais présente */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-2 pt-6"
            >
              {['.NET 8', 'React', 'TypeScript', 'Go', 'Azure', 'K8s'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-full bg-primary/5 border border-primary/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Photo - épurée, sans effets excessifs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Simple glow derrière la photo */}
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
              
              {/* Cadre photo minimal */}
              <div className="relative bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl overflow-hidden border border-primary/20 shadow-xl">
                <Image
                  src="/arnaud_fernandes.jpg"
                  alt="Arnaud Fernandes"
                  width={450}
                  height={550}
                  priority
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}