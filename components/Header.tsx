'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { portfolioData } from '@/lib/data'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 
                 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="container-portfolio py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center overflow-hidden">
            {portfolioData.personalInfo.avatar ? (
              <Image
                src={portfolioData.personalInfo.avatar}
                alt="Arnaud Fernandés"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-white font-bold text-lg">AF</span>
            )}
          </div>
          <div>
            <span className="font-semibold text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              Arnaud Fernandés
            </span>
            <p className="text-[10px] text-muted-foreground -mt-0.5">Technical Lead Fullstack</p>
          </div>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-medium shadow-lg shadow-primary/20"
          >
            <a href={portfolioData.personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Prendre RDV
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <div className="container-portfolio py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            
            <Button 
              asChild 
              className="mt-4 w-full bg-primary hover:bg-primary-hover"
              onClick={closeMenu}
            >
              <a href={portfolioData.personalInfo.calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Prendre un appel
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}