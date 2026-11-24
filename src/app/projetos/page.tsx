'use client'

import { useState, useMemo } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { getProjects, getAllTags } from '@/data/projects'

export default function ProjetosPage() {
  const projects = getProjects()
  const allTags = getAllTags()
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTag = !selectedTag || project.tags.includes(selectedTag)
      const matchesSearch =
        !searchQuery ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTag && matchesSearch
    })
  }, [selectedTag, searchQuery])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Laboratório e pesquisa aplicada
        </p>
        <h1 className="mb-4 text-4xl font-bold">Projetos</h1>
        <p className="mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          Projetos autorais em desenvolvimento nas áreas de Cibersegurança,
          automação, inteligência artificial e desenvolvimento Android. Os
          detalhes públicos serão atualizados conforme cada recurso for
          implementado e validado.
        </p>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus-visible-ring dark:border-gray-700 dark:bg-gray-800 md:w-96"
            aria-label="Buscar projetos"
          />
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Filtrar por tecnologia:</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible-ring ${
                selectedTag === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              Todos
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible-ring ${
                  selectedTag === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Nenhum projeto encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
