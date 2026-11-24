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
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
            Cibersegurança • AppSec • Security Research
          </p>
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
              Explorar Projetos
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
              📄 Imprimir Perfil
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
                Laboratório e desenvolvimento
              </p>
              <h2 className="text-3xl font-bold">Projetos em Destaque</h2>
            </div>
            <Link href="/projetos" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-400">
              Ver todos os projetos →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Conhecimentos em evolução
            </p>
            <h2 className="text-3xl font-bold">Tecnologias & Ferramentas</h2>
          </div>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: data.name,
            jobTitle: 'Estudante de Cibersegurança',
            description: data.headline,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Antônio João',
              addressRegion: 'MS',
              addressCountry: 'BR',
            },
            sameAs: [data.links.github, data.links.linkedin],
            knowsAbout: data.skills,
          }),
        }}
      />
    </>
  )
}
