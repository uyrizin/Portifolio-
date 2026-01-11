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
    default: 'Yuri Higa | Back-end Developer',
    template: '%s | Yuri Higa',
  },
  description:
    'Desenvolvedor back-end com foco em .NET, Docker, SQL Server, MySQL, AWS e Azure. Estudante há 1 ano e meio, aprendendo CI/CD e automações com n8n. Localizado em Antônio João, MS, Brasil.',
  keywords: [
    'back-end developer',
    '.NET',
    'C#',
    'Docker',
    'SQL Server',
    'MySQL',
    'AWS',
    'Azure',
    'CI/CD',
    'n8n',
    'desenvolvedor backend',
  ],
  authors: [{ name: 'Yuri Higa' }],
  creator: 'Yuri Higa',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    siteName: 'Yuri Higa | Portfolio',
    title: 'Yuri Higa | Back-end Developer',
    description:
      'Desenvolvedor back-end com foco em .NET, Docker, SQL Server, MySQL, AWS e Azure. Estudante há 1 ano e meio, aprendendo CI/CD e automações.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yuri Higa - Back-end Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuri Higa | Back-end Developer',
    description:
      'Desenvolvedor back-end com foco em .NET, Docker, SQL Server, MySQL, AWS e Azure.',
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
  verification: {
    // Adicione seu código de verificação do Google Search Console
    // google: 'seu-codigo-aqui',
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
