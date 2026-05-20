'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { portfolioData } from '@/lib/data'
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Contact() {
  // Données des réseaux sociaux avec icônes personnalisées
  const socialLinksWithIcons = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/arnaudfernandes/",
      icon: "/linkedin.png",
      description: "Profil professionnel"
    },
    {
      name: "GitHub",
      url: "https://github.com/arnaud-fernandes",
      icon: "/github.png",
      description: "Portfolio code"
    },
    {
      name: "Malt",
      url: "https://www.malt.fr/profile/arnaudfernandes",
      icon: "/malt.png",
      description: "Freelance marketplace"
    },
    {
      name: "Collective",
      url: "https://www.collective.work/profile/arnaud-fernandes",
      icon: "/collective.png",
      description: "Communauté tech"
    },
    {
      name: "Site web",
      url: "https://www.tech-magister.com/",
      icon: "/website.png",
      description: "Portfolio personnel"
    }
  ]

  return (
    <section id="contact" className="section bg-gradient-to-b from-primary/5 to-background">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">04 — CONTACT & RÉSEAUX</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
            <span className="text-foreground">Restons en</span>{' '}
            <span className="gradient-text">contact</span>
          </h2>
          <div className="section-divider mx-auto mt-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            {portfolioData.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Colonne Gauche - Prise de RDV */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8 lg:p-10 h-full relative overflow-hidden group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Prêt à discuter ?</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Je suis ouvert aux opportunités freelance à forte valeur ajoutée.
                </p>

                {/* Calendly Button */}
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground h-14 text-base font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
                  asChild
                >
                  <a 
                    href={portfolioData.personalInfo.calendlyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    Réserver un créneau 
                    <ArrowRight className="ml-3 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Contact direct */}
                <div className="mt-10 space-y-5">
                  <a 
                    href={`mailto:${portfolioData.contact.email}`} 
                    className="flex items-center gap-4 group/email p-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover/email:bg-primary/20 transition-all">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email professionnel</p>
                      <p className="font-medium group-hover/email:text-primary transition-colors">
                        {portfolioData.contact.email}
                      </p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${portfolioData.contact.phone}`} 
                    className="flex items-center gap-4 group/phone p-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover/phone:bg-primary/20 transition-all">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone direct</p>
                      <p className="font-medium group-hover/phone:text-primary transition-colors">
                        {portfolioData.contact.phone}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Disponibilité */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </div>
                    <span>Disponible pour missions immédiates</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite - Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span>Retrouvez-moi sur</span>
              <span className="text-primary text-sm font-normal">5 plateformes</span>
            </h3>
            
            <div className="space-y-3">
              {socialLinksWithIcons.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-xl bg-gradient-to-br from-bg-card to-bg-surface border border-border hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Logo personnalisé */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center p-2 group-hover:bg-primary/20 transition-all duration-300">
                      <Image
                        src={link.icon}
                        alt={link.name}
                        width={24}
                        height={24}
                        className="w-5 h-5 object-contain filter brightness-0 invert group-hover:invert-0 transition-all"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {link.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>

            {/* Badge supplémentaire */}
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-xs text-muted-foreground">
                💬 Réponse sous 24h · Disponible pour calls découverte 15-30min
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}