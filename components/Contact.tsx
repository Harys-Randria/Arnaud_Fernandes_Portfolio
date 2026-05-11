'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/lib/data'
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">04 — CONTACT</span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mt-3">Me Contacter</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            {portfolioData.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Colonne Gauche */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card p-10 lg:p-12 h-full">
              <h3 className="text-3xl font-semibold mb-6">Prêt à discuter ?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Je suis ouvert aux opportunités en CDI (Tech Lead / Architecte) 
                ainsi qu’aux missions freelance à forte valeur ajoutée.
              </p>

              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary-hover h-14 text-base font-semibold group"
                asChild
              >
                <a 
                  href={portfolioData.personalInfo.calendlyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Réserver un appel
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <div className="mt-12 space-y-6">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {portfolioData.contact.email}
                    </p>
                  </div>
                </a>

                <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">
                      {portfolioData.contact.phone}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite - Réseaux */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Retrouvez-moi</h3>
            
            <div className="space-y-4">
              {portfolioData.socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-7 card hover:border-primary"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {link.icon === 'Linkedin' && 'in'}
                      {link.icon === 'Github' && 'Gh'}
                      {link.icon === 'Briefcase' && '💼'}
                      {link.icon === 'Globe' && '🌐'}
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-sm text-muted-foreground">Profil professionnel</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}