import { data } from '@/data/personal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Sou Yuri Higa, desenvolvedor back-end em formação, com 1 ano e meio de experiência prática em .NET, Docker, SQL Server, MySQL, AWS e Azure.',
}

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Sobre Mim</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {data.bio}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Experiência</h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Back-end Developer</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Desenvolvimento de soluções back-end com foco em criar aplicações
                escaláveis, seguras e eficientes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  .NET
                </span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  Docker
                </span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  SQL Server
                </span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  MySQL
                </span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  AWS
                </span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                  Azure
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Formação</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-semibold">
                Digital Innovation One (DIO)
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                Cursos e bootcamps em desenvolvimento back-end, cloud computing e tecnologias modernas.
              </p>
              <a
                href="https://web.dio.me/users/yurihigaleandro1?tab=achievements"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:underline focus-visible-ring dark:text-primary-400"
              >
                Ver conquistas e certificados na DIO
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
