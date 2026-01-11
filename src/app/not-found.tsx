import Link from 'next/link'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">Página não encontrada</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        A página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 focus-visible-ring dark:bg-primary-500 dark:hover:bg-primary-600"
      >
        Voltar para Home
      </Link>
    </div>
  )
}
