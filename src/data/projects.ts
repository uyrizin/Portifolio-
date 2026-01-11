export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Contribuindo em Projeto Open Source - DIO',
    description:
      'Repositório desenvolvido para o lab "Contribuindo em um Projeto Open Source no GitHub" da Digital Innovation One. Aprendizado sobre formas de contribuição e prática com forks e pull requests.',
    tags: ['Git', 'GitHub', 'Open Source', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/dio-lab-open-source.git',
  },
  {
    id: '2',
    name: 'Projeto Banco de Dados - DIO',
    description:
      'Projeto desenvolvido como parte dos cursos da DIO, focado em modelagem de dados, SQL e administração de banco de dados. Prática com scripts DDL, DML e DQL.',
    tags: ['SQL Server', 'MySQL', 'SQL', 'Banco de Dados', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/banco-de-dados-.DIO.git',
  },
  {
    id: '3',
    name: 'Projeto API - DIO',
    description:
      'Desenvolvimento de API como parte dos desafios da Digital Innovation One. Implementação de endpoints RESTful e boas práticas de desenvolvimento back-end.',
    tags: ['.NET', 'C#', 'API', 'REST', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/PROJETO-API--DIO.git',
  },
  {
    id: '4',
    name: 'Resumo da Lab - DIO',
    description:
      'Repositório contendo resumos e anotações dos labs e cursos realizados na plataforma Digital Innovation One. Documentação de aprendizados e conceitos importantes.',
    tags: ['Documentação', 'DIO', 'Estudos'],
    repoUrl: 'https://github.com/uyrizin/Resumo-Da-Lab-DIO.git',
  },
  {
    id: '5',
    name: 'Trilha .NET - Fundamentos',
    description:
      'Desafio de projeto da trilha .NET Fundamentos da DIO. Aplicação dos conceitos básicos da plataforma .NET, incluindo sintaxe, tipos de dados e estruturas de controle.',
    tags: ['.NET', 'C#', 'Fundamentos', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/trilha-net-fundamentos-desafio.git',
  },
  {
    id: '6',
    name: 'Conversão de Temperatura',
    description:
      'Aplicação para conversão de temperaturas entre diferentes escalas (Celsius, Fahrenheit, Kelvin). Projeto prático desenvolvido durante os estudos.',
    tags: ['C#', '.NET', 'Aplicação'],
    repoUrl: 'https://github.com/uyrizin/conversao-temperatura.git',
  },
  {
    id: '7',
    name: 'Trilha .NET - POO (Programação Orientada a Objetos)',
    description:
      'Desafio de projeto focado em Programação Orientada a Objetos na plataforma .NET. Implementação de classes, herança, polimorfismo e encapsulamento.',
    tags: ['.NET', 'C#', 'POO', 'Orientação a Objetos', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/trilha-net-poo-desafio.git',
  },
  {
    id: '8',
    name: 'Trilha .NET - API',
    description:
      'Desafio de projeto da trilha .NET API da DIO. Desenvolvimento de APIs RESTful com ASP.NET Core, incluindo controllers, models e integração com banco de dados.',
    tags: ['.NET', 'C#', 'ASP.NET Core', 'API', 'REST', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/trilha-net-api-desafio.git',
  },
  {
    id: '9',
    name: 'Trilha .NET - Banco de Dados',
    description:
      'Desafio de projeto da trilha .NET Banco de Dados da DIO. Trabalho com Entity Framework, migrations, relacionamentos e consultas otimizadas em SQL Server.',
    tags: ['.NET', 'C#', 'Entity Framework', 'SQL Server', 'Banco de Dados', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/trilha-net-banco-de-dados-desafio.git',
  },
  {
    id: '10',
    name: 'Trilha .NET - Explorando',
    description:
      'Desafio de projeto da trilha .NET Explorando da DIO. Exploração de recursos avançados da plataforma .NET e frameworks relacionados.',
    tags: ['.NET', 'C#', 'DIO'],
    repoUrl: 'https://github.com/uyrizin/trilha-net-explorando-desafio.git',
  },
]

export function getProjects(): Project[] {
  return projects
}

export function getAllTags(): string[] {
  const allTags = new Set<string>()
  projects.forEach((project) => {
    project.tags.forEach((tag) => allTags.add(tag))
  })
  return Array.from(allTags).sort()
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((project) => project.tags.includes(tag))
}
