'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Linkedin, Github, Briefcase, Mail, Globe } from 'lucide-react'
import { portfolioData } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Réseaux sociaux avec logos personnalisés
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arnaudfernandes/",
      icon: "linkedin",
      iconType: "lucide"
    },
    {
      name: "GitHub",
      url: "https://github.com/arnaud-fernandes",
      icon: "github",
      iconType: "lucide"
    },
    {
      name: "Malt",
      url: "https://www.malt.fr/profile/arnaudfernandes",
      icon: "/malt.png",
      iconType: "image",
      needsInvert: true 
    },
    {
      name: "Collective",
      url: "https://www.collective.work/profile/arnaud-fernandes",
      icon: "/collective.png",
      iconType: "image",
      needsInvert: true 
    },
    {
      name: "Site web",
      url: "https://www.tech-magister.com/",
      icon: "globe",
      iconType: "lucide"
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-border pt-16 pb-12">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              <span className="text-foreground">Arnaud</span>{' '}
              <span className="text-primary">Fernandes</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Technical Lead Fullstack<br />
              Architecte Microservices
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </div>
              <span className="text-xs text-muted-foreground">Disponible pour missions</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-5 text-foreground text-lg">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "#about", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#experience", label: "Expérience" },
                { href: "#contact", label: "Contact" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm w-fit"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-5 text-foreground text-lg">Contact</h4>
            <div className="space-y-4">
              <a 
                href={`mailto:${portfolioData.contact.email}`} 
                className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-4 w-4 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">{portfolioData.contact.email}</span>
              </a>
              <a 
                href={`tel:${portfolioData.contact.phone}`} 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Briefcase className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{portfolioData.contact.phone}</span>
              </a>
              <div className="pt-2 text-xs text-muted-foreground">
                <p>📍 {portfolioData.personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold mb-5 text-foreground text-lg">Réseaux</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-card hover:bg-primary border border-border hover:border-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  title={link.name}
                >
                  {link.iconType === "lucide" && (
                    <>
                      {link.icon === "linkedin" && <Linkedin className="h-4 w-4 group-hover:text-white transition-colors" />}
                      {link.icon === "github" && <Github className="h-4 w-4 group-hover:text-white transition-colors" />}
                      {link.icon === "globe" && <Globe className="h-4 w-4 group-hover:text-white transition-colors" />}
                    </>
                  )}
                  {link.iconType === "image" && (
                    <Image
                      src={link.icon as string}
                      alt={link.name}
                      width={18}
                      height={18}
                      className={`w-4 h-4 object-contain transition-all duration-300 ${
                        link.needsInvert 
                          ? 'brightness-0 invert group-hover:brightness-0 group-hover:invert' 
                          : 'group-hover:brightness-0 group-hover:invert'
                      }`}
                    />
                  )}
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-background border border-border rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
            {/* Statistique rapide */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                💼 {socialLinks.length} plateformes<br />
                📍 Disponible en remote / France
              </p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} Arnaud Fernandes. Tous droits réservés.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Fait avec <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> et beaucoup de café
          </p>
        </motion.div>
      </div>
    </footer>
  )
}