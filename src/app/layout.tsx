import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Yuri Higa | Cibersegurança, AppSec e Security Research',
    template: '%s | Yuri Higa',
  },
  description:
    'Portfólio de Yuri Higa, estudante de Cibersegurança na FIAP com foco em AppSec, análise de vulnerabilidades, segurança ofensiva e projetos próprios.',
  keywords: [
    'Yuri Higa',
    'cibersegurança',
    'cybersecurity',
    'Application Security',
    'AppSec',
    'análise de vulnerabilidades',
    'Pentest autorizado',
    'Linux',
    'Cloud Security',
    'DevSecOps',
  ],
  authors: [{ name: 'Yuri Higa' }],
  creator: 'Yuri Higa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Yuri Higa | Portfolio',
    title: 'Yuri Higa | Cibersegurança, AppSec e Security Research',
    description:
      'Estudante de Cibersegurança na FIAP. Projetos e estudos em AppSec, análise de vulnerabilidades e segurança ofensiva.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yuri Higa - Cibersegurança e AppSec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuri Higa | Cibersegurança e AppSec',
    description:
      'Portfólio de projetos e estudos em Cibersegurança, AppSec e análise de vulnerabilidades.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
