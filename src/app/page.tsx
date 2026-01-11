'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { data } from '@/data/personal'
import { ProjectCard } from '@/components/ProjectCard'
import { getProjects } from '@/data/projects'

export default function Home() {
  const featuredProjects = getProjects().slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Olá, eu sou{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {data.name}
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
            {data.headline}
          </p>
          <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
            📍 {data.location}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus-visible-ring dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              Ver Projetos
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-300 focus-visible-ring dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
            >
              Sobre Mim
            </Link>
            <Button
              variant="outline"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.print()
                }
              }}
              className="no-print"
            >
              📄 Baixar CV
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold">Projetos em Destaque</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible-ring dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">Tecnologias & Ferramentas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: data.name,
            jobTitle: 'Back-end Developer',
            description: data.headline,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Antônio João',
              addressRegion: 'MS',
              addressCountry: 'BR',
            },
            sameAs: [
              data.links.github,
              data.links.linkedin,
              `mailto:${data.links.email}`,
            ],
            knowsAbout: data.skills,
          }),
        }}
      />
    </>
  )
}
