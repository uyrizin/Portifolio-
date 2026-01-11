import Link from 'next/link'
import { Tag } from './Tag'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {project.name}
        </h3>
        <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 hover:underline focus-visible-ring dark:text-primary-400"
              aria-label={`Repositório do projeto ${project.name}`}
            >
              GitHub →
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-600 hover:underline focus-visible-ring dark:text-primary-400"
              aria-label={`Demo do projeto ${project.name}`}
            >
              Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
