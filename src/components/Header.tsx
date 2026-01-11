'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { data } from '@/data/personal'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-primary-600 focus-visible-ring dark:text-primary-400"
            aria-label="Página inicial"
          >
            {data.name.split(' ')[0]}
          </Link>

          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <ul className="hidden gap-6 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-primary-600 focus-visible-ring dark:hover:text-primary-400 ${
                      pathname === item.href
                        ? 'font-semibold text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 focus-visible-ring dark:text-gray-300 dark:hover:bg-gray-800"
                aria-label={
                  theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'
                }
              >
                {theme === 'dark' ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              aria-label="Menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
