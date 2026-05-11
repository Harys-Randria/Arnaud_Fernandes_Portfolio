import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"], 
  variable: '--font-sans' 
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"], 
  variable: '--font-mono' 
});

export const metadata: Metadata = {
  title: 'Arnaud Fernandes | Technical Lead Fullstack & Architecte Microservices',
  description: 'Portfolio professionnel - Expert .NET 8, React, Azure, Kubernetes et architecture microservices.',
  icons: {
    icon: '/arnaud_fernandes.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark">  
      <body 
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  )
}