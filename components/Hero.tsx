'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'
import { portfolioData } from '@/lib/data'
import Image from 'next/image'

export function Hero() {
  const { personalInfo, about } = portfolioData

  return (
    <section className="hero min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="hero .content container-portfolio relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Technical Lead Disponible
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-6xl md:text-7xl font-bold tracking-tighter gradient-text"
            >
              Arnaud Fernandes
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl text-muted-foreground"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              {personalInfo.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary-hover h-14 text-base group" asChild>
                <a href={personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-3 h-5 w-5" />
                  Prendre un RDV
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-transparent rounded-[4rem] blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
                <Image
                  src="/arnaud_fernandes.jpg"
                  alt="Arnaud Fernandes"
                  width={520}
                  height={620}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}