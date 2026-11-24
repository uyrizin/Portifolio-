import { data } from '@/data/personal'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça Yuri Higa, estudante de Tecnologia em Cibersegurança na FIAP com foco em AppSec, análise de vulnerabilidades e segurança ofensiva.',
}

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
          Perfil profissional
        </p>
        <h1 className="mb-8 text-4xl font-bold">Sobre Mim</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {data.bio}
          </p>
        </div>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Áreas de interesse</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Application Security',
                description:
                  'Segurança de aplicações web e APIs, revisão de controles e identificação de vulnerabilidades.',
              },
              {
                title: 'Segurança ofensiva',
                description:
                  'Fundamentos de Pentest e validação técnica somente em laboratórios próprios ou ambientes autorizados.',
              },
              {
                title: 'Redes e Linux',
                description:
                  'Protocolos, diagnóstico, monitoramento e administração de ambientes Linux.',
              },
              {
                title: 'Cloud Security e DevSecOps',
                description:
                  'Fundamentos de segurança em nuvem e integração de práticas de segurança ao desenvolvimento.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Formação</h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-2 text-xl font-semibold">
              FIAP — Tecnologia em Cibersegurança
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tecnólogo em andamento.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Como trabalho</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
            <li>Testes somente com autorização e escopo definido.</li>
            <li>Registro de evidências, metodologia e limitações.</li>
            <li>Respeito à privacidade e divulgação responsável.</li>
            <li>Separação entre funcionalidades implementadas e planejadas.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
