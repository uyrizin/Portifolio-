import { Tag } from './Tag'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400">
            {project.name}
          </h3>
          {project.status && (
            <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-200">
              {project.status}
            </span>
          )}
        </div>
        <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

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
