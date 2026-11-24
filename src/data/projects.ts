export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  repoUrl?: string
  demoUrl?: string
  status?: string
}

export const projects: Project[] = [
  {
    id: 'aegis',
    name: 'AEGIS',
    description:
      'Framework modular em desenvolvimento para apoiar avaliações e auditorias de segurança em ambientes próprios ou com autorização explícita. A apresentação pública será limitada a documentação, arquitetura e demonstrações seguras.',
    tags: ['Cybersecurity', 'Security Automation', 'Python', 'Authorized Testing'],
    status: 'Em desenvolvimento',
  },
  {
    id: 'wifi-sentinel',
    name: 'WiFi Sentinel',
    description:
      'Projeto em desenvolvimento voltado a diagnóstico, monitoramento e auditoria de redes Wi-Fi em laboratórios e ambientes autorizados, com foco em visibilidade e documentação técnica.',
    tags: ['Wi-Fi Security', 'Network Monitoring', 'Linux', 'Networking'],
    status: 'Em desenvolvimento',
  },
  {
    id: 'orion',
    name: 'ORION',
    description:
      'Projeto de automação e inteligência com recursos de IA, em desenvolvimento. A documentação apresentará arquitetura, integrações e capacidades verificadas conforme forem validadas.',
    tags: ['Artificial Intelligence', 'Automation', 'Python', 'Security'],
    status: 'Em desenvolvimento',
  },
  {
    id: 'android-mirror',
    name: 'Android Mirror',
    description:
      'Projeto em desenvolvimento para espelhamento de tela Android, explorando desenvolvimento mobile, comunicação em tempo real e tecnologias como Kotlin e WebRTC.',
    tags: ['Android', 'Kotlin', 'WebRTC', 'Real-time Communication'],
    status: 'Em desenvolvimento',
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
