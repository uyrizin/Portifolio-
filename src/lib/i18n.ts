// Configuração simples de i18n
// Pronto para expansão com bibliotecas como next-intl

export const locales = {
  'pt-BR': {
    home: 'Home',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
    // Adicione mais traduções conforme necessário
  },
  'en-US': {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
} as const

export type Locale = keyof typeof locales

export const defaultLocale: Locale = 'pt-BR'

export function getTranslations(locale: Locale = defaultLocale) {
  return locales[locale] || locales[defaultLocale]
}
