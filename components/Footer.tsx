'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Linkedin, Github, Briefcase, Mail } from 'lucide-react'
import { portfolioData } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border pt-16 pb-12">
      <div className="container-portfolio">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Branding */}
          <div>
            <h3 className="text-3xl font-bold tracking-tighter mb-3">Arnaud Fernandes</h3>
            <p className="text-muted-foreground">
              Technical Lead Fullstack &<br />Architecte Microservices
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-5 text-foreground">Navigation</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">À propos</a>
              <a href="#skills" className="hover:text-foreground transition-colors">Compétences</a>
              <a href="#experience" className="hover:text-foreground transition-colors">Expérience</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-foreground">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-foreground transition-colors block">
                {portfolioData.contact.email}
              </a>
              <a href={`tel:${portfolioData.contact.phone}`} className="hover:text-foreground transition-colors block">
                {portfolioData.contact.phone}
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-5 text-foreground">Suivez-moi</h4>
            <div className="flex gap-4">
              {portfolioData.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-card hover:bg-primary hover:text-primary-foreground border border-border rounded-xl flex items-center justify-center transition-all hover:scale-110"
                >
                  {link.icon === 'Linkedin' && <Linkedin className="h-5 w-5" />}
                  {link.icon === 'Github' && <Github className="h-5 w-5" />}
                  {link.icon === 'Briefcase' && <Briefcase className="h-5 w-5" />}
                  {link.icon === 'Globe' && <span className="text-xl">🌐</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Arnaud Fernandes. Tous droits réservés.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Fait avec <Heart className="h-4 w-4 text-primary fill-primary" /> et beaucoup de café
          </p>
        </div>
      </div>
    </footer>
  )
}